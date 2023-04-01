/* 
  当接口继承了一个类类型时，它会继承类的成员但不包括其实现，
  接口同样会继承到类的private和protected成员，
  这意味着，当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
  这个接口类型只能被这个类或其子类实现。

  当继承结构很庞大时很有用，但是只在子类拥有特定属性时起作用，
  这个子类除了继承至基类外，与基类没有任何关系
*/
{
  class Control {
    private state: any
  }
  // SelectableControl 包含了 Control 类的所有成员
  interface SelectableControl extends Control {
    select(): void
  }
  // 由于state是私有成员，因此只能是Control的子类才能实现SelectableControl接口
  // 因为只有Control的子类才能够拥有私有成员state
  class Button extends Control implements SelectableControl {
    select() { }
  }
  // Button和TextBox也是SelectableControl的子类，因为它们都继承自Control并由select方法
  class TextBox extends Control {
    select() { }
  }

  // Image类 缺少 state属性
  // class Image implements SelectableControl {
  //   select() {}
  // }

  class Location { }
}