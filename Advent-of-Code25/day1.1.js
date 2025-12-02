import fs from 'node:fs'
// read file
const data = fs.readFileSync('./Advent-of-Code25/input1.1.txt', 'utf8')
const rowSplit = data.split("\n")
console.log(rowSplit)
// replace R/L with +/-
let result = []
for (const line of rowSplit) {
    if (line[0] === 'R') {
        const replaceRr = line.replace("R", "+")
        result.push(parseInt(replaceRr))
    } else {
        const replaceLl = line.replace("L", "-")
        result.push(parseInt(replaceLl))
    }
}
let finalResult = 0
let currentPosition = 50 
for (const number of result) {
    // console.log('cur:', currentPosition, 'n:', number)
    let r = (currentPosition + number) % 100
    if (r < 0) {
        r += 100
    } 
    currentPosition = r
    if (currentPosition === 0) {
        finalResult += 1
    }
}
console.log(finalResult)