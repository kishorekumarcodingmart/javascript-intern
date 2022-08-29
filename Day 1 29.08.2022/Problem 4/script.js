

function division(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    document.getElementById('result').innerHTML = Number(num1) / Number(num2)
}

function multiplication(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    document.getElementById('result').innerHTML = Number(num1) * Number(num2)
}


// Calculate multiplication and division of two numbers (by getting input from user by using a form)