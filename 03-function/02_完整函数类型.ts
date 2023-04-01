{
  let add: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number { return x + y }
  /* 
    函数类型包含：参数类型和返回值类型，如果要写出完整函数类型，这两部分是必须的。
    1. 只要参数类型是匹配的，就认为是有效的函数类型，不在乎参数名是否正确。
    2. 返回值类型之前使用 => 符号。
    3. 如果函数没有返回任何值，也必须指定返回值类型为void。
    4. 函数中捕获的变量不体现在类型里，这些变量是函数的隐藏状态。
   */
}