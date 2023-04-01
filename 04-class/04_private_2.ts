/* 
  TS使用的是结构类性类型系统，当比较两种不同的类型时，
  如果所有成员的类型是相同的，我们就认为它们的类型是兼容的。
  但是，当比较带有private或protected的成员时，
  如果其中一个类型里包含一个private成员，
  那么只有当另外一个类型也存在这样一个private成员，
  并且它们来自同一处声明，我们才认为这两个类型是兼容的。
*/
{
  class Animal {
    private name: string
    constructor(theName: string) { this.name = theName }
  }
  class Rhino extends Animal {
    constructor() { super('Rhino') }
  }
  class Employee {
    private name: string
    constructor(theName: string) { this.name = theName }
  }
  let animal = new Animal('Goat')
  let rhino = new Rhino()
  let employee = new Employee('Bob')
  animal = rhino
  // 下面这行代码报错
  // animal = employee
}
/* 
  Rhino类是Animal的子类，它和Animal类共享了来自Animal类中的private name，因此它们是兼容的。
  Employee类虽然也有定义private name，但并不是和Animal类中的private name，因此它们是不兼容的。
 */