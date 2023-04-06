namespace functionDemo08 {
  /* 
    函数重载
    1. 函数名称相同，不同参数数量和类型。
    2. 在TS中表现为给同一个函数提供多个函数定义
  */
  function add(arg1: string, arg2: string): string
  function add(arg1: number, arg2: number): number
  function add(arg1: string | number, arg2: string | number) {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
      return arg1 + arg2
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
      return arg1 + arg2
    }
  }
  /* 
    注意：
    1. 重载的函数在调用时会进行类型检查，依次查找重载列表，若匹配则调用。传入参数类型不符则报错。
    2. 定义重载时，要将最精确的类型放在最前面。
    3. function createRole(param: any): any { }并不是重载列表的一部分，只有前两个才是重载
   */
  const add1 = add('a', 'b')
  const add2 = add(1, 1)
  console.log(add1) // "ab"
  console.log(add2) // 2

  // 报错，因为重载函数的参数中没有object类型
  // add({})

}