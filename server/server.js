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
const filename = 'data.json';

app.listen(8000, () => {
    console.log("running on 8000");
})


app.post('/uploadfile', (req, res) => {
    upload(req, res, (err) => {
        if (err) return res.status(500).json(err)
        return res.status(200).send(req.file)
    })
})

app.post('/addinspection', jsonParser, (req, res) => {
    fs.readFile(filename, (err, data) => {
        if (err) throw err
        const inspecDataArr = JSON.parse(data);
        inspecDataArr.push(req.body)
        fs.writeFile(filename, JSON.stringify(inspecDataArr), (err) => {
            if (err) throw err;
        });
    });

    return res.status(200).send('ADD INSPECTION')
})

app.post('/addnote', jsonParser, (req, res) => {
    fs.readFile(filename, (err, data) => {
        const inspecDataArr = JSON.parse(data);
        if (err) throw err

        const toEdit = inspecDataArr.findIndex(el=>el.id === req.body.id);
        inspecDataArr[toEdit].notes.push({
            issue: req.body.issue,
            recomendations: req.body.recomendations,
            photo: req.body.photo
        })
        fs.writeFile(filename, JSON.stringify(inspecDataArr), (err) => {
            if (err) throw err;
        });
    })
    return res.status(200).send('ADD NOTE')
});

app.get('/data', function (req, res) {
    fs.readFile(filename, (err, data) => {
        const dataList = JSON.parse(data);
        res.send(dataList)
    })
});