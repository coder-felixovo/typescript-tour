/* 
  下面的示例中，x和y没有类型，但是TS会自动识别出类型，
  这叫做“按上下文归类”，是类型推论的一种。
 */
{
  let add: (baseValue: number, increment: number) => number =
    function (x, y): number { return x + y }
}