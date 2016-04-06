var express = require("express");
var app = express();

app.use(express.static("public"));

// app.get('/', function(request, response){
//   var today = new Date();
//   var dd = today.getDate();
//   var mm = today.getMonth()+1; //January is 0!
//   var yyyy = today.getFullYear();
//
//   if(dd<10) {
//       dd='0'+dd
//   }
//
//   if(mm<10) {
//       mm='0'+mm
//   }
//
//   today = mm+'/'+dd+'/'+yyyy;
//
//   response.send("Today is " + today);
// });

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log("Listening on port", port);
});
