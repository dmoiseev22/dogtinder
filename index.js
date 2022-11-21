import { dogs } from '/data.js'
import { Dog } from '/Dog.js'


let dogsArray = dogs
let i = 0
let user = getNewUser()

// FUNCTON GET NEW USER (NO REPEAT USERS)
// function getNewUser() {
//     let nextUserObj = dogsArray.shift()
//     let user = new Dog(nextUserObj)
//     return user
// }

// FUNCTON GET NEW USER (REPEAT USERS)
function getNewUser() {
    let nextUserObj
    if (i + 1 < dogsArray.length) {
        nextUserObj = dogsArray[i];
        i++
    } else if (i + 1 === dogsArray.length) {
        nextUserObj = dogsArray[i]
        i = 0
    } 
    let user = new Dog(nextUserObj)
    return user
}

// FUNCTON RENDER
function render() {
    document.getElementById('main-pic').innerHTML = user.getUserHtml(user)
    enableBtns()
}

// FUNCTION FOR LIKE BTN
const like = () => {
    if (user.hasBeenSwiped) {user.hasBeenSwiped = false}
    user.hasBeenLiked = !user.hasBeenLiked
    render()
    user = getNewUser()    
    disableBtns()
    setTimeout(render, 3000)
}

// FUNCTION FOR SWIPE BTN

const swipe = () => {
    if (user.hasBeenLiked) {user.hasBeenLiked = false}
    user.hasBeenSwiped = !user.hasBeenSwiped
    render()
    user = getNewUser()    
    disableBtns()
    setTimeout(render, 3000)
}

function disableBtns() {
    document.getElementById("like-btn").disabled = true;
    document.getElementById("dislike-btn").disabled = true;
}

function enableBtns() {
    document.getElementById("like-btn").disabled = false;
    document.getElementById("dislike-btn").disabled = false;
}



// EVENT LISTENERS ON BUTTONS
document.getElementById('dislike-btn').addEventListener('click', swipe)
document.getElementById('like-btn').addEventListener('click', like)

render()