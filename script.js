function makeSquare(parent){
    let div = document.createElement("div");
    div.setAttribute('style', 'height:20px; width:20px; border-style:solid;  border-width: 2px; display:inline-block;')
    parent.appendChild(div)
}

function makeRow(){

    let div = document.createElement("div");

    for(let i = 0; i < squares; i++){
        makeSquare(div);
    };

    div.setAttribute('style', 'display:box');

    container.appendChild(div);

}

function makeGrid(){
    for(let i = 0; i < squares; i++){
        makeRow()
    }
}


const container = document.querySelector("#container")
const button = document.querySelector("#button")

button.addEventListener('click', () => makeGrid())


let squares = 0;
squares = prompt("enter Rows length");