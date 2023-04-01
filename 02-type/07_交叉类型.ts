/* 
  交叉类型，将多个类型合并为一个类型，通过 & 运算符将现有的多种类型，
  叠加在一起成为新的一种类型，它包含了所需类型的特性。
*/
{
  type flag1 = { x: number }
  type flag2 = flag1 & { y: string }
  let obj: flag2 = {
    x: 100,
    y: 'hello'
  }
}