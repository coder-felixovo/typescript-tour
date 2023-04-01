/* 
  使用readonly关键字将属性设置为只读的，
  只读属性必须在声明时或构造函数里被初始化。
 */
{
  class Student {
    readonly stuId: string
    name: string
    constructor(theStuId: string, theName: string) {
      this.stuId = theStuId
      this.name = theName
    }
  }
  let felix = new Student('2019118131', 'Felix')
  // 下面这行代码会报错，因为stuId属性是只读的
  // felix.stuId = '123'
}