// 当成员标记为private时，它就不能在声明它的类的外部访问。
{
  class Animal {
    private name: string
    constructor(theName: string) { this.name = theName }
  }
  // 下面这行代码会报错
  // new Animal('cat').name
}