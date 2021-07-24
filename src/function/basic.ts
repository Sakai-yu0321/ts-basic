//アロー関数
export const logMessage = (message: string): void => {
  console.log('Function basic sample 1',message);
}

//名前付き関数
export function logMessage2(message: string): void {
  console.log('Function basic sample 2',message);
}

//関数式
export const logMessage3 = function(message: string): void {
  console.log('Function basic sample 3',message);
}

//アロー関数の省略記法
export const logMessage4 = (message: string): void => console.log('Function basic sample 4', message)

//never型を返すアロー関数
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

//呼び出しシグネチャ→どのような関数なのかを表現する型定義
//関数名、引数の数、データ型、戻り値の型
//これらを組み合わせたものをプログラミングの世界ではシグネチャと呼ぶ

//呼び出しシグネチャ（省略記法）
//string型のmessageをパラメーターとして受け取り、返り値はvoid型だよ
type LogMessage = (message: string) => void

export const logMessage6: LogMessage = (message) => {
  console.log('Function basic sample 6',message);
}

//完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}

export const logMessage7: FullLogMessage = (message) => {
  console.log('Function basic sample 7',message);
}

//呼び出しシグネチャはreactで子供のコンポーネントに関数をpropsで渡したい時などによく使用する
//アノテーションをまとめておくことで、いちいちパラメーターや戻り値に対して型を指定する必要がなくなる。
