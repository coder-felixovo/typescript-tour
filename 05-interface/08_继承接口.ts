// 接口也可以相互继承，能够从一个接口复制成员到另一个接口，可以更灵活地将接口分割到可重用的模块
{
  interface Shape {
    color: string
  }
  interface PenStroke {
    penWidth: number
  }
  // 一个接口可以继承多个接口
  interface Square extends Shape, PenStroke {
    sideLength: number
  }
  let square = <Square>{}
  square.color = 'blue'
  square.sideLength = 10
  square.penWidth = 2.0
  console.log(square)
}