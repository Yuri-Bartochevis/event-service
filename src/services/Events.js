const Event = require('../models/Event');
const EventStatus = require('../models/EventStatus');

exports.save = async function (req, res, next) {
  const event = prepareData(req.body);

  event = await Event.create(event)

  return response.json(dev);
}

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

exports.view = function (req, res) {
  res.render('users/view', {
    title: 'Viewing user ' + req.user.name,
    user: req.user
  });
};

exports.delete = function (req, res) {
  res.render('users/edit', {
    title: 'Editing user ' + req.user.name,
    user: req.user
  });
};

exports.update = function (req, res) {
  // Normally you would handle all kinds of
  // validation and save back to the db
  var user = req.body.user;
  req.user.name = user.name;
  req.user.email = user.email;
  res.redirect('back');
};

exports.list = function (req, res) {
  res.render('users/view', {
    title: 'Viewing user ' + req.user.name,
    user: req.user
  });
};