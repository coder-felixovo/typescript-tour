/* 
  protected与private行为相似，但是protected成员在子类中仍然可以访问
 */
{
  class Person {
    protected name: string
    // 构造函数也可以被标记为protected，这意味着该类不能在包含它的类外被实例化，可以被继承。
    protected constructor(name: string) { this.name = name }
  }
  class Student extends Person {
    private stuId: string

    constructor(name: string, stuId: string) {
      super(name)
      this.stuId = stuId
    }

    public getStuName() {
      return this.name
    }
  }
  let student = new Student('Felix', '2019118131')
  console.log(student.getStuName()) // Felix
  // 下面这行代码会报错，因为Person类中的constructor被protected修饰
  // let person = new Person()
}