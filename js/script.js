setInterval(function(){
    
    let DivHora = document.getElementById('hora')
    let Hora = new Date()
    DivHora.innerHTML = Hora.getHours().toString().padStart(2, '0') + ':' + Hora.getMinutes().toString().padStart(2, '0')

}, 5000)