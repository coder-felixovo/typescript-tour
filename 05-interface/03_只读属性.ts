{
  // 在属性名前加 'readonly' 表示 '只读属性'，该属性只能够在刚创建的时候修改其值，之后不能再修改
  // 声明一个接口
  interface StuInfo {
    readonly stuId: string, // 只读属性
    stuName: string,
    stuAge?: number, // 可选属性
  }

  // 测试
  const stu: StuInfo = { stuId: '1', stuName: 'Amy' }
  // 下面这行会报错
  // stu.stuId = '1-update'
}

// TS具有ReadOnlyArray<T>类型，确保数组创建后不再能够被修改
{
  let arr: number[] = [1, 2, 3]
  let immutableArr: ReadonlyArray<number> = arr
  // 下面4行皆会报错
  // immutableArr[0] = 11
  // immutableArr.push(5)
  // immutableArr.length = 100
  // arr = immutableArr

  // 但是可以用类型断言重写，从而可以赋值给普通数组
  arr = immutableArr as number[]
  console.log(arr)
  // Expected output: [1, 2, 3]
}











