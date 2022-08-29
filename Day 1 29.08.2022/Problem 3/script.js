function getNextChristmas(){
    const today = new Date()
    let cmas = new Date(today.getFullYear(), 11, 25)

    if (today.getMonth()==11 && today.getDate()>25) {

        cmas.setFullYear(cmas.getFullYear()+1)
    }  
    const one_day = 1000 * 60 * 60 * 24

    const leftdays =  `${Math.ceil( (cmas.getTime() - today.getTime())/(one_day) )} days left until Christmas!`

    document.getElementById("result").innerHTML = leftdays
}