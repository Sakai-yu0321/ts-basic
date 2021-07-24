export default function anySample() {
  let name: any = 'Yu' //string型が代入されている
  console.log("any sample1:", typeof name, name);

  name = 28
  console.log("any sample2:", typeof name, name);
}

//unknown型を使う場面→帰ってくる値がどんな型なのががわからない時。
//APIを投げて帰ってくるのが、string型なのかnumber型なのか、object型なのかそれとも配列型なのか...
//一旦unknown型にしておいて、型によって処理を振り分けるようにして使う。