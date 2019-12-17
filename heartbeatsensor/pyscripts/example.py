from pulsesensor import Pulsesensor
import time
import json

p = Pulsesensor()
p.startAsyncBPM()

def writetojson(path, filename, data):
    filepathnamewext ='./' + path + '/' + filename + '.json'
    with open(filepathnamewext, 'w') as fp:
        json.dump(data, fp)

pth = '../data/'
fn = 'heartbeat'
id = 'heartbeat'

try:
    while True:
        bpm = p.BPM
        if bpm > 0:
            print("BPM: %d" % bpm)
	    writetojson(pth, fn, id)
            writetojson(pth, fn, bpm)

        else:
            print("No Heartbeat found")
        time.sleep(1)
except:
    p.stopAsyncBPM()
