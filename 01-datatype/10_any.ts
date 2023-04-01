/*
  any
  TS允许对any类型的值无需执行任何检查
  一般使用场景：
  1. 第三方库没有提供类型文件，可以使用any转换
  2. 太复杂的数据结构难以定义类型
*/
{
  let notSure: any = 'notSure'
  notSure = false
  // 使用any让数组包含不同类型的数据
  let list: any[] = [1, true, 'string']
  console.log(list)
}