var express = require('express');
var router = express.Router();
const Data = require('../models/data')
const Control = require('../models/control');
const control = require('../models/control');
/* GET home page. */
router.get('/', function (req, res, next) {

  Data.find({}).limit(10).sort({$natural:-1}).then((data) => {
    return res.json(data)
  })

});

router.get('/now', function (req, res, next) {
  Data.find({}).limit(1).sort({$natural:-1}).then((data) => {
    return res.json(data)
  })
})




router.get('/noti', async function (req, res, next){
  const filter = { id: '627297a76ddd0b6ac234526d' };
  const data = await Control.find({}).limit(1).sort({$natural:-1}).then((data) => {
    return res.json(data)
  })
})





router.post('/updatefan', async function (req, res, next) {
  const filter = { id: '627297a76ddd0b6ac234526d' };

  const data = await Control.updateOne(filter, { fan: `${req.query.fan}` })
  return res.json(data);
})
router.post('/updatepump', async function (req, res, next) {
  const filter = { id: '627297a76ddd0b6ac234526d' };

  const data = await Control.updateOne(filter, { pump: `${req.query.pump}` })
  return res.json(data);
})
module.exports = router;
