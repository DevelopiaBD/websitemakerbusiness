const express = require("express");
const path = require('path');

const app = express();
const PORT = 3000;




app.use(express.static(path.join(__dirname, '..')));
console.log(__dirname);


app.get("/", (req, res)=>{
    res.send("I am On Abir.......")
})


app.get("/websites/portfolio1", (req, res) => {
    res.sendFile(path.join(__dirname, '../Portfolio1_orange_lightOrange/index.html'));
})

app.get("/websites/portfolio2", (req, res) => {
    res.sendFile(path.join(__dirname, '../Portfolio2_blue_light/index.html'));
})

app.get("/websites/portfolio3", (req, res) => {
    res.sendFile(path.join(__dirname, '../Portfolio3_vio_light/index.html'));
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



