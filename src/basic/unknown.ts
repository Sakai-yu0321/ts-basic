export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log("unknown sample1:", typeof maybeNumber, maybeNumber);
  //出力結果「unknown sample1: number 10」number型であると推論される

  const isFoo = maybeNumber === "foo"
  console.log("unknown sample2:", typeof isFoo, isFoo);
  //出力結果 「unknown sample2: boolean false」

  // const sum = maybeNumber + 10 //エラー unknown型の変数にnumber型の値を足すことができない

  //もしmaybeNumberの型がnumber型であれば処理を実行するよ
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log("unknown sample3:", typeof sum, sum);
    //出力結果 「unknown sample3: number 20」これならいける
  }
}

//unknown型を使う場面→帰ってくる値がどんな型なのががわからない時。
//APIを投げて帰ってくるのが、string型なのかnumber型なのか、object型なのかそれとも配列型なのか...
//一旦unknown型にしておいて、型によって処理を振り分けるようにして使う。