function digitalClock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay(); 
    var hourConvert;
    var ack;
    var zeroHour;
    var zeroMin;
    var zeroSec;
    
    // convert day from number to string 
    var dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    //convert hour from military time to standard time
    if (hours > 12){
        hourConvert = hours - 12;
    } else {
        hourConvert = hours;
    }
    
    //place zero before hours if needed
    if(hours < 10){
        hourConvert = '0' + hourConvert;
    } else if (hours > 12){
        hourConvert = '0' + hourConvert;
    } else {
        hourConvert = hours;
    }
    
    //add am and pm appropriately
    if (hours < 12){
        ack = "am"
    } else {
        ack = "pm";
    }
    
    //place zero before minutes if needed
    if(minutes < 10){
        zeroMin = '0' + minutes;
    } else {
        zeroMin = minutes;
    }
    
    //place zero before seconds if needed
    if(seconds < 10){
        zeroSec = '0' + seconds;
    } else {
        zeroSec = seconds;
    }
    
    
    document.getElementById('clock').innerHTML = dayArr[day] + ' ' + hourConvert + ':' + zeroMin + ':' + zeroSec + ' ' + ack;
}

//document.getElementById('clock').innerHTML = digitalClock();
digitalClock();