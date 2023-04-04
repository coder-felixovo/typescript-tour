/*
  Demo about TS type `tuple`
  A tuple type represents an array with a given number and type of elements. 
  Elements need not be of the same type.
*/
namespace tupleTypeDemo {
  // 1. declare a tuple type variable
  let tuple: [string, number]

  // 2. assignment
  tuple = ['year', 2023]

  // 3. access
  console.log(`tuple[0] is ${tuple[0]}, ${typeof tuple[0]}`)
  // tuple[0] is year, string
  console.log(`tuple[1] is ${tuple[1]}, ${typeof tuple[1]}`)
  //tuple[1] is 2023, number
}