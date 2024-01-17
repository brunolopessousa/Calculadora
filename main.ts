let a = 0
let b = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(a + b)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(a - b)
})
input.onButtonPressed(Button.A, function () {
    a = randint(1, 12)
    basic.showNumber(a)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(a * b)
})
input.onButtonPressed(Button.B, function () {
    b = randint(1, 12)
    basic.showNumber(b)
    basic.pause(1000)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(a / b)
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . # . .
        . . . . .
        # # # # #
        . . . . .
        . . # . .
        `)
    basic.pause(5000)
})
