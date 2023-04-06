namespace functionDemo03 {
  /* 
    示例：
    1. x和y没有类型，但是TS会自动识别出类型。
    2. “按上下文归类”，是类型推论的一种。
  */
  let add: (baseValue: number, increment: number) => number =
    function (x, y): number { return x + y }
  console.log(add(50, 50)) // 100
}