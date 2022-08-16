const carousel = document.querySelector(".carousel")
const quantidadeDeBanners = 6

function createImages(quantidadeDeBanners) {
    let images = []

    do {
        let image = document.createElement('img')
        image.src = `assest/image/banner/image-${quantidadeDeBanners}.jpg`
        image.classList.add("header-image")
        images.push(image)
        quantidadeDeBanners = quantidadeDeBanners - 1
    } while (quantidadeDeBanners >= 1);

    return images
}

function loadCarousel() {

    let images = createImages(quantidadeDeBanners)

    images[0].classList.add("is-active")

    images.forEach(image => {
        carousel.appendChild(image)
    })

    let i = 0

    setInterval(() => {

        if (i >= quantidadeDeBanners - 1) {
            i = 0
        } else {
            i = i + 1
        }

        console.log(i)
        carousel.querySelector('.is-active').classList.remove('is-active')
        carousel.children[i].classList.add("is-active")

    }, 7000);
}

loadCarousel()