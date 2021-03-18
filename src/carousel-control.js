class CarouselControls {
  constructor() {
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    this.photos = document.querySelectorAll(".photo");
    nextButton.addEventListener("click", () => this.toggleNext());
    prevButton.addEventListener("click", () => this.togglePrev());
    this.active = 0;
    this.initStepper();
  }

  displayPhoto(prevID, nextID) {
    [this.photos[prevID], this.photos[nextID]].forEach((el) =>
      el.classList.toggle("photo--active")
    );
  }

  toggleNext() {
    const prev = this.active;
    this.active = (this.active + 1) % this.photos.length;
    this.displayPhoto(prev, this.active);
    this.updateStepper(prev, this.active);
  }

  togglePrev() {
    const prev = this.active;
    this.active =
      this.active - 1 >= 0 ? this.active - 1 : this.photos.length - 1;
    this.displayPhoto(prev, this.active);
    this.updateStepper(prev, this.active);
  }

  updateStepper(prevID, nextID) {
    const prev = document.getElementById("stepper" + prevID);
    const next = document.getElementById("stepper" + nextID);
    [prev, next].forEach((el) => el.classList.toggle("stepper-button--active"));
  }

  initStepper() {
    // dynamically generate a stepper button for each photo
    this.stepper = document.getElementById("stepper-root");
    this.photos.forEach((_, id) => {
      const stepperButton = document.createElement("div");
      stepperButton.classList.add("button", "stepper-button");
      id === this.active
        ? stepperButton.classList.add("stepper-button--active")
        : null;
      stepperButton.setAttribute("id", "stepper" + id);
      this.stepper.appendChild(stepperButton);
      id++;
    });
    console.log(this.photos);
  }
}

export default CarouselControls;
