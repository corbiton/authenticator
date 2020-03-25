const app = require("express")();
const bodyParser = require("body-parser");
const defaultRouter = require("./routes/default-router");
const authRouter = require("./routes/auth-router");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Register routers
app.use("/", defaultRouter);
app.use("/api/auth", authRouter);

// Run
app.listen(PORT, () => {
  console.log(`Authentication service up on port ${PORT}`);
});
