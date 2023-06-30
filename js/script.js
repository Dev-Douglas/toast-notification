const button = document.querySelector('button')

const toast = document.getElementById('toast')
const closeIcon = document.getElementById('close-button')
const progress = document.getElementById('progress-bar')

let timer1, timer2

button.addEventListener('click', function () {
    toast.classList.add('active')
    progress.classList.add('active')

    timer1 = setTimeout(function () {
        toast.classList.remove('active')
    }, 5000)

    timer2 = setTimeout(function () {
        progress.classList.remove('active')
    }, 5300)
})

closeIcon.addEventListener('click', function () {
    toast.classList.remove('active')

    setTimeout(function () {
        progress.classList.remove('active')
    }, 300)

    clearTimeout(timer1)
    clearTimeout(timer2)
})
