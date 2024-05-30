let icon = document.getElementById(`icons`)
let result = document.getElementById(`res`)
let on = document.getElementById(`onimg`)
let vid = document.getElementById(`vid`)

let letter = 0

let timer = 0

icon.addEventListener("click", function(){
    letter += 1
    result.innerHTML = letter
    
})

function bigger (){
    on.style.fontSize = `20px`
}

function smaller(){
    on.style.fontSize = `15px`
}

function plus(){
    timer ++
}

function checked(){
    if(letter >= 10 ){
        icon.src = `img/z.jpg`
        vid.innerText = "Тип свинки: Z свинка🪖"
        
    }
    if(letter >= 20){
        icon.src = `img/funny.jpg`
        vid.innerText = "Тип свинки: Веселая свинка😁"
    }
    if(letter >= 30){
        icon.src = `img/sad.jpg`
        vid.innerText = "Тип свинки: Грустная свинка😢"
    }
    if(letter >= 40){
        icon.src = `img/V.jpg`
        vid.innerText = "Тип свинки: V свинка🪖"
    }
    if(letter >= 50){
        icon.src = `img/withmom.jpg`
        vid.innerText = "Тип свинки: Свинка с мамой🥰"
    }
    if(letter >= 69){
        icon.src = `img/bald.jpg`
        vid.innerText = "Тип свинки: Лысая свинка🥚👑"
        document.body.style.background = `burlywood`;
    }

}

setInterval(plus, 1000)

setInterval(function(){
    if(timer % 2 == 0){
        bigger()
    }
    else{
        smaller()
    }
}, 1000)

setInterval(checked, 50)
