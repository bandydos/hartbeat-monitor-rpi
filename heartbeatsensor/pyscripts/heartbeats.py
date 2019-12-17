from pulsesensor import Pulsesensor
import time
import json
import RPi.GPIO as GPIO


GPIO.setmode(GPIO.BCM)
btnpin = 17
GPIO.setup(btnpin, GPIO.IN, pull_up_down=GPIO.PUD_UP)



def writetojson(path, filename, data):
    filepathnamewext ='./' + path + '/' + filename + '.json'
    with open(filepathnamewext, 'w') as fp:
        json.dump(data, fp)

pth = '../data/'
fn = 'heartbeat'

b1 = 1
b2 = 2
b3 = 3
b4 = 4
b5 = 5
b6 = 6
b7 = 7
b8 = 8
b9 = 9
b10 = 10

beats = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10]

p = Pulsesensor()

def getBeats():
    i = 0
    while i < len(beats):
        bpm = p.BPM
        if bpm > 30:
            i += 1
        if i == 1 and bpm > 30:
            beats[0] = bpm
            print (beats[0])
        elif i == 2 and bpm > 30:
            beats[1] = bpm
            print(beats[1])
        elif i == 3 and bpm > 30:
            beats[2] = bpm
            print (beats[2])
        elif i == 4 and bpm > 30:
            beats[3] = bpm
            print(beats[3])
        elif i == 5 and bpm > 30:
            beats[4] = bpm
            print (beats[4])
        elif i == 6 and bpm > 30:
            beats[5] = bpm
            print(beats[5])
        elif i == 7 and bpm > 30:
            beats[6] = bpm
            print (beats[6])
        elif i == 8 and bpm > 30:
            beats[7] = bpm
            print(beats[7])
        elif i == 9 and bpm > 30:
            beats[8] = bpm
            print (beats[8])
        elif i == 10 and bpm > 30:
            beats[9] = bpm
            print(beats[9])
        else:
            print("No heartbeat found")
        time.sleep(1)
        if i == 10:
            p.stopAsyncBPM()
            print (beats)
            writetojson(pth, fn, beats)

while True:
        input_state = GPIO.input(btnpin)
        if input_state == False:
            p.startAsyncBPM()
            getBeats()
