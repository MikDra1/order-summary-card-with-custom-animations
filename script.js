const card = document.querySelector(".card");
const btnBack = document.querySelector('.btn--back')
const overlay = document.querySelector('.overlay')

const bubbles = Array.from(document.querySelectorAll('.bubble'))

const cardStyles = window.getComputedStyle(card)

const width = +cardStyles.width.slice(0,-2)
const height = +cardStyles.height.slice(0,-2)

bubbles.map(bubble => {
    bubble.style.top = `${Math.floor(Math.random() * height - 50)}px`
    bubble.style.left = `${Math.floor(Math.random() * width - 50)}px`

    if(Math.floor(Math.random() * 10 > 5)) {
        bubble.style.animation = 'bubble1 20s ease-in-out infinite'
    } else {
        bubble.style.animation = 'bubble2 20s ease-in-out infinite'
    }
})

function randomColor() {
    return `${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`
}


btnBack.addEventListener('mouseover', function() {

        card.style.boxShadow = `20px 20px 200px rgb(${randomColor()})`
        btnBack.style.border = `1px solid rgb(${randomColor()})`

    
    overlay.style.display = 'block'
})
btnBack.addEventListener('mouseout', function() {
        card.style.boxShadow = `none`
        btnBack.style.border = `none`

    overlay.style.display = 'none'
    btnBack.style.border = `none`
})