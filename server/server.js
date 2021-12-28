const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage}).single('file');
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) return res.status(500).json(err)
        return res.status(200).send(req.file)
    })
})

app.listen(8000, () => {
    console.log("running on 8000");
})