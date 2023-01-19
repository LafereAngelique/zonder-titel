let teller = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        teller += 1
        basic.showNumber(teller)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        teller += -1
        basic.showNumber(teller)
    }
})
