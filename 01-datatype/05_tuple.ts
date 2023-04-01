/* 
  tuple 元组
  表示一个已知元素数量和类型的数组，各元素的类型不必相同，但对应位置类型需要相同
*/
{
  // 声明一个元组类型
  let tuple: [string, number]
  // 初始化值
  tuple = ['year', 2023]
  // 访问已知元素
  console.log(typeof tuple[0]) // string
}