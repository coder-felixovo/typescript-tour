/* 
  当类型检查无法断定类型时，可以使用 ! 操作符断言操作对象是非null和非undefined类型
*/
{
  let flag: null | undefined | string
  flag!.toString() // ok
  flag.toString() // error
}