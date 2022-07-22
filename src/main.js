const canvas = document.getElementById('myCanvas')
canvas.width = 260

const ctx = canvas.getContext('2d')
const car = new Car(130, 800, 30, 50)
car.draw(ctx)

animate()

function animate() {
  car.update()
  // clears the height on each redraw
  canvas.height = window.innerHeight
  car.draw(ctx)
  // calls animate method many times per sec
  // gives illusion that car is moving
  requestAnimationFrame(animate)
}
