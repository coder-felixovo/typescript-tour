{
  // 可索引类型：具有一个索引签名，它描述了对象索引的类型，还有相应索引返回值的类型
  interface FruitArray {
    [index: number]: string
  }
  let fruitList: FruitArray
  fruitList = ['apple', 'banana']
  let fruitName: string = fruitList[0]
  console.log(fruitName) // apple
  // TS支持两种索引签名：字符串和数字，二者可以同时使用，但数字索引的返回值必须是字符串索引返回值类型的子类型
  interface NumberDictionary {
    [index: string]: number
    length: number
    // name: string // 与索引返回值类型不匹配
  }
  // 将索引签名设置为只读，防止对索引进行赋值
  interface ReadOnlyIndexArray {
    readonly [index: number]: string
  }
  const animal: ReadOnlyIndexArray = ['Cat', 'Dog']
  // animal[0] = 'Lion' // 因为索引签名被设置为只读
  console.log(animal[0])
}
