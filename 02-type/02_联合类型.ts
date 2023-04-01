/* 
  联合类型
  表示取值可以是多种类型中的一种，未赋值时，只能够访问类型中共有的属性和方法
*/
{
  let name: string | number
  name = 'robot'
  console.log(name.length) // 5
  name = 123
  console.log(name.toFixed()) // "123"
}