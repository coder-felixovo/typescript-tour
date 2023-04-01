// 在TS中可以使用基于类的面向对象的方式
{
  class Greeter {
    greeting: string
    constructor(message: string) {
      this.greeting = message
    }
    greet() {
      return 'Hello, ' + this.greeting
    }
  }
  let greeter = new Greeter('world')
  console.log(greeter.greet()) // Hello, world
}
// 类中的this指向类的实例成员
// new构造了Greeter类的一个实例，它会调用之前定义的构造函数