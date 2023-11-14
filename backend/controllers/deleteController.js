const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure Cloudinary with your account credentials
cloudinary.config({
  cloud_name: process.env.Cloudinary_Cloud_Name,
  api_key: process.env.Cloudinary_API_KEY,
  api_secret: process.env.Cloudinary_API_SECRET
});


module.exports = {
  // Your existing uploadFile function...

  removeImage: async (req, res, next) => {
    const { publicId } = req.body; 

    if (!publicId) {
      return res.status(400).json({ error: 'Public ID is required for image removal' });
    }

    try {

        // const folder = process.env.CLOUDINARY_FOLDER_NAME;
        // const fullPublicId = folder ? `${folder}/${publicId}` : publicId;
        console.log(publicId);
        cloudinary.uploader.destroy(publicId, function(result) { console.log(result) });


      res.status(200).json({ message: `Image with id ${publicId} removed from Cloudinary` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error removing image from Cloudinary' });
    }
  },
};
