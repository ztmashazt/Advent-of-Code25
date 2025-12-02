import fs from 'node:fs'

// read file
const data = fs.readFileSync('./input1.1.txt', 'utf8')
const rowSplit = data.split("\n")

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
const input = result

  let currentPosition = 50
  let pointOnZero = 0
  let passesZero = 0

  for (const move of input) {
    const init = currentPosition

    passesZero += Math.floor(Math.abs(move) / 100)

    // inline modulo logic
    currentPosition = ((currentPosition + move) % 100 + 100) % 100

    if (init !== 0 && currentPosition !== 0) {
      if (
        (move < 0 && currentPosition > init) ||
        (move > 0 && currentPosition < init)
      ) {
        passesZero += 1
      }
    }

    if (currentPosition === 0) {
      pointOnZero += 1
    }
  }

  console.log(pointOnZero)
  console.log(passesZero + pointOnZero)
