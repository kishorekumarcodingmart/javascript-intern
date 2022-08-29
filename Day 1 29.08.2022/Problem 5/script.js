function convert(){
    const input = document.getElementById("para").value
    const inputArr = input.split(' ')
    const Final = []
    inputArr.forEach((element)=>{
        Final.push(element[0].toUpperCase() + element.slice(1, element.length));
    })
    const output = Final.join(" ")
    document.getElementById('result').innerHTML = output
}

// Capitalize the first letter of each word of a given string.