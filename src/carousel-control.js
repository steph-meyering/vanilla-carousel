class CarouselControls {
  constructor(){
    // this.stepper
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    this.photos = document.querySelectorAll(".photo")
    nextButton.addEventListener("click", () => this.toggleNext());
    this.active = 0
  }

  toggleNext(){
    this.photos[this.active].classList.toggle("active")
    this.active++ 
    this.active = this.active % this.photos.length
    this.photos[this.active].classList.toggle("active");
  }
}


export default CarouselControls;