{
  // 额外属性
  // 声明一个接口
  interface StuInfo {
    readonly stuId: string, // 只读属性
    stuName: string,
    stuAge?: number, // 可选属性
    // 可能会带有任意数量的其它属性
    [propName: string]: any
  }

  // 声明一个函数，对参数StuObj指定类型为StuInfo
  function printStuInfo(StuObj: StuInfo) {
    for (const [key, value] of Object.entries(StuObj)) {
      console.log(`${key}: ${value}`)
    }
  }

  printStuInfo({ stuId: '1', stuName: 'Amy', major: 'Software Engineering' })
}
