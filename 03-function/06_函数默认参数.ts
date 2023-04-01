/* 
  在TS中，可以为参数提供一个默认值，当没有传递参数或传递的值是undefined。
  在所有必须参数后带默认值的参数是可选的，调用函数时可以省略。
  但是，如果带默认值的参数放在必须参数前面，调用函数时需传入undefined来获取默认值。
 */
{
  function createRole(name: string, age: number, animation = '罪恶王冠') {
    return {
      name,
      age,
      animation
    }
  }
  const shuu = createRole('樱满集', 17)
  console.log(shuu)
  // { name: '樱满集', age: 17, animation: '罪恶王冠' }
}