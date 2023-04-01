/* 
  静态属性是定义在类本身上，通过 类名.属性名 访问
 */
{
  class Person {
    static pName: string = 'Felix'
  }
  console.log(Person.pName)
}