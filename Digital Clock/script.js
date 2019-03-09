function digitalClock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay(); 
    var hourConvert;
    var ack;
    var zero;
    
    // convert day from number to string 
    var dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    //convert hour from military time to standard time
    if (hours > 12){
        hourConvert = hours - 12;
    }
    
    //add am and pm appropriately
    if (hours < 12){
        ack = "am"
    } else {
        ack = "pm";
    }
    
    //place zero before minutes if needed
    if(minutes < 10){
        zero = 0 + minutes;
    } else {
        zero = minutes;
    }
    
    
    document.getElementById('clock').innerHTML = dayArr[day] + ' ' + hourConvert + ':' + zero + ':' + seconds + ' ' + ack;
    
    console.log(hours);
}

//document.getElementById('clock').innerHTML = digitalClock();
digitalClock();