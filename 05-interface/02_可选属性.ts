{
  // 接口中的属性不全都是必需的，在属性名后面加一个 '?' 表示可选属性
  // 声明一个接口
  interface StuInfo {
    stuId: string,
    stuName: string,
    stuAge?: number, // 可选属性
  }

  // 声明一个函数，对参数StuObj指定类型为StuInfo
  function printStuInfo(StuObj: StuInfo) {
    for (const [key, value] of Object.entries(StuObj)) {
      console.log(`${key}: ${value}`)
    }
  }

  // 测试
  const stu = { stuId: '1', stuName: 'Amy' }
  printStuInfo(stu)

  // 说明
  // 1. 对可能存在的属性进行预定义
  // 2. 可以捕获引用了不存在的属性时的错误
}
