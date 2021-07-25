//interfaceの拡張
interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard'
}


//型エイリアス(type alias)で表現
type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice //交差型(intersection型)

const maboDon: MaboDon =  {
  calories: 500,
  spicyLevel: 10,
  gram: 350
}


//インターフェースの継承
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly'
}

//typeAliasを継承してインターフェースを作成

type Booktype = {
  page: number
  title: string
}

interface Handbook extends Booktype {
  theme: string
}

const cotrip: Handbook = {
  page: 120,
  title: '旅行',
  theme: '旅行'
}

//implementsを使ってclassに型を定義する
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + "が発売されたのは" + this.publishYear + "年です"
  }
}

const popularComic = new Comic(200, '鬼滅の刃', '2016')
console.log(popularComic.getPublishYear());

//typeAliasは型に名前をつけるために使用
//interfaceはオブジェクトやクラス、関数の構造を定義するために使用

//同名のtypeを定義するとエラーが出る
//拡張しにくい
//継承はできないがintersection(交差型)で新しい型エイリアスを作ることができる
//主にアプリ開発で使用(意図しない拡張が起きることを防ぐ為)

// type TestType = {
//   test: string
//   type: number
// }

// type TestType = {

// }

//同名のinterfaceを宣言すると宣言がマージされる
//拡張できるのでバグを生む可能性
//extendsによる継承ができる
//主にライブラリ開発で使用(不特定多数が使用するので拡張性がある方がいい)
interface TestType2 {
  test: string
  type: number
}

interface TestType2 {
  
}
