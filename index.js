
  

// const express = require("express");
// const mongoose = require("mongoose");
// const route = require("./routes/userRoute.js");

// const app = express();
// app.use(express.json());

// const PORT = 5000;
// const MONGOURL = "mongodb://localhost:27017/crud";

// mongoose
//   .connect(MONGOURL)
//   .then(() => {
//     console.log("Database connected");
//     app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//   })
//   .catch((error) => {
//     console.error("Database connection error:", error);
//   });

// app.use("/api/user", route);



  

const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/userRoute.js");

const app = express();
app.use(express.json());

const PORT = 5000;
const MONGOURL = "mongodb://localhost:27017/crud";

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.use("/api/user", route);

