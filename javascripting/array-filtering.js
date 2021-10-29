const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
const filtered = numbers.filter(function evenNumbers (number) {
  return (number % 2 === 0)
}) 

console.log(filtered)

/* Mistake you made was forgetting to put the ( after return BUT THE SOLUTION 
  puts brackets around number % 2 only and not the === 0

Solution: 
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    const filtered = numbers.filter(function (number) {
      return (number % 2) === 0
    })
    
    console.log(filtered)
    
    */