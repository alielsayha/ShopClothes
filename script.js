// Script for navigation bar


let headerScroll = document.querySelectorAll(".nav-link");

headerScroll.forEach(item => {
    item.onclick = (e) => {
        headerScroll.forEach(item => {
            item.classList.remove("active")
        })
        item.classList.add("active")
    }
})

// sProduct 

let mainImg = document.getElementById("mainImg");
let smallImg = document.querySelectorAll(".smallImg")

smallImg.forEach(item => {
    item.onclick = () => {
        mainImg.src = item.src
    }
})


let proContainer = document.querySelectorAll(".pro-container");
let productData = []
proContainer.forEach(item => {
    item.onclick = function() {
        window.location.href = 'sproduct.html';
    }
})


