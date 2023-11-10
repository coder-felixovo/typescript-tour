// TS提供了public、protected、private修饰符限制类中属性和方法的可见性
class User {
  private username: string; // private 只能在当前类中访问属性和方法
  public nickname?: string; // public 默认值，允许在任何位置访问属性和方法
  protected level?: number; // protected 限制在当前类和其子类中访问属性和方法

  constructor(username: string) {
    this.username = username
  }

  getUsername(): string {
    return this.username
  }
}

const u1 = new User("1")
console.log(u1.getUsername())
// "1"
// u1.username

const u2 = new User("2")
u2.nickname = "foo"
console.log(u2)
// User { username: '2', nickname: 'foo' }

class VipUser extends User {
  setLevel(level: number) {
    super.level = level
  }

  getLevel(): number {
    return this.level || 0
  }
}

const u3 = new User("3")
// u3.level

const u4 = new VipUser("4")
u4.setLevel(3)
console.log(u4.getLevel())
// 3
