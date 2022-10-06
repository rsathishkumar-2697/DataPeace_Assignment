const express = require("express");
const bodyParser = require("body-parser");
const employees = [
  {
    "id": 1,
    "first_name": "James",
    "last_name": "Butt",
    "company_name": "Benton, John B Jr",
    "city": "New Orleans",
    "state": "LA",
    "zip": 70116,
    "email": "jbutt@gmail.com",
    "web": "http://www.bentonjohnbjr.com",
    "age": 70
  },
  {
    "id": 2,
    "first_name": "Josephine",
    "last_name": "Darakjy",
    "company_name": "Chanay, Jeffrey A Esq",
    "city": "Brighton",
    "state": "MI",
    "zip": 48116,
    "email": "josephine_darakjy@darakjy.org",
    "web": "http://www.chanayjeffreyaesq.com",
    "age": 48
  },
  {
    "id": 3,
    "first_name": "Art",
    "last_name": "Venere",
    "company_name": "Chemel, James L Cpa",
    "city": "Bridgeport",
    "state": "NJ",
    "zip": 80514,
    "email": "art@venere.org",
    "web": "http://www.chemeljameslcpa.com",
    "age": 80
  },
  {
    "id": 4,
    "first_name": "Lenna",
    "last_name": "Paprocki",
    "company_name": "Feltz Printing Service",
    "city": "Anchorage",
    "state": "AK",
    "zip": 99501,
    "email": "lpaprocki@hotmail.com",
    "web": "http://www.feltzprintingservice.com",
    "age": 99
  },
  {
    "id": 5,
    "first_name": "Donette",
    "last_name": "Foller",
    "company_name": "Printing Dimensions",
    "city": "Hamilton",
    "state": "OH",
    "zip": 45011,
    "email": "donette.foller@cox.net",
    "web": "http://www.printingdimensions.com",
    "age": 45
  },
  {
    "id": 6,
    "first_name": "Simona",
    "last_name": "Morasca",
    "company_name": "Chapman, Ross E Esq",
    "city": "Ashland",
    "state": "OH",
    "zip": 44805,
    "email": "simona@morasca.com",
    "web": "http://www.chapmanrosseesq.com",
    "age": 44
  },
  {
    "id": 7,
    "first_name": "Mitsue",
    "last_name": "Tollner",
    "company_name": "Morlong Associates",
    "city": "Chicago",
    "state": "IL",
    "zip": 60632,
    "email": "mitsue_tollner@yahoo.com",
    "web": "http://www.morlongassociates.com",
    "age": 60
  },
  {
    "id": 8,
    "first_name": "Leota",
    "last_name": "Dilliard",
    "company_name": "Commercial Press",
    "city": "San Jose",
    "state": "CA",
    "zip": 95111,
    "email": "leota@hotmail.com",
    "web": "http://www.commercialpress.com",
    "age": 95
  },
  {
    "id": 9,
    "first_name": "Sage",
    "last_name": "Wieser",
    "company_name": "Truhlar And Truhlar Attys",
    "city": "Sioux Falls",
    "state": "SD",
    "zip": 57105,
    "email": "sage_wieser@cox.net",
    "web": "http://www.truhlarandtruhlarattys.com",
    "age": 57
  },
  {
    "id": 10,
    "first_name": "Kris",
    "last_name": "Marrier",
    "company_name": "King, Christopher A Esq",
    "city": "Baltimore",
    "state": "MD",
    "zip": 21224,
    "email": "kris@gmail.com",
    "web": "http://www.kingchristopheraesq.com",
    "age": 21
  },
  {
    "id": 11,
    "first_name": "Minna",
    "last_name": "Amigon",
    "company_name": "Dorl, James J Esq",
    "city": "Kulpsville",
    "state": "PA",
    "zip": 19443,
    "email": "minna_amigon@yahoo.com",
    "web": "http://www.dorljamesjesq.com",
    "age": 19
  },
  {
    "id": 12,
    "first_name": "Abel",
    "last_name": "Maclead",
    "company_name": "Rangoni Of Florence",
    "city": "Middle Island",
    "state": "NY",
    "zip": 11953,
    "email": "amaclead@gmail.com",
    "web": "http://www.rangoniofflorence.com",
    "age": 11
  },
  {
    "id": 13,
    "first_name": "Kiley",
    "last_name": "Caldarera",
    "company_name": "Feiner Bros",
    "city": "Los Angeles",
    "state": "CA",
    "zip": 90034,
    "email": "kiley.caldarera@aol.com",
    "web": "http://www.feinerbros.com",
    "age": 90
  },
  {
    "id": 14,
    "first_name": "Graciela",
    "last_name": "Ruta",
    "company_name": "Buckley Miller & Wright",
    "city": "Chagrin Falls",
    "state": "OH",
    "zip": 44023,
    "email": "gruta@cox.net",
    "web": "http://www.buckleymillerwright.com",
    "age": 44
  },
  {
    "id": 15,
    "first_name": "Cammy",
    "last_name": "Albares",
    "company_name": "Rousseaux, Michael Esq",
    "city": "Laredo",
    "state": "TX",
    "zip": 78045,
    "email": "calbares@gmail.com",
    "web": "http://www.rousseauxmichaelesq.com",
    "age": 78
  },
  {
    "id": 16,
    "first_name": "Mattie",
    "last_name": "Poquette",
    "company_name": "Century Communications",
    "city": "Phoenix",
    "state": "AZ",
    "zip": 85013,
    "email": "mattie@aol.com",
    "web": "http://www.centurycommunications.com",
    "age": 85
  },
  {
    "id": 17,
    "first_name": "Meaghan",
    "last_name": "Garufi",
    "company_name": "Bolton, Wilbur Esq",
    "city": "Mc Minnville",
    "state": "TN",
    "zip": 37110,
    "email": "meaghan@hotmail.com",
    "web": "http://www.boltonwilburesq.com",
    "age": 37
  },
  {
    "id": 18,
    "first_name": "Gladys",
    "last_name": "Rim",
    "company_name": "T M Byxbee Company Pc",
    "city": "Milwaukee",
    "state": "WI",
    "zip": 53207,
    "email": "gladys.rim@rim.org",
    "web": "http://www.tmbyxbeecompanypc.com",
    "age": 53
  },
  {
    "id": 19,
    "first_name": "Yuki",
    "last_name": "Whobrey",
    "company_name": "Farmers Insurance Group",
    "city": "Taylor",
    "state": "MI",
    "zip": 48180,
    "email": "yuki_whobrey@aol.com",
    "web": "http://www.farmersinsurancegroup.com",
    "age": 48
  },
  {
    "id": 20,
    "first_name": "Fletcher",
    "last_name": "Flosi",
    "company_name": "Post Box Services Plus",
    "city": "Rockford",
    "state": "IL",
    "zip": 61109,
    "email": "fletcher.flosi@yahoo.com",
    "web": "http://www.postboxservicesplus.com",
    "age": 61
  },
];
  
