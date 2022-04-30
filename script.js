function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
var sec = 0;
var min = 0;
var minMove =125;
var hour = 0;
var hourMove = 125;


setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    sec = sec + 6;
    min = min + 1;
    hour = hour +1;

    document.getElementById("seconds").style.transform="rotate("+ sec +"deg)";
    // minute movement
    if(min%60 === 0){
        minMove=minMove +6;
        document.getElementById("minutes").style.transform="rotate(" + minMove +"deg)";
        console.log(minMove);
    }
    if(hour %360 === 0){
        hourMove=hourMove +6;
        document.getElementById("hour").style.transform="rotate(" + hourMove +"deg)";
        console.log(hourMove);
    }
}, 1000);
