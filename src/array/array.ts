export default function arraySample() {
  //シンプルな配列の型定義
  const colors: string[] = ["red", "blue"]
  colors.push("yellow")
  // colors.push(1) //数値は追加できない
  console.log("Array array sample1:", colors);

  //違う方法の配列の型定義
  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push('a') //文字列は追加できない
  console.log("Array array sample2:", colors);

  //合併型(union)の配列の型定義
  const ids: (string | number)[] = ["ABC", 123]
  ids.push("DEF")
  ids.push(456)
  // ids.push(true) //boolean型は追加できない
  console.log("Array array sample3:", ids);


  //配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]
    _someArray.push("ABC") // (number | string)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true) // boolean型はだめ
  console.log("Array array sample4:", someArray);



  //readonlyを用いてイミュータブル(書き換え不可能)な配列を作る
  const commands: readonly string[] = ["git add", "git commit", "git push"]
  // commands.push() //pushメソッドが使えない
  // commands[2] = "git pull" //書き換えようとしてもエラーが出る
  console.log("Array array sample5:", commands);
}

