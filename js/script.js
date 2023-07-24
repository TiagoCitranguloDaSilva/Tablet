setInterval(function(){
    
    let DivHora = document.getElementById('hora')
    let Hora = new Date()
    DivHora.innerHTML = Hora.getHours().toString().padStart(2, '0') + ':' + Hora.getMinutes().toString().padStart(2, '0')

}, 1000)


let iframe = document.getElementById('ifr')
let tela = document.getElementById('display')
let btnSair = document.getElementById('x')



function mudar(Link){

    iframe.src = 'https://'+ Link
    iframe.style.display = 'block'
    tela.style.display = 'none'
    btnSair.style.display = 'block'
}

function sair(){
    iframe.src = ''
    iframe.style.display = 'none'
    tela.style.display = 'grid'
    btnSair.style.display = 'none'
}