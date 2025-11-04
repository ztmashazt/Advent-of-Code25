import fs from 'node:fs'

// read file
const data = fs.readFileSync('input.txt', 'utf8')

// split input file into 2 lists 
const rowSplit = data.split("\n")
let firstList = []
let secondList = []
for (const row of rowSplit) {
    const rowToColumnus = row.split("   ")
    // push to add all numbers into an array 
    // parseInt to convert to numbers
    firstList.push(parseInt(rowToColumnus[0]))
    secondList.push(parseInt(rowToColumnus[1]))
}

// sort numbers
firstList.sort()
secondList.sort()
// calculate distance 

let result = 0
for (const [index, leftNumber] of firstList.entries()) {
    const rightNumber = secondList[index]

    const calculateDistance = Math.abs(rightNumber - leftNumber)
    result = result + calculateDistance

}

console.log(result)

