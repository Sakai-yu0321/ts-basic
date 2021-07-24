export default function objectSample() {
  //オブジェクト型でオブジェクトを定義
  const a: object = {
    name: 'Yu',
    age: 18
  }
  // a.name //nameというプロパティが見つかりません
  
  //オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: "japanese",
    name: "japan",
  }

  console.log("Object object sample 1", country);
  
  country = {
    language: "English",
    name: "United States of America"
  }

  console.log("Object object sample 2", country);

  //オプショナルとreadonly
  let Yu: {
    age: number
    lastName: string
    //上書きできませんよ（readonly）
    readonly firstName: string
    //あってもなくてもokですよ（オプショナル）
    gender?: string
  } = {
    age: 18,
    lastName: "sakai",
    firstName: "yu",

  }

  //後から追加できる
  Yu.gender = 'mail'
  //上書きできる
  Yu.lastName = 'kamado'
  //上書き不可
  // Yu.firstName = 'tangiro'

  console.log("Object object sample 3", Yu );

  //インデックスシグネチャ
  const capitals: {
    //オブジェクトが複数のプロパティを持つ可能性を示す
    //[key: T]: Uのように定義する
    //keyはstringかnumberのみ
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul'
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'
  console.log("Object object sample 4", capitals);
}