setInterval(function(){
    
    let DivHora = document.getElementById('hora')
    let Hora = new Date()
    DivHora.innerHTML = Hora.getHours().toString().padStart(2, '0') + ':' + Hora.getMinutes().toString().padStart(2, '0')

}, 1000)





let iframe = document.getElementById('ifr')

function mudar(Link){
    Link = (Link == 'Google') ? "https://www.google.com/" : ''
    alert(Link)
    iframe.src = Link
}