const nameA = 'nico'
const nameB = 'husin'
const nameCompared = 'nameA' === 'nameB'

console.log(nameA)
console.log(nameB)
console.log(nameCompared)

const ageA = 18
const ageB = 25
const ageC = 30

if (ageA > ageB && ageA > ageC) {
  console.log('not even close')
} else if (ageA < ageB && ageC < ageB) {
  console.log('almost')
} else {
  console.log('noob')
}

const personA = {
  name: 'Nico',
  age: 24
}

const personB = {
  name: 'Nana',
  age: 21
}

switch (personA.age > personB.age || personB.age > personA.age) {
  case true:
    console.log('Good job')
    break

  case false:
    console.log('u are wrong')
    break

  default:
    console.log('Study more')
}




