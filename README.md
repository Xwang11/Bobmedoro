# Bobmedoro
A desktop pomedoro timer app built using electron.js featureing hand drawn graphics of adorable dog mascot Bob

I use the pomedoro technique a lot, and wanted to make my own!

## Design Process
I sketched the concept real quick on pocket procreate:

Then I drew some assets and made a prototype on [figma](https://www.figma.com/proto/xBUeyIMs7ONq0dBvMAg6Yx/Bob-Themed-Pomedoro-Timer?node-id=6-182&starting-point-node-id=6%3A182&t=4qBGhwr5ebwbll5P-1)

Once the figma prototyle was up to par, and I have a clear idea of what I want this app to look like, I moved on to the building process

## Building Process 
- Built up layout with HTML
- Implemented timer functions with javascript
- Used CSS to make the app look like the prototype, utilizing flexbox, updating HTML and JS along the way
- Replaced images with CSS-generated elements in order to save storage space
- Packaged with electron forge
- Final product is uploaded as a zip file in this github! Link to download is also below

## More is to come! 
- Adding options on the menu to customize the background and what Bob is focusing on!
- Audio cues when the timer is up
- Possibly integrating app as a browser extension

## Current Download
Download [Here](https://github.com/Xwang11/Bobmedoro/raw/refs/heads/main/bobmedoro-darwin-arm64-1.0.0.zip?download=)!!!!

On macs the app might show as damaged due to extra metadata. Do the following to fix that issue:
- Open terminal
- Type in "xattr -cr \<path-to-the-unzipped-app\>.app"
- Or you can type "xattr -cr " then drag the file to terminal 
