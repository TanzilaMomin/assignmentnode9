const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/MahData", (req,res)=>{
    res.send([
        {city:"Mumbai",state:"Maharashtra",Mah:true},
        {city:"Hyderabad",state:"Telangana",Mah:false},
        {city:"Pune",state:"Maharashtra",Mah:true},
        {city:"Warangal",state:"Telangana",Mah:false},
        {city:"Karimnagar",state:"Telangana",Mah:false},
        {city:"Aurangabad",state:"Maharashtra",Mah:true},
        {city:"Nizamabad",state:"Telangana",Mah:false},
        {city:"Nashik",state:"Maharashtra",Mah:true}
    ])
})

app.listen(5090, ()=>{
    console.log("API is running on 5090 Port....");
})