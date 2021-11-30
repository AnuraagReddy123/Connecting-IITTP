const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const upload = require('../middleware/upload');

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;


let gfs;
// const conn = mongoose.connection;
// conn.once('open',() => {
//     gfs = Grid(conn.db,mongoose.mongo);
//     gfs.collection('photos');
// })

const uri = process.env.ATLAS_URI;
const connect = mongoose.createConnection(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(connect.db,{
        bucketName: "photos"
    });
});

const router = require('express').Router();

router.route('/uploadImage').post(upload.single('file'), (req, res) => {
    try {
        if (!req.file) return res.status(404).json('file not found');
  
        const imageURL = `${url}/files/${req.file.filename}`;
        res.status(200).json(imageURL);
    }catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:filename',(request,response) => {
    console.log(request.params.filename);
    try{
        const file = gfs.find({filename : request.params.filename});
        gfs.openDownloadStreamByName(request.params.filename).pipe(response);
    }
    catch(error) {
        console.log(error);
        response.status(500).json(error);
    }
});

module.exports = router;