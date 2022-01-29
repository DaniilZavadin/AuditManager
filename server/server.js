const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
const jsonParser = bodyParser.json()

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage }).single('file');

app.listen(8000, () => {
    console.log("running on 8000");
})




app.post('/uploadfile', (req, res) => {
    upload(req, res, (err) => {
        if (err) return res.status(500).json(err)
        return res.status(200).send(req.file)
    })
})

app.post('/uploadjson', jsonParser, (req, res) => {
    const filename = 'data.json';
    fs.readFile(filename, (err, data) => {
        if (err) throw err
        const noteDataArr = JSON.parse(data);
        noteDataArr.push(req.body)
        fs.writeFile(filename, JSON.stringify(noteDataArr), (err) => {
            if (err) throw err;
        });
    });

    return res.status(200).send('JSON UPDATED')
})
