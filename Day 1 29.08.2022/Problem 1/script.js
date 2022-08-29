function getTime(){
    const userInput = Number(document.getElementById('dateAndTime').value)
    const display = document.getElementById('result')
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const day = new Date().getDay()
    const hours = new Date().getHours()
    const min = new Date().getMinutes()
    const sec = new Date().getSeconds()



    if (userInput===12){
        let ampm = hours >= 12 ? 'PM' : 'AM'
        display.textContent = `${weekday[day]} and ${hours-12}${ampm} : ${min} : ${sec}`
    }
    else{
        display.textContent = `${weekday[day]} and ${hours} : ${min} : ${sec}`
    }

}

/*
Display the current day and time (output should support both 12hr and 24 hr time
     based on input parameters) in the following
format current day | current time => Tuesday | 10 PM : 30 : 38

*/