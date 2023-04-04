/*
  Demo about TS type `object`
  object type represents a non-primitive type
*/
namespace objectTypeDemo {
  let obj: object = {}

  // The follow is allowed
  obj = []
  obj = {}
  obj = new Date()

  // The following is not allowed.
  obj = 3.14
  obj = 'hello'
  obj = true
  obj = null
  obj = undefined
  obj = Symbol('1')
}
