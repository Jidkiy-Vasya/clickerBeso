let icon = document.getElementById(`icons`)
let result = document.getElementById(`res`)
let on = document.getElementById(`onimg`)

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


setInterval(plus, 1000)

setInterval(function(){
    if(timer % 2 == 0){
        bigger()
    }
    else{
        smaller()
    }
}, 1000)