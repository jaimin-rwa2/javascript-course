let SlideIndex = 0

const Slides = document.querySelectorAll(".slides img")
const totalSlides = Slides.length
console.log(Slides);
console.log(totalSlides);

const ShowSlide = (index) => {
    Slides.forEach((slide) => {
        slide.style.display = "none"
    })
    Slides[index].style.display = "block"
}
ShowSlide(SlideIndex)

const prevslide = () => {
    SlideIndex = ((SlideIndex - 1  + totalSlides)) % totalSlides
    ShowSlide(SlideIndex)
}

const nextslide = () => {
    SlideIndex = (( SlideIndex +1 )) % totalSlides
    ShowSlide(SlideIndex)
}

document.getElementById("prev").addEventListener('click',prevslide)
document.getElementById("next").addEventListener('click',nextslide)