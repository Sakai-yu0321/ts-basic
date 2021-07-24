export default function notExistSample() {
  let name = null
  console.log("notExist sample1:", typeof name, name);
  //出力結果「notExist sample4: object null」
  //nullはtypeofで型を出力するとobject型であると推論される

  name = 'yu'
  //nameがnullでないとき
  if (!name) {
    console.log("notExist sample2:", "吾輩は猫である。名前はまだ"+null);
  } else {
    console.log("notExist sample3:", "吾輩は猫である。名前は"+name);
  }

  let age = undefined
  console.log("notExist sample4:", typeof age, age);
  //出力結果 「notExist sample4: undefined undefined」
  //undefinedはtypeofで型を出力するとundefined型であると推論される
  age = 18
  if (!age) {
    console.log("notExist sample5:", "年齢は秘密です");
  } else {
    console.log("notExist sample6:", "年齢は"+ age + "です");
  }
}