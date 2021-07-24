export default function tupleSample() {
  // 一般的なタプルの型定義
  let response: [number, string] = [200, "ok"]
  // 要素数が多いのはダメ
  // response = [400, "Bad Request", "Email parameter is missing"]
  // 型の種類が違うのでだめ
  // response = ["400", "Bad Request"]

  console.log("Array tuple sample1:", response);

  //可変超引数を使ったタプル
  const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"]
  girlfriends.push("Misa")

  console.log("Array tuple sample2:", girlfriends);
}
