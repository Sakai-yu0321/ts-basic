export default function primitiveSample() {
  let name: string = 'ゆう'
  // name = 123
  //typeofでその変数の型を出力することができる
  console.log("primitive sample 1:", typeof name, name);

  let age: number = 18
  // age = '28'
  console.log("primitive sample2:", typeof age, age);

  let isUnder20: boolean = true
  // isUnder20 = 'foo'
  console.log("primitive sample3:", typeof isUnder20, isUnder20);

  let isUnder22: boolean = age <= 22
  console.log("primitive sample4:", typeof isUnder22, isUnder22);
}