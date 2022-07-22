class Controls {
  constructor() {
    this.forward = false
    this.right = false
    this.left = false
    this.reverse = false

    this.#addKeyboardListeners()
  }

  // #functionName is private method
  #addKeyboardListeners() {
    // register keyup events
    document.onkeydown = event => {
      switch (event.key) {
        case 'ArrowLeft':
          this.left = true
          break
        case 'ArrowRight':
          this.right = true
          break
        case 'ArrowUp':
          this.forward = true
          break
        case 'ArrowDown':
          this.reverse = true
          break
      }
    }
    // register k
    document.onkeyup = event => {
      switch (event.key) {
        case 'ArrowLeft':
          this.left = false
          break
        case 'ArrowRight':
          this.right = false
          break
        case 'ArrowUp':
          this.forward = false
          break
        case 'ArrowDown':
          this.reverse = false
          break
      }
    }
  }
}
