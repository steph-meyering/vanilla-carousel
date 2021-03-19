class CarouselControls {
  constructor() {
    this.photos = document.querySelectorAll(".photo");
    this.stepperButtons = [];
    this.active = 0;
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    const imageContainer = document.getElementById("image-container");
    nextButton.addEventListener("click", () => this.toggleNext());
    prevButton.addEventListener("click", () => this.togglePrev());
    imageContainer.addEventListener("mouseover", () => this.handleMouseOver());
    imageContainer.addEventListener("mouseout", () => this.handleMouseOut());
    this.initStepper();
    this.mouseOver = false;
    this.interval = 3500;
    this.timers = new Set();
    this.startAutoPlay();
    document.addEventListener("keydown", (e) => this.handleKeyPress(e));
  }

  startAutoPlay() {
    this.timers.add(setInterval(() => this.toggleNext(), this.interval));
  }

  stopAutoPlay() {
    this.timers.forEach((timer) => clearInterval(timer));
    this.timers = new Set();
  }

  resetInterval() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  handleMouseOut() {
    this.mouseOver = false;
    this.startAutoPlay();
  }

  handleMouseOver() {
    this.mouseOver = true;
    this.stopAutoPlay();
  }

  handleKeyPress(event) {
    switch (event.key) {
      case "ArrowLeft":
        return this.togglePrev();
      case "ArrowRight":
        return this.toggleNext();
      default:
        break;
    }
  }

  displayPhoto(nextID) {
    const prevID = this.active;
    [this.photos[prevID], this.photos[nextID]].forEach((el) =>
      el.classList.toggle("photo--active")
    );
    this.active = nextID;
    this.updateStepper(prevID, nextID);
    this.resetInterval();
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
