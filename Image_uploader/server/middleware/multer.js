const multer = require('multer');

//set storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },

  //changing the filename as per our requirement
  filename: function (req, file, cb) {
    //images.jpg
    var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));

    cb(null, file.fieldname + '-' + Date.now() + ext);
  },
});

//exporting so that other module can use it
module.exports = store = multer({ storage: storage });
