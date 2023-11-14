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
    folder: process.env.CLOUDINARY_FOLDER_NAME,
    allowed_formats: ['jpg', 'jpeg', 'png'],
  }
});

// Create a Multer instance and set the storage engine
const upload = multer({ storage: storage });

module.exports = {
  uploadFile: async (req, res, next) => {
    // Handle the file upload using the "upload" middleware
    upload.single('file')(req, res, async function (err) {
      if (err) {
        // Handle any Multer or Cloudinary upload errors here
        console.log(err);
        return res.status(500).json({ error: err.message });
      }

      try {
        //const cloudinaryInfo = await cloudinary.uploader.upload(req.file.path);
        
        const publicId = req.file?.filename; // Use the filename as a unique identifier
        const publicUrl = req.file?.path; // Use the path as the public URL
        const assetId = req.file?.public_id; // This should be available in Multer's Cloudinary response
        console.log(publicId);
        // You can use this publicId in your further processing or response
        res.status(200).json({ message: "Successfully Uploaded", publicId  ,publicUrl , assetId});
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching Cloudinary information' });
      }
    });
  },
};
