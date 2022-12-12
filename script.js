function makeSquare(parent){
    let div = document.createElement("div");
    div.addEventListener('mouseenter', () => div.style.backgroundColor = "black")
    //div.addEventListener('mouseleave', () => div.style.backgroundColor = "white")

    
    div.setAttribute('style',  `height:         ${960/squares}px;
                                width:          ${960/squares}px;
                                display:        inline-block;
                                background-color: white`)
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
    squares = prompt("enter Rows length");
    deleteGrid();
    for(let i = 0; i < squares; i++){
        makeRow()
    }
}

function deleteGrid(){
    container.textContent = ""
}


const container = document.querySelector("#container")
const button = document.querySelector("#button")

button.addEventListener('click', () => makeGrid())

let squares = 0;


