let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
// let clearBtn = document.getElementById('clear-btn')

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    count = 0
    countEl.textContent = count
}

// function clear(){
//     clearBtn.textContent = ''
// }