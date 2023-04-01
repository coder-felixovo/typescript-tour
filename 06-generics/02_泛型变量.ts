/* 
  泛型变量
 */
{
  function identity<T>(arg: T): T {
    // 下面这行代码会报错，并没有指明arg具有length属性
    // console.log(arg.length)
    return arg
  }
}

{
  // 假设操作的是T类型的数组，此时length属性是存在的。
  function identity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
  }
  let result = identity(['宫水三叶', '立花泷', '森岛帆高', '天野阳菜'])
}

{
  // 上述例子也可以写成如下形式
  function identity<T>(arg: Array<T>): Array<T> {
    return arg
  }
}