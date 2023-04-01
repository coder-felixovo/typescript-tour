// 在TS里，我们可以使用常用面向对象模式，
// 基于类的程序设计中一种最基本的模式是 允许使用继承扩展类。
{
  class Animal {
    name: string
    constructor(theName: string) {
      this.name = theName
    }
    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance} meters`)
    }

  }
  class Dog extends Animal {
    bark() {
      console.log('Woof! Woof!')
    }
  }
  class Cat extends Animal {
    // 子类包含了一个构造函数，它必须调用super()，它会执行基类的构造函数
    // 而且在构造函数里访问this的属性之前，一定要调用super()
    constructor(name: string) { super(name) }
    // 子类可以重写父类中的方法
    move(distance = 45) {
      console.log('running...')
      super.move(distance)
    }
  }
  const dog = new Dog('哈士奇')
  dog.bark()
  dog.move(10)
  const garfield = new Cat('加菲猫')
  garfield.move()
}
// 类从基类中继承了属性和方法
// Dog类 是一个 派生类，它通过 extends 关键字，派生自 Animal 基类。
// 派生类通常被称为 子类，基类通常被称为 超类。

