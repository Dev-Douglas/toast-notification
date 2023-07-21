;(function () {
    const button = document.querySelector('button')

    const toast = document.getElementById('toast')
    const closeIcon = document.getElementById('close-button')
    const progress = document.getElementById('progress-bar')

    let timer1, timer2

    button.addEventListener('click', () => {
        toast.classList.add('active')
        progress.classList.add('active')

        timer1 = setTimeout(() => {
            toast.classList.remove('active')
        }, 3000)

        timer2 = setTimeout(() => {
            progress.classList.remove('active')
        }, 3300)
    })

    closeIcon.addEventListener('click', () => {
        toast.classList.remove('active')

        setTimeout(function () {
            progress.classList.remove('active')
        }, 300)

        clearTimeout(timer1)
        clearTimeout(timer2)
    })
})()