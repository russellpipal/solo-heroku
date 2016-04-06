$(function(){

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  }

  if(mm<10) {
      mm='0'+mm
  }

  today = mm+'/'+dd+'/'+yyyy;

  $("body").append("Today is " + today);


  $.get("http://api.wunderground.com/api/86068195f3afc95b/conditions/q/MN/Minneapolis.json").done(function(response){
    $("body").append("<p>Weather in Minneapolis is " + response.current_observation.weather + "</p>");
    $("body").append("<p>Current Temperature is " + response.current_observation.temperature_string + "</p>");
  });
});
