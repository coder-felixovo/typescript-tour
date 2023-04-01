{
  // 接口描述函数
  // 声明一个接口，包括 '参数列表' 和 '返回值类型'
  interface SearchFunc {
    (source: string, substring: string): boolean
  }

  // 声明一个变量，将接口赋给给变量
  let mySearch: SearchFunc

  // 1. 将函数赋给变量
  // 2. 函数类型的类型检查，参数名不需要与定义接口的名字相匹配
  mySearch = function (src: string, sub: string) {
    let result = src.search(sub)
    return result > -1
  }
  console.log(mySearch('123', '1')) // true
  console.log(mySearch('123', '0')) // false
}
