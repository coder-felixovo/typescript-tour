/* 
  在TS中，可以把所有参数收集到一个变量里。
  剩余参数会被当作个数不限的可选参数。
 */
{
  function createRole(name: string, ...prop: string[]) {
    return {
      name,
      prop
    }
  }
  const Doraemon = createRole('哆啦A梦', '时光机', '任意门', '竹蜻蜓')
  console.log(Doraemon)
  // { name: '哆啦A梦', prop: [ '时光机', '任意门', '竹蜻蜓' ] }
}