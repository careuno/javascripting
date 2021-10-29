/* Attempt 1: prints cats, dogs, rats

const pets = ['cat', 'dog', 'rat'] 

for ( let i = 0; i < 3; i++) {

  console.log(pets[i]+ 's')
}
*/

/* Attempt 2:

const pets = ['cat', 'dog', 'rat'] 

for ( let i = 0; i < 3; i++) {
pets[i] = pets[i] + 's'
  console.log(pets[i]) 
}*/

// Attempt 3:


const pets = ['cat', 'dog', 'rat'] 

for ( let i = 0; i < 3; i++) {
  pets[i]= pets[i] + 's'
}

console.log(pets)

/* SOLUTION

const pets = ['cat', 'dog', 'rat'] 

for ( let i = 0; i < 3; i++) {
  pets[i]= pets[i] + 's'
}

console.log(pets)
