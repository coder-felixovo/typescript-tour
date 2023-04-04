/*
  Demo about type `any`
*/
namespace anyTypeDemo {
  let notSure: any = 'notSure'
  console.log('1', notSure)
  notSure = false
  console.log('2', notSure)
  let list: any[] = [1, true, 'string']
  console.log(list)
}