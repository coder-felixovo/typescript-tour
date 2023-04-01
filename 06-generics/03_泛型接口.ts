{
  interface GenericIdentityFn {
    <T>(arg: T): T
  }
  function identity<T>(arg: T): T {
    return arg
  }
  let myIdentity: GenericIdentityFn = identity
}

/* 
  下面这个例子，将泛型参数当作整个接口的一个参数
  不再描述泛型函数，而是把非泛型函数签名作为泛型类型的一部分，
  传入一个类型参数来指定泛型类型，锁定了之后代码里的使用类型。
 */
{
  interface GenericIdentityFn<T> {
    (arg: T): T
  }
  function identity<T>(arg: T): T {
    return arg
  }
  let myIdentity: GenericIdentityFn<number> = identity
}

// 除了泛型接口，还可以创建泛型类，但是不能创建泛型枚举和泛型命名空间