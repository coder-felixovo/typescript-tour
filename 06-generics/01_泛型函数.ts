/* 
  泛型函数
  可以使返回值的类型与传入参数的类型相同，使用类型变量T，只用于表示类型而不是值。
 */
{
  // 定义一个泛型函数
  function identity<T>(arg: T): T {
    return arg
  }
  let mitsuha = identity<string>('宫水三叶')
  // 利用类型推论，编译器会根据传入的参数自动确定T类型
  let taki = identity('立花泷')
  console.log(typeof mitsuha, typeof taki)
  // 如果编译器不能够自动地推断出类型的话，只能像上面那样明确传入T的类型，在一些复杂的情况下，这是可能出现的。
}