const data = [
  {
      "latitude": "82.30",
      "longitude": "62.20",
      "geo": "82.30, 62.20",
      "city": "Alert",
      "province_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Flag_of_Nunavut.svg/23px-Flag_of_Nunavut.svg.png",
      "province": "Nunavut",
      "country_icon": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/23px-Flag_of_Canada.svg.png",
      "country": "Canada"
  },
  {
      "latitude": "81.36",
      "longitude": "16.40",
      "geo": "81.36, 16.40",
      "city": "Nord",
      "province_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/23px-Flag_of_Greenland.svg.png",
      "province": "Greenland",
      "country_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/20px-Flag_of_Denmark.svg.png",
      "country": "Denmark"
  },
  {
      "latitude": "79.59",
      "longitude": "85.56",
      "geo": "79.59, 85.56",
      "city": "Eureka",
      "province_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Flag_of_Nunavut.svg/23px-Flag_of_Nunavut.svg.png",
      "province": "Nunavut",
      "country_icon": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/23px-Flag_of_Canada.svg.png",
      "country": "Canada"
  },
  {
      "latitude": "78.55",
      "longitude": "11.56",
      "geo": "78.55, 11.56",
      "city": "Ny-Ålesund",
      "province_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/21px-Flag_of_Norway.svg.png",
      "province": "Svalbard",
      "country_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/21px-Flag_of_Norway.svg.png",
      "country": "Norway"
  },
  {
      "latitude": "78.13",
      "longitude": "15.39",
      "geo": "78.13, 15.39",
      "city": "Longyearbyen",
      "province_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/21px-Flag_of_Norway.svg.png",
      "province": "Svalbard",
      "country_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/21px-Flag_of_Norway.svg.png",
      "country": "Norway"
  },
  {
      "latitude": "77.28",
      "longitude": "69.14",
      "geo": "77.28, 69.14",
      "city": "Qaanaaq",
      "province_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/23px-Flag_of_Greenland.svg.png",
      "province": "Greenland",
      "country_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/20px-Flag_of_Denmark.svg.png",
      "country": "Denmark"
  }]
  
  const express = require('express')
const app = express()

const PORT = 8080;
// const morgan = require('morgan')
const cors = require('cors');
app.use(cors());

// app.use(morgan('short')) //Morgan helps log what kind of request was triggered

app.get("/", (req, res) => { //call back func
  console.log("Responding to root route")
  res.send("Hello from Root!")
})


app.get("/json-data", (req, res) => {
  // var user = [
  //   {firstName: "Adam", lastName: "Small"},
  //   {firstNAme: "Bela", lastName: "Big"}
  // ]
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`)
})
