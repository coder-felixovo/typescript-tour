/* 
  类型保护是一些表达式，在编译的时候就能通过类型信息确保某个作用域内变量的类型，
  通常用于检测属性、方法或原型，以确定如何处理值
*/
{
  // typeof 类型保护
  function check(value: string | number | boolean) {
    if (typeof value === 'string') {
      return value + value
    } else if (typeof value === 'number') {
      return value * 2
    } else {
      return !value
    }
  }
}

{
  // in 关键字
  interface Cat {
    name: string
  }
  interface Dog {
    speak: string
  }
  function getProp(value: Cat | Dog) {
    if ('name' in value) {
      return value.name
    }
    return value.speak
  }
}

{
  // instanceof 类型保护
  class Animal {
    name!: string
  }
  class Bird extends Animal {
    fly!: number
  }
  function getName(animal: Animal) {
    if (animal instanceof Bird) {
      console.log(animal.fly)
    } else {
      console.log(animal.name)
    }
  }
}

{
  // 自定义类型保护
  function isObject(value: unknown): value is object {
    return value !== 'null' && typeof value === 'object'
  }

  function checkIsObject(value: string | object) {
    if (isObject(value)) {
      //
    } else {
      //
    }
  }
}