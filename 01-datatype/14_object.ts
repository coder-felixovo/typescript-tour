/*
  object
  表示非原始类型
*/
{
  let obj: object = {}
  // 以下都不允许
  obj = 3.14
  obj = 'hello'
  obj = true
  obj = null
  obj = undefined
  obj = Symbol('1')
}
