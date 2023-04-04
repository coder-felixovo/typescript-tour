/* 
  Demo about type `unknown`
*/
namespace unknownTypeDemo {
  let value: unknown

  // The following is allowed
  value = 3.14
  value = 'Hello TypeScript'
  value = []
  value = {}
  let v1: unknown = value
  let v2: any = value

  // The following is not allowed
  let v3: number = value
  let v4: boolean = value
  let v5: string = value
  let v6: object = value
}