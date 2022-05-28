const mongoose = require('mongoose');

async function connect() {
    try {

        await mongoose.connect('mongodb+srv://suaneo:Thanghoo211@cluster0.ksvmp.mongodb.net/db_datn');
        console.log('kết nối thành công')
    } catch (error) {
        console.log('kết nối thất bại')
    }
}
module.exports = { connect };