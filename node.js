function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function regrar(boot, player) {
    if (boot === 1 && player === 2) {
        return 'VOCE GANHOU'
    } else if (boot === 2 && player === 3) {
        return 'VOCÊ GANHOU'
    }
    else if (boot === 3 && player === 1) {
        return 'VOCÊ GANHOU'
    }
    else if (player === 1 && boot === 2) {
        return 'VOCÊ PERDEU'
    }
    else if (player === 2 && boot === 3) {
        return 'VOCÊ PERDEU'
    }
    else if (player === 3 && boot === 1) {
        return 'VOCÊ PERDEU'
    }
    else if(boot === player){
        return 'empate'
    }else if(player === 0){
        return 'por favor coloque sua jogada'
    }else if(player > 3){
        return 'escolha a opção entre 1 a 3 por favor'
    }
}


function regrarBoot(boot){ 
if(boot === 1){
    return '🪨'
}else if(boot === 2){
    return '📄'
}else if(boot === 3){
    return '✂️'
}
}

function regrarPlayer(player){ 
if(player === 1){
    return '🪨'
}else if(player === 2){
    return '📄'
}else if(player === 3){
    return '✂️'
}else if(player === 0){
    return '❌'
}else if(player > 3){
    return '❌'
}
}

function principal(){
let player = Number(document.getElementById('input_player').value)
let boot = sortear(1, 3)
result = regrar(boot, player)
let cute = regrarBoot(boot)
let cutep  = regrarPlayer(player)
let resultado = document.getElementById('resultado')
let bootresp = document.getElementById('boot_resposta')
bootresp.innerHTML = `${cute} + ${cutep}`
resultado.innerHTML = `${result}`

document.getElementById('input_player').value = '';
}