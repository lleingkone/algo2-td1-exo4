input.onButtonPressed(Button.A, function () {
    led.unplot(posX, posY)
    if (posX < 0) {
        posX = 4
        posX += -1
    }
    if (posY < 0) {
        posY = 4
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, posY)
    if (posX < 0) {
        posX = 0
        posY += 1
    } else if (posY > 4) {
        posY = 0
    }
    led.plot(posX, posY)
})
let posY = 0
let posX = 0
posX = 2
posY = 2
led.plot(posX, posY)
basic.forever(function () {
	
})
