class CarouselControls {
  constructor() {
    this.photos = document.querySelectorAll(".photo");
    this.stepperButtons = []
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    nextButton.addEventListener("click", () => this.toggleNext());
    prevButton.addEventListener("click", () => this.togglePrev());
    this.active = 0;
    this.initStepper();
  }

  displayPhoto(prevID, nextID) {
    console.log("prev: ", prevID, "next: ", nextID);
    [this.photos[prevID], this.photos[nextID]].forEach((el) =>
      el.classList.toggle("photo--active")
    );
    this.updateStepper(prevID, nextID);
  }

  skipTo(id) {
    if (id !== this.active){
      this.displayPhoto(this.active, id)
      this.active = id
    }
  }

  toggleNext() {
    const prev = this.active;
    this.active = (this.active + 1) % this.photos.length;
    this.displayPhoto(prev, this.active);
  }

  togglePrev() {
    const prev = this.active;
    this.active =
      this.active - 1 >= 0 ? this.active - 1 : this.photos.length - 1;
    this.displayPhoto(prev, this.active);
  }

  updateStepper(prevID, nextID) {
    const prev = this.stepperButtons[prevID];
    const next = this.stepperButtons[nextID];
    [prev, next].forEach((el) => el.classList.toggle("stepper-button--active"));
  }

  initStepper() {
    // dynamically generate a stepper button for each photo
    const stepper = document.getElementById("stepper-root");
    this.photos.forEach((_, i) => {
      const stepperButton = document.createElement("div");
      stepperButton.classList.add("button", "stepper-button");
      i === this.active
        ? stepperButton.classList.add("stepper-button--active")
        : null;
      stepperButton.id = "stepper" + i;
      stepperButton.onclick = (() => {
        this.skipTo(i)
      })
      stepper.appendChild(stepperButton);
      this.stepperButtons.push(stepperButton)
    });
  }
}

export default CarouselControls;
