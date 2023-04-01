/* 
  上下文类型
  按上下文归类会发生在表达式的类型与所处位置相关时。
 */
{
  // 会报错，因为右边的函数表达式不是在上下文类型的位置。
  window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button)
  }

  // 如果表达式包含了明确的类型，上下文类型被忽略。
  // 不报错
  window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.button)
  }
}

/* 
  上下文类型常用场景
  1. 有参函数
  2. 赋值表达式右边
  3. 类型断言
  4. 对象成员、数组字面量、返回值语句
 */

/* 
  上下文类型也会作为最佳通用类型的候选类型
 */
{
  function zoo(): Animal[] {
    return [new Panda(), new Elephant(), new Kangaroo()]
  }
  // Animal会作为最佳通用类型。
}