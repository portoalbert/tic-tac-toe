const markx = document.getElementById('exampleone')
const gamediv = document.getElementById('gamediv')
const boardArr = [
    { number: 'testing',id: 1 },{ number: 0,id: 2 },{ number: 0,id: 3 },{ number: 0,id: 4 },{ number: 0,id: 5 },
    { number: 0,id: 6 },{ number: 0,id: 7 },{ number: 0,id: 8 },{ number: 0,id: 9 },
];
let turn = 1
let winner = false;
function marker (e) {
    if (winner === true){
        return;
    }
    if (e.target.innerText !== ""){
        return;
    }
    if (turn === 2){
        e.target.innerText = "O"
        turn = 1
        scoreChecker('O')
        return;
    }
    e.target.innerText = "X"
    turn = 2
    scoreChecker('X');
}
let counter = 0;
// //function boardMaker () {    
//     let temp = {};
//     for (let i = 0; i < 9 ; i++){
//         temp.number = i
//         temp.id = counter
//         counter ++;
//         console.log(temp.id)
//         tst.push(temp);
//     }   
// //}
//boardMaker ();
function boardDisplayer (array) {
    const diver = document.createElement('div')
    diver.addEventListener("click", marker);
    diver.classList.add('square');
    diver.setAttribute('id',array.id);
    gamediv.appendChild(diver);
}
boardArr.forEach(boardDisplayer);
function clearer (){
    window.location.reload();
}
function windeclare (letter){
    if (letter == 'X'){
        document.getElementById('top').innerText = "Player One Wins"
    }
    if (letter == 'O'){
        document.getElementById('top').innerText = "Player Two Wins"
    }
    return;
}
function scoreChecker (a) {
    if (document.getElementById('1').innerText == a
    && document.getElementById('2').innerText == a
    && document.getElementById('3').innerText == a) {
        document.getElementById('1').setAttribute('class','squaretwo')
        document.getElementById('2').setAttribute('class','squaretwo')
        document.getElementById('3').setAttribute('class','squaretwo')
        winner = true
        windeclare(a);
    }
    if (document.getElementById('4').innerText == a 
    && document.getElementById('5').innerText == a
    && document.getElementById('6').innerText == a) {
       
        winner = true
        windeclare(a);
        document.getElementById('4').setAttribute('class','squaretwo')
        document.getElementById('5').setAttribute('class','squaretwo')
        document.getElementById('6').setAttribute('class','squaretwo')
    }
    if (document.getElementById('7').innerText == a 
    && document.getElementById('8').innerText == a
    && document.getElementById('9').innerText == a) {
        
        winner = true
        windeclare(a);
        document.getElementById('7').setAttribute('class','squaretwo')
        document.getElementById('8').setAttribute('class','squaretwo')
        document.getElementById('9').setAttribute('class','squaretwo')
    }
    if (document.getElementById('1').innerText == a 
    && document.getElementById('5').innerText == a
    && document.getElementById('9').innerText == a) {
        
        winner = true
        windeclare(a);
        document.getElementById('1').setAttribute('class','squaretwo')
        document.getElementById('5').setAttribute('class','squaretwo')
        document.getElementById('9').setAttribute('class','squaretwo')
    }
    if (document.getElementById('3').innerText == a 
    && document.getElementById('5').innerText == a
    && document.getElementById('7').innerText == a) {
        
        winner = true
        windeclare(a);
        document.getElementById('3').setAttribute('class','squaretwo')
        document.getElementById('5').setAttribute('class','squaretwo')
        document.getElementById('7').setAttribute('class','squaretwo')
    }
    if (document.getElementById('1').innerText == a 
    && document.getElementById('4').innerText == a
    && document.getElementById('7').innerText == a) {
        
        winner = true
        windeclare(a);
        document.getElementById('1').setAttribute('class','squaretwo')
        document.getElementById('4').setAttribute('class','squaretwo')
        document.getElementById('7').setAttribute('class','squaretwo')
    }
    if (document.getElementById('2').innerText == a 
    && document.getElementById('5').innerText == a
    && document.getElementById('8').innerText == a) {
        
        winner = true
        windeclare(a);
        document.getElementById('2').setAttribute('class','squaretwo')
        document.getElementById('5').setAttribute('class','squaretwo')
        document.getElementById('8').setAttribute('class','squaretwo')
    }
    if (document.getElementById('3').innerText == a 
    && document.getElementById('6').innerText == a
    && document.getElementById('9').innerText == a) {
        
        winner = true
        windeclare(a);
        document.getElementById('3').setAttribute('class','squaretwo')
        document.getElementById('6').setAttribute('class','squaretwo')
        document.getElementById('9').setAttribute('class','squaretwo')
    }
}