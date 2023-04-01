/* 
  类型断言
  有时候你清除地知道某个值的确切类型，通过类型断言，告诉TS按照你所断言的类型通过编译
 */
{
  // 1. 尖括号法
  let value1 = 'hello world'
  let strLength1 = (<string>value1).length

  // 2. as语法
  let value2 = 'hello typescript'
  let strLength2 = (value2 as string).length
}
// 两种形式是等价的，但是在ts中使用jsx，只有as语法被允许，因此建议使用as语法