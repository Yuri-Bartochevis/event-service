const Event = require('../models/Event');
const EventStatus = require('../models/EventStatus');

exports.save = async function (req, res, next) {
  const event = prepareData(req.body);

  const response = await Event.create(event)

  return res.json(response);
}

exports.view = function (req, res) {
};

exports.delete = function (req, res) {
};

exports.update = function (req, res) {
};

exports.list = function (req, res) {
};

prepareData = (eventDTO) => {
  const{name,description,type,eventURL,imageURL,startTime,endTime,location} = eventDTO
  
  const daoLocation = {
    type: 'Point',
    coordinates: [location.coords.longitude, location.coords.latitude],
  };

  const status = EventStatus.WAITING;
  return {
    name,
    description,
    type: Symbol(type),
    status,
    eventURL,
    imageURL,
    startTime,
    endTime,
    location: daoLocation
  }
}