const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Data = new Schema({
    nhiet_do: String,
    do_am: String,
    co2: String,
    fan: String,
    pumb: String,
    _msgid: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('data', Data);