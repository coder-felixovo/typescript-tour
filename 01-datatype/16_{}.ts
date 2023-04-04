/*
  Demo about type `{}`
*/
namespace emptyObjectTypeDemo {
  let simple: {}
  simple = 2.71
  simple = 'hello'
  simple = true
  simple = {}
  simple = []
  simple = new Date()
  simple = Symbol('foo')

  // The following is not allowed
  simple = null
  simple = undefined
}