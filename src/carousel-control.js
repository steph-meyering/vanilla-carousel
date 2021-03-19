class CarouselControls {
  constructor() {
    this.photos = document.querySelectorAll(".photo");
    this.stepperButtons = [];
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    const imageContainer = document.getElementById("image-container");
    nextButton.addEventListener("click", () => this.toggleNext());
    prevButton.addEventListener("click", () => this.togglePrev());
    imageContainer.addEventListener("mouseover", () => this.pauseAutoPlay());
    imageContainer.addEventListener("mouseout", () => this.autoPlay());
    this.active = 0;
    this.initStepper();
    this.autoPlay();
  }

  autoPlay(){
    this.auto = setInterval(() => this.toggleNext(), 3000)
  }

  pauseAutoPlay(){
    clearInterval(this.auto)
  }

  displayPhoto(nextID) {
    const prevID = this.active;
    [this.photos[prevID], this.photos[nextID]].forEach((el) =>
      el.classList.toggle("photo--active")
    );
    this.active = nextID
    this.updateStepper(prevID, nextID);
  }

  toggleNext() {
    let nextID = (this.active + 1) % this.photos.length;
    this.displayPhoto(nextID);
  }

  togglePrev() {
    let nextID =
      this.active - 1 >= 0 ? this.active - 1 : this.photos.length - 1;
    this.displayPhoto(nextID);
  }

  updateStepper(prevID, nextID) {
    const prev = this.stepperButtons[prevID];
    const next = this.stepperButtons[nextID];
    [prev, next].forEach((el) => el.classList.toggle("stepper-button--active"));
  }

  initStepper() {
    const stepper = document.getElementById("stepper-root");
    this.photos.forEach((_, i) => {
      const stepperButton = document.createElement("div");
      stepperButton.classList.add("button", "stepper-button");
      i === this.active
        ? stepperButton.classList.add("stepper-button--active")
        : null;
      stepperButton.id = "stepper" + i;
      stepperButton.onclick = () => this.displayPhoto(i);
      stepper.appendChild(stepperButton);
      this.stepperButtons.push(stepperButton);
    });
  }
}

export default CarouselControls;
