const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: process.env.ATLAS_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (request, file) => {
    const match = ['image/png', 'image/jpg'];
    if (match.indexOf(file.mimetype) === -1)
      return null;

    return {
      bucketName: 'photos',
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
