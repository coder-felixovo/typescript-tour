/*
  never
  一般表示难以达到的类型
  例如：总是会抛出异常或根本就不会有返回值的函数表达式，
  变量也可能是never类型，当它被永不为真的类型保护约束时

  never类型是任何类型的子类型，可以赋值给任何类型。
  除never本身，没有类型可以赋值给never类型，即使any类型也不行。
*/
{
  function error(message: string): never {
    throw new Error(message)
  }

  function fail() {
    return error('Something failed')
  }
}