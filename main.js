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

let checker = true

icon.addEventListener("click", function(){
    pocikAudio.play()
    letter += plusss
    result.innerHTML = letter
    
})

pasx.addEventListener("click", function(){
    checker = false
    document.body.style.background = `#b71540`
    on.innerText = "Вы нашли секретную свинку"
    vid.innerText = "Тип свинки мертвая свинка🥀💔"
    icon.src = `img/death.jpg`
    plusss = 0
    pasx_svin.play()
    pasx.style.display = "none";
    
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
    if(letter >= 10 && checker){
        icon.src = `img/z.jpg`
        vid.innerText = "Тип свинки: Z свинка🪖"
        
    }
    if(letter >= 20 && checker){
        icon.src = `img/funny.jpg`
        vid.innerText = "Тип свинки: Веселая свинка😁"
        
    }
    if(letter >= 30 && checker){
        icon.src = `img/sad.jpg`
        vid.innerText = "Тип свинки: Грустная свинка😢"
    }
    if(letter >= 40 && checker){
        icon.src = `img/V.jpg`
        vid.innerText = "Тип свинки: V свинка🪖"
    }
    if(letter >= 50 && checker){
        icon.src = `img/withmom.jpg`
        vid.innerText = "Тип свинки: Свинка с мамой🥰"
    }
    if(letter >= 60 && checker){
        icon.src = `img/blat.jpg`
        vid.innerText = "Тип свинки: Блатная свинка😎"
        
    }
    if(letter >= 75 && checker){
        icon.src = `img/famous.jpg`
        vid.innerText = "Тип свинки: Важная свинка🐷😎"

        
        plusss = 2
    }
    if(letter >= 100 && checker){
        icon.src = `img/fat.jpg`
        vid.innerText = "Тип свинки: Толстая свинка🍔"
        
    }
    if(letter >= 130 && checker){
        icon.src = `img/lit.jpg`
        vid.innerText = "Тип свинки:Cвинка c Lit Energy💦"
        
    }
    if(letter >= 170 && checker){
        icon.src = `img/love.jpg`
        vid.innerText = "Тип свинки: Влюбленная свинка😍"
        
    }
    if(letter >= 200 && checker){
        icon.src = `img/sleep.jpg`
        vid.innerText = "Тип свинки: Спящая свинка😴"
        
        plusss = 3
    }
    if(letter >= 250 && checker){
        icon.src = `img/withZ.jpg`
        vid.innerText = "Тип свинки: Свинка с Андреем Z🪖"
        
    }
    if(letter >= 310 && checker){
        icon.src = `img/yacht.jpg`
        vid.innerText = "Тип свинки: Нахуй с яхты свинья🤣"
        
        
    }
    if(letter >= 370 && checker){
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
        pasx.style.display = "none";
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
