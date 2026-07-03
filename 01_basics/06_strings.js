const name="akanchha"
const repoCount =50
//this is correct way
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName= new String('akaa')
//string ek object h

console.log(gameName[0])
//console.log(gameName.__proto__);
//console.log(name.length)
//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(3))
//console.log(gameName.indexOf('a'))

//const newString= name.substring(0,4)
//console.log(newString)
//const newString= name.slice(-8,4)
//console.log(newString)

const newName= "  aka   "
console.log(newName)
console.log(newName.trim())

const url="https://aka.com/aka%20anand"
console.log(url.replace('%20','-'))