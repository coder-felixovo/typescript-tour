/* 
  函数重载
  相同名称，不同参数数量和类型。
  在TS表现为给同一个函数提供多个函数定义
 */
{
  let obj: any = {}
  function createRole(name: string): string
  function createRole(age: number): number
  function createRole(x: any): any {
    if (typeof x === 'string') {
      obj.name = x
    }
    if (typeof x === 'number') {
      obj.age = x
    }
  }
  /* 
    注意：
    1. 重载的函数在调用时会进行类型检查，依次查找重载列表，若匹配则调用。传入参数类型不符则报错。
    2. 定义重载时，要将最精确的类型放在最前面。
    3. createRole(x: any): any {}并不是重载列表的一部分，只有前两个才是重载
   */
  createRole('宫园薰')
  createRole(14)
  // 下面这行代码会报错，因为重载函数的参数中没有object类型
  // createRole({})

  console.log(obj)
}