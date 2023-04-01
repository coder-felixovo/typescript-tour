/* 
  在TS中，传递给一个函数的参数个数必须与函数期望的个数一致
 */
{
  function sum(num1: number, num2: number) {
    return num1 + num2
  }
  let res1 = sum(1, 2) // yes
  let res2 = sum(1) // no, too few parameters
  let res3 = sum(1, 2, 3) // no, too many parameters
}