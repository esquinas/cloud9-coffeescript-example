require("coffee-script");
require("coffee-script/register")
var app = require("./app");
app.listen(process.env.C9_PORT);
