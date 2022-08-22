const carousel = document.querySelector(".carousel-banner")
const quantidadeDeBanners = 6

function createImages(quantidadeDeBanners) {
    let images = []

    do {
        let image = document.createElement('img')
        image.src = `assest/image/bg-banner/image-${quantidadeDeBanners}.jpg`
        image.classList.add("image-banner")
        images.push(image)
        quantidadeDeBanners = quantidadeDeBanners - 1
    } while (quantidadeDeBanners >= 1);

    return images
}

function loadCarousel() {

    let images = createImages(quantidadeDeBanners)

    images[0].classList.add("is-showing")

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
        carousel.querySelector('.is-showing').classList.remove('is-showing')
        carousel.children[i].classList.add("is-showing")

    }, 7000);
}

loadCarousel()