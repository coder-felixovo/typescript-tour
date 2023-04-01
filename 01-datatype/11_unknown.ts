/* 
  unknown
  只能被赋值给any类型和本身
*/
{
  let value: unknown
  // 以下都允许
  value = 3.14
  value = 'Hello TypeScript'
  value = []
  value = {}
  let v1: unknown = value
  let v2: any = value
  // 以下都不允许
  let v3: number = value // error
  let v4: boolean = value
  let v5: string = value
  let v6: object = value
}