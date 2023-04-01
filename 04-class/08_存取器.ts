/* 
  TS支持通过getters/setters来截取对对象成员的访问。
  存取器使用注意：
    1. 编译器需要设置输出ES5或更高
    2. 只有get没有set的存取器自动推断为readonly
 */
{
  let pwd = '123456'
  class User {
    private name: string

    get getName(): string {
      return this.name
    }

    set setName(newName: string) {
      if (pwd === '123456') {
        this.name = newName
      } else {
        console.log('Error: Wrong password.')
      }
    }
  }
  let user = new User()
  // 可以修改pwd的值后在运行，密码不对就无法修改
  user.setName = 'Felix'
  console.log(user.getName)
}