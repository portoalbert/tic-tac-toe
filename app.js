const markx = document.getElementById('exampleone')
const gamediv = document.getElementById('gamediv')
let turn = 1
console.log("playerone",turn)
function marker (e) {
    if (turn === 2){
        e.target.innerText = "O"
        turn = 1
        return;
    }
    e.target.innerText = "X"
    turn = 2
    console.log("playerone",turn)
}

function boardMaker () {
    
    for (let i = 0; i < 9 ; i++){
        const diver = document.createElement('div')
        diver.addEventListener("click",marker);
        diver.classList.add('square');
        gamediv.appendChild(diver);
    }   
}
boardMaker ();