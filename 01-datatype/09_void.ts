/* 
  Demo about TS type `void`
*/
namespace voidTypeDemo {
  // You usually see a function return type is void, when the function does not return a value.
  function greet(): void {
    console.log('Hello, welcome!')
  }

  // Declaring a variable of type void usually has no effect.
  // You can only assign a value of undefined or null to a void variable.

  let useless: void = undefined

  // When strictNullChecks is false, this will be ok.
  let futile: void = null
}