/* 
  泛型约束
 */
{
  interface Length {
    length: number
  }
  function identity<T extends Length>(arg: T): T {
    // Now arg has length property.
    console.log(arg.length)
    return arg
  }
  // 这个泛型函数被定义了约束，因此不再适用于任意类型。
  // 传入符合约束类型的值，必须包含必须的属性。
  identity([])
  identity({ length: 1, value: 1 })
  // 下面这行代码报错
  identity(1)
}