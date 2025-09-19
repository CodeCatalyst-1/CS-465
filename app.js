const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("hbs", exphbs.engine({
  extname: ".hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "app_server", "views", "layouts"),
  partialsDir: path.join(__dirname, "app_server", "views", "partials")
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app_server", "views"));

app.use(express.static(path.join(__dirname, "app_server", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// register routes
const travlrRoutes = require("./app_server/routes/travlrRoutes");
app.use("/", travlrRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