const app = express();
  
app.set("view engine", "ejs");
  
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
  
app.get("/", function (req, res) {
  res.render("home", {
    data: employees,
  });
});
  
app.post("/", (req, res) => {
  const inputId = employees.length + 1;
  const inputFirstName = req.body.inputfirst_name;
  const inputLastName=req.body.inputlast_name;
  const inputCompanyName=req.body.company_name;
  const inputCity=req.body.city;
  const inputState=req.body.state;
  const inputZip=req.body.zip;
  const inputEmail=req.body.email;
  const inputWeb=req.body.web;
  const inputAge=req.body.age;
  
  employees.push({

    Id: inputId,
    FirstName: inputFirstName,
    LastName: inputLastName,
    CompanyName: inputCompanyName,
    City: inputCity,
    State: inputState,
    Zip: inputZip,
    Email: inputEmail,
    Web: inputWeb,
    Age: inputAge,
  });
  
  res.render("home", {
    data: employees,
  });
});
  
app.post("/delete", (req, res) => {
  var requestedEmployeeId = req.body.employeeId;
  var j = 0;
  employees.forEach((employee) => {
    j = j + 1;
    if (employee.employeeId === requestedEmployeeId) {
      employees.splice(j - 1, 1);
    }
  });
  res.render("home", {
    data: employees,
  });
});
  
app.post("/update", (req, res) => {
    const requestedId = req.body.inputId;
    const inputFirstName = req.body.inputfirst_name;
    const inputLastName=req.body.inputlast_name;
    const inputCompanyName=req.body.company_name;
    const inputCity=req.body.city;
    const inputState=req.body.state;
    const inputZip=req.body.zip;
    const inputEmail=req.body.email;
    const inputWeb=req.body.web;
    const inputAge=req.body.age;
  
  var j = 0;
  employees.forEach((employee) => {
    j = j + 1;
    if (employee.employeeId == requestedEmployeeId) {
        (Id= inputId),
        (FirstName= inputFirstName),
        (LastName= inputLastName),
        (CompanyName= inputCompanyName),
        (City= inputCity),
        (State= inputState),
        (Zip= inputZip),
        (Email= inputEmail),
        (Web= inputWeb),
        (Age= inputAge),
    }
  });
  res.render("home", {
    data: employees,
  });
});
  
app.listen(3000, (req, res) => {
  console.log("App is running on port 3000");
});