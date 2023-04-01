// 在TS里，类中的成员默认为public，或者明确标记为public。
{
  class Animal {
    public name: string
    public constructor(theName: string) { this.name = theName }
    public move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}`)
    }
  }
}