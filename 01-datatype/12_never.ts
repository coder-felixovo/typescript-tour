/*
  Demo about type `never`

  The type `never` represents a type that is usually difficult to reach.
  For example, throwing an exception or a function expression without return value.

*/
namespace neverTypeDemo {
  function error(message: string): never {
    throw new Error(message)
  }

  function fail() {
    return error('Something failed')
  }

  let foo: never = fail()
  console.log(foo)
}