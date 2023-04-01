/*
  void
  当一个函数没有返回值时，将其返回值类型设为void
*/
{
  function warn(): void {
    console.log('This is warning message')
  }
  // 声明一个void类型的变量没有什么作用，因为只能为它赋予undefined和null
  let useless: void = undefined
  // 需要在strictNullChecks为false时，才能为void类型赋值null
  // let futile: void = null
}