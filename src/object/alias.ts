export default function typeAliasSample() {
  //型エイリアス
  //・typeを使って、型に名前をつけて宣言できる
  //・同じ型を何度も定義する必要がない
  //・型に名前をつけることで変数の役割を明確化

  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan'
  }

  console.log("Object alias sample 1:", japan);

  const america: Country = {
    capital: 'Washington D.C.',
    language: 'English',
    name: 'United States of America'
  }

  console.log("Object alias sample 2:", america);

  //合併型(union)と交差型(intersection)

  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  //合併型(union)...KnightまたはWizardの型を持ちますよ
  type Adventure = Knight | Wizard

  //交差型(intersection)...KnightとWizard両方の型を持つ
  type Paladin = Knight & Wizard

  //Knightに成長していきたい冒険者(合併型)
  const adventure1: Adventure = {
    hp: 100,
    sp: 30,
    // Wizardのキーも持ててしまうので注意
    // mp: 100,
    weapon: '木の剣',
    swordSkill: '三連切り'
  }

  //Wizardに成長していきたい冒険者（合併型）
  const adventure2: Adventure = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイアボール'
  }

  console.log("Object alias sample 3:", adventure1);
  console.log("Object alias sample 4:", adventure2);

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連切り',
    magicSkill: 'ファイアボール'
  }

  console.log("Object alias sample 5:", paladin);
}