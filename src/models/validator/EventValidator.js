const { body, validationResult } = require('express-validator')
const {ErrorHandler} = require('../../helpers/Error')
const TYPES = require('../../models/EventType');

const REGEX_TIMESTAMP = '((((19|20)([2468][048]|[13579][26]|0[48])|2000)-02-29|((19|20)[0-9]{2}-(0[4678]|1[02])-(0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}-(0[1359]|11)-(0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}-02-(0[1-9]|1[0-9]|2[0-8])))\s([01][0-9]|2[0-3]):([012345][0-9]):([012345][0-9]))';

const eventInputValidationRules = () => {
  return [
    body('name').isString(),
    body('description').isString(),
    body('type').custom( type => type in TYPES),
    body('eventURL').optional().isArray(),
    body('startTime').matches(REGEX_TIMESTAMP),
    body('endTime').matches(REGEX_TIMESTAMP),
    body('location').custom(location => {
      //TODO  validate geolocation
      return location.coords !== null;
    })
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  console.log(extractedErrors);
  throw new ErrorHandler(422, extractedErrors);
}

module.exports = {
  eventInputValidationRules,
  validate,
}