let icon = document.getElementById(`icons`)
let result = document.getElementById(`res`)
let on = document.getElementById(`onimg`)
let vid = document.getElementById(`vid`)
let victory = document.getElementById(`victory`)
let pocikAudio = document.getElementById(`pocik`)
let pasx_svin = document.getElementById(`pasx_svin`)
let pasx = document.getElementById(`secret`)

let letter = 0
let plusss = 1
let timer = 0

icon.addEventListener("click", function(){
    pocikAudio.play()
    letter += plusss
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
    if(letter >= 60){
        icon.src = `img/blat.jpg`
        vid.innerText = "Тип свинки: Блатная свинка😎"
        
    }
    if(letter >= 75){
        icon.src = `img/famous.jpg`
        vid.innerText = "Тип свинки: Важная свинка🐷😎"

        
        plusss = 2
    }
    if(letter >= 100){
        icon.src = `img/fat.jpg`
        vid.innerText = "Тип свинки: Толстая свинка🍔"
        
    }
    if(letter >= 130){
        icon.src = `img/lit.jpg`
        vid.innerText = "Тип свинки:Cвинка c Lit Energy💦"
        
    }
    if(letter >= 170){
        icon.src = `img/love.jpg`
        vid.innerText = "Тип свинки: Влюбленная свинка😍"
        
    }
    if(letter >= 200){
        icon.src = `img/sleep.jpg`
        vid.innerText = "Тип свинки: Спящая свинка😴"
        
        plusss = 3
    }
    if(letter >= 250){
        icon.src = `img/withZ.jpg`
        vid.innerText = "Тип свинки: Свинка с Андреем Z🪖"
        
    }
    if(letter >= 310){
        icon.src = `img/yacht.jpg`
        vid.innerText = "Тип свинки: Нахуй с яхты свинья🤣"
        
        
    }
    if(letter >= 370){
        icon.src = `img/yeti.jpg`
        vid.innerText = "Тип свинки: Йети свинка👹"
        plusss = 10
        
    }
    
    if(letter >= 1002){
        icon.src = `img/bald.jpg`
        vid.innerText = "Тип свинки: Лысая свинка🥚👑"
        document.body.style.background = `burlywood`;
        victory.play()
        on.innerText = "Поздравляю, вы дошли до последней свинки"
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


pasx.addEventListener("click", function(){
    document.body.style.background = `#b71540`
    on.innerText = "Вы нашли секретную свинку"
    vid.innerText = "Тип свинки мертвая свинка🥀💔"
    icon.src = `img/death.jpg`
    plusss = 0
    pasx_svin.play()
    pasx.style.display = "none";
})
