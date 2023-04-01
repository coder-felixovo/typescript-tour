// TS能用接口强制一个类符合某种契约
// 接口描述了类的公共部分，不会检查类的私有成员
{
  interface ClockInterface {
    currentTime: Date
    setTime(d: Date): void
  }
  class Clock implements ClockInterface {
    currentTime: Date
    setTime(d: Date) {
      this.currentTime = d
    }
		
    constructor(h: number, m: number) { }
  }
}

// 类的静态部分和实例部分
{
  interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
  }
  interface ClockInterface {
    tick(): void
  }
  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
  }
  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick(): void {
      console.log('beep beep')
    }
  }
  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick(): void {
      console.log('tick tick')
    }
  }
  let digital = createClock(DigitalClock, 12, 17)
  let analog = createClock(AnalogClock, 7, 32)
}