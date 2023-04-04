/* 
  Demo about type `enum`
*/
namespace enumTypeDemo1 {
  enum Color { Red, Green, Blue }
  // The initial value defaults to 0.
  let red: Color = Color.Red
  console.log(red) // 0
  let colorName: string = Color[2]
  console.log(colorName) // "Blue"
}

namespace enumTypeDemo2 {
  // Set initial value
  enum Color { Red = 10, Green, Blue }
  let red = Color.Red
  console.log(red) // 10
  console.log(Color.Green) // 11
}

namespace enumTypeDemo3 {
  enum Season {
    spring = "春天",
    summer = "夏天",
    autumn = "秋天",
    winter = "冬天"
  }
  let spring: Season = Season.spring
  console.log(spring) // "春天"
}

namespace enumTypeDemo4 {
  // Constant enumeration
  const enum Color { RED, PINK, BLUE }
  const color: Color[] = [Color.RED, Color.PINK, Color.BLUE]
  console.log(color) // [0, 1, 2]
}