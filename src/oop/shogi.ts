import { getSystemErrorMap } from "util"

type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  //パラメーターに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)), // 段(縦の距離)は正負反転
      }
    }
  }
}
// new Position(1, '2')

//駒を表す抽象クラス
abstract class Piece {
  //Positionクラスと同じ型をもつpositionと言うプロパティ
  //Pieceクラスとサブクラスでアクセスできる
  protected position: Position

  //Pieceクラスのインスタンスを生成する際の設定を記述
  constructor(
    //先手の駒なのか後手の駒なのかと言う情報をもつplayerプロパティ
    private readonly player: Player,
    //駒が現在どこの場所にいるのか
    suji: Suji,
    dan: Dan
  ) {
    //Positionクラスを初期化した際に現在の駒の位置の情報がpositionプロパティに代入される
    this.position = new Position(suji, dan)
  }

  //駒の移動を表すメソッドの定義
  moveTo(position: Position) {
    this.position = position
  }

  //移動できるかどうかを判断する抽象メソッド
  //具体的な実装はこのクラスを継承したクラスで行う。
  abstract canMoveTo(position: Position, player: Player): boolean
}

//抽象クラスのインスタンスを作ることはできない
// new Piece('first', 1, '1')

class Osho extends Piece {
  //王将のcanMoveToメソッドを具体的に実装
  canMoveTo(position: Position, player: Player): boolean{
    //現在のポジションと移動先のポジションの差分をdistanceに代入する
    const distance = this.position.distanceFrom(position, player)
    //移動する範囲が2未満ならtrueを返す（王将のルールと同じ）
    return (distance.suji < 2 && distance.dan < 2)
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new Osho('first', 5, '1'),
      new Osho('second', 5, '9')
    ]
  }
}