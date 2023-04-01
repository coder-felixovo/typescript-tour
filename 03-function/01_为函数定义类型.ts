/* 
  为函数参数以及函数定义类型
  TS能够根据返回语句自动推断出返回值类型，因此通常省略返回值类型。
*/

{
  function add(x: number, y: number): number {
    return x + y
  }
  console.log(add(1, 2)) // 3
}

{
  const subtract = function (x: number, y: number): number {
    return x - y
  }
  console.log(subtract(2, 1)) // 1
}
