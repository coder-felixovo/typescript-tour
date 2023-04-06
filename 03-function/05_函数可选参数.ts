namespace functionDemo05 {
  /* 
    1. 在函数参数名后加?表示可选参数。
    2. 可选参数必须跟在必填参数后面。
  */
  function createRole(name: string, age: number, animation?: string) {
    return {
      name,
      age,
      animation
    }
  }
  const inori = createRole('楪祈', 16)
  console.log(inori)
  // { name: '楪祈', age: 16, animation: undefined }
}