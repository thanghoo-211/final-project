const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Data = new Schema({
    fan: String,
    pump: String,
    noti: String,
    _msgid: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('control', Data);