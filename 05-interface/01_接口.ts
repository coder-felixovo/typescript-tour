{
  // 声明一个接口
  interface StuInfo {
    stuId: string,
    stuName: string
  }

  // 声明一个函数，对参数StuObj指定类型为StuInfo
  function printStuInfo(StuObj: StuInfo) {
    for (const [key, value] of Object.entries(StuObj)) {
      console.log(`${key}: ${value}`)
    }
  }

  // 测试
  const stu = { stuId: '1', stuName: 'Amy' }
  // 下面这个会报错，提示缺少 'stuName'
  // const stu = { stuId: '2' }
  printStuInfo(stu)

  // 说明
  // 1. 并不表示函数printStuInfo实现了StuInfo接口
  // 2. 接口StuInfo限定了传入对象StuObj的值的“形状”
  // 3. 不会检查属性的顺序，只要存在相应的类型就可以
  // 4. 检查必需的属性及其类型，但不一定只检查必需的属性及其类型（后面会有说明）
}