const inserted = document.getElementById('myInput')
inserted.addEventListener('input', function(event){
    let converted = event.target.value
    let dollarValue = document.getElementById('dollarId')
    dollarValue.innerHTML = converted * 0.012 

    let poundsValue = document.getElementById('poundId')
    poundsValue.innerHTML = converted * 0.0084

    let euroValue = document.getElementById('euroId')
    euroValue.innerHTML = converted * 0.0097 

    let ausValue = document.getElementById('ausId')
    ausValue.innerHTML = converted * 0.015

    let dinarValue = document.getElementById('dinarId')
    dinarValue.innerHTML = converted * 0.0036

    let cdollarValue = document.getElementById('cdollarId')
    cdollarValue.innerHTML = converted * 0.015




})