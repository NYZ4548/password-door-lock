radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        rekabit.setServoPosition(ServoChannel.S1, 180)
        basic.pause(100)
        rekabit.setAllRgbPixelsColor(0x0000ff)
        basic.pause(100)
        rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 128)
        basic.pause(2000)
        rekabit.setServoPosition(ServoChannel.S1, 0)
    }
})
input.onButtonPressed(Button.A, function () {
    Entry = "" + Entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    // Verify password
    if (Password == Entry) {
        radio.sendNumber(1)
    } else {
        basic.showIcon(IconNames.No)
        rekabit.setAllRgbPixelsColor(0xff0000)
    }
    basic.pause(500)
    basic.clearScreen()
    // Reset "Entry"
    Entry = ""
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    Entry = "" + Entry + "B"
})
// On logo touched Door lock
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.pause(100)
    rekabit.brakeMotor(MotorChannel.M1)
    basic.pause(100)
    rekabit.clearAllRgbPixels()
    basic.pause(100)
})
let Entry = ""
let Password = ""
radio.setGroup(1)
// Set your password here
Password = "ABAB"
Entry = ""
rekabit.setServoPosition(ServoChannel.S1, 0)
