function makeSquare(parent){
    let div = document.createElement("div");
    div.addEventListener('mouseenter', () => div.style.backgroundColor = "black")
    //div.addEventListener('mouseleave', () => div.style.backgroundColor = "white")

    
    div.setAttribute('style',  `height:         ${850/squares}px;
                                width:          ${850/squares}px;
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

function makeGrid(a){
    if(a=="yes"){getSquares()};
    deleteGrid();
    for(let i = 0; i < squares; i++){
        makeRow()
    }
}

function deleteGrid(){
    container.textContent = ""
}

function getSquares(){
    squares = prompt("enter Rows length");
}


const container = document.querySelector("#container");
const button1 = document.querySelector("#button");
const button2 = document.querySelector("#delete");

button1.addEventListener('click', () => makeGrid("yes"))
button2.addEventListener('click', () => makeGrid())

let squares = 30;
makeGrid()


