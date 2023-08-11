'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')

function trocarCor(){
    forma1.classList.toggle('pink')
}
function trocarForma(){
    forma2.classList.toggle('circulo')
}
function girarForma(){
    forma3.classList.toggle('girar')
}
function tamanho(){
    forma4.classList.toggle('tamanho')
}
function brilhar(){
    forma5.classList.toggle('brilhar')
}
function sumir(){
    forma6.classList.toggle('sumir')
}
function imagem(){
    forma7.classList.toggle('imagem')
}


forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', girarForma)
forma4.addEventListener('click', tamanho)
forma5.addEventListener('click', brilhar)
forma6.addEventListener('click', sumir)
forma7.addEventListener('click', imagem)

document.getElementById('btn1').addEventListener('click', function(){
    document.querySelector('body').setAttribute('class','cor1')
})
document.getElementById('btn2').addEventListener('click', function(){
    document.querySelector('body').setAttribute('class','cor3')
})
document.getElementById('btn3').addEventListener('click', function(){
    document.querySelector('body').setAttribute('class','cor2')
})
document.getElementById('btn4').addEventListener('click', function(){
    document.querySelector('body').setAttribute('class','cor4')
})
document.getElementById('btn5').addEventListener('click', function(){
    document.querySelector('body').setAttribute('class','cor5')
})
