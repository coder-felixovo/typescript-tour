/* 
  enum 枚举
*/
{
  enum Color { Red, Green, Blue }
  // 初始值默认为0，其余成员按顺序增长
  let red: Color = Color.Red
  console.log(red) // 0
  let colorName: string = Color[2]
  console.log(colorName) // "Blue"
}

{
  // 设置初始值
  enum Color { Red = 10, Green, Blue }
  let red = Color.Red
  console.log(red) // 10
  console.log(Color.Green) // 11
}

{
  enum Season {
    spring = "春天",
    summer = "夏天",
    autumn = "秋天",
    winter = "冬天"
  }
  let spring: Season = Season.spring
  console.log(spring) // "春天"
}

{
  // 常量枚举
  const enum Color { RED, PINK, BLUE }
  const color: Color[] = [Color.RED, Color.PINK, Color.BLUE]
  console.log(color) // [0, 1, 2]
}