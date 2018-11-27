const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const scrapeddatamodelSeed = [
  {
    resume: "resume placeholder",
    date: new Date(Date.now())
  },
 
];

db.scrapeddatamodel
  .remove({})
  .then(() => db.scrapeddatamodel.collection.insertMany(scrapeddatamodelSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
