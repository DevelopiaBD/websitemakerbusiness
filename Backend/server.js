const express = require("express");
const path = require('path');

const app = express();
const PORT = 3000;

const tagRef = "minimal";


app.use(express.static(path.join(__dirname, '..')));
console.log(__dirname);


app.get("/", (req, res)=>{
    res.send("I am On Abir.......")
})


app.get(`/${tagRef}/website1`, (req, res) => {
    res.sendFile(path.join(__dirname, '../Portfolio1_orange_lightOrange/index.html'));
})

app.get(`/${tagRef}/website2`, (req, res) => {
    res.sendFile(path.join(__dirname, '../Portfolio2_blue_light/index.html'));
})

app.get(`/${tagRef}/website3`, (req, res) => {
    res.sendFile(path.join(__dirname, '../Portfolio3_vio_light/index.html'));
})
//  osd

app.get("/pro/website4", (req, res) => {
    res.sendFile(path.join(__dirname, '../Portfolio4_/index.html'));
})
app.get("/pro/website5", (req, res) => {
    res.sendFile(path.join(__dirname, '../Portfolio5/index.html'));
})




app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../Others/wrongUrl.html'));
})
//  osd


app.listen(PORT, ()=>{
    try {
        console.log(`Server is running at http://localhost:${PORT}`);
        
    } catch (error) {
        console.log(error.message);
        process.exit(1);
        
    }
})



