/* 
  在06的例子中，我们在构造函数中定义了theName参数，然后赋值给name。
  参数属性可以让我们在一个地方定义并初始化一个成员，在构造函数的参数前加一个访问限定符。
 */
{
  class Student {
    constructor(readonly stuId: string, public name: string) { }
  }
  let felix = new Student('2019118131', 'Felix')
  console.log(felix)
}