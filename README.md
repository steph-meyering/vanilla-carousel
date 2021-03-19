# Carousel

## Part 1

### Tools:

- React, [React-Responsive-Carousel](https://www.npmjs.com/package/react-responsive-carousel)

### Reflections:

- This was my first time building a carousel.
- Might've been overkill to use React here but since external libs and frameworks are allowed I went for it
- Setting this up with an external library was a fun exercise and helped get a better idea of how I would build it from scratch.
- Styling is minimal

## Part 2

### Tools:

- Vanilla JS, HTML, CSS

### Reflections:

- The carousel has three main parts:

  - the image container
  - the navigation arrows
  - the stepper? navigation dots

- I built the carousel thinking about scalibility, so it'll work with any number of pictures:

  - the stepper container will initialize with as many button as there are pictures in the image container
  - navigation controls are dynamic and loop over the number of pictures present

- Navigation:
  - mouseover and mouseout event listener pause or restart autoplay
  - Navigation is also possible with left and right arrow keys via a keydown event listner
  - Navigating from one picture to another resets the display timer

### Todo:

- Optimize for mobile (media queries, touch events)
- Scale down drone image resolution
- Make it look nicer
