const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

// Configure Cloudinary with your account credentials
cloudinary.config({
  cloud_name: process.env.Cloudinary_Cloud_Name,
  api_key: process.env.Cloudinary_API_KEY,
  api_secret: process.env.Cloudinary_API_SECRET
});

// Set up the storage engine for Multer with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: process.env.CLOUDINARY_FOLDER_NAME, // Optional - Change to the folder name you want
    allowed_formats: ['jpg', 'jpeg', 'png'], // Optional - Allowed file formats
    // You can add more parameters here according to your requirements
  }
});

// Create a Multer instance and set the storage engine
const upload = multer({ storage: storage });



module.exports = {
    uploadFile: (req, res, next) => {
      // Handle the file upload using the "upload" middleware
      upload.single('file')(req, res, function (err) {
          if (err) {
              // Handle any Multer or Cloudinary upload errors here
              console.log(err);
              return res.status(500).json({ error: err.message });
          }

          res.status(200).json({ message: "Successfully Uploaded"});
      });
    },
  };
  



// const AWS = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');
// require('dotenv').config();

// // Configure AWS SDK
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// const s3 = new AWS.S3();

// // Set up Multer for file uploads
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.AWS_BUCKET_NAME, // Use the environment variable directly // Set the ACL as per your requirements
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       // Use a unique key to avoid overwriting files with the same name
//       cb(null, Date.now().toString() + '-' + file.originalname);
//     },
//   }),
// });

// module.exports = {
//   uploadFile: (req, res, next) => {
//     // Handle the file upload using the "upload" middleware
//     upload.single('file')(req, res, function (err) {
//       if (err) {
//         // Handle any Multer or S3 upload errors here
//         console.log(err);
//         return res.status(500).json({ error: err.message });
//       }
//       res.status(400).json({ message: "Sucessfully Uploaded" });// Continue to the next middleware or route
//     });
//   },
// };
