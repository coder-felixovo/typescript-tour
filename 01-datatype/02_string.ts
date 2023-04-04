/*
  Demo about TS type `string`.
  Single quotes, double quotes and template strings are all allowed.
*/
namespace stringTypeDemo {
  let year: string = '2023'
  let ChineseZodiac: string = "Rabbit"
  let sentence: string = `This year is ${year} year, the Year of the ${ChineseZodiac}.`
  console.log(sentence)
  // This year is 2023 year, the Year of the Rabbit.
}