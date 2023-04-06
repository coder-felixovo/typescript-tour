/* 
  1. 定义函数参数类型
  2. 定义函数返回值类型
  3. TS能够根据返回语句自动推断出返回值类型
*/
namespace functionDemo01 {
  function add(x: number, y: number): number {
    return x + y
  }
  console.log(add(1, 2)) // 3
  const subtract = function (x: number, y: number): number {
    return x - y
  }
  console.log(subtract(2, 1)) // 1
}
