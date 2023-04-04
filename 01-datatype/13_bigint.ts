/* 
  Demo about type `bigint`
  1. In tsconfig.json: "lib": "ESnext"
  2. type `bigint` is different from type `number`
*/
namespace bigintTypeDemo {
  let foo: number
  let bar: bigint

  // The following is not allowed
  foo = bar
  bar = foo
}