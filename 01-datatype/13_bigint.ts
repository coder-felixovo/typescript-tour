/* 
  bigint
  可以存储和操作大整数
  注意：
  1. 需要在tsconfig.json的lib字段加上ESNext
  2. number和bigint类型不一样
*/
{
  let foo: number
  let bar: bigint
  foo = bar // error
  bar = foo // error
}