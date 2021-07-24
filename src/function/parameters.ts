//オプションパラメーターとデフォルトパラメーター

//オプションパラメーターを持つ関数
export const isUserSignedIn = (useId: string, userName?: string): boolean => {
  if (useId === 'ABC') {
    console.log('Function parameters sample 1: User sighed in! user name is', userName);
    return true
  } else {
    console.log('Function parameters sample 2: User is not signed in', userName);
    return false
  }
}

//デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (useId: string, userName: string = "noName"): boolean => {
  if (useId === 'ABC') {
    console.log('Function parameters sample 3: User sighed in! user name is', userName);
    return true
  } else {
    console.log('Function parameters sample 4: User is not signed in', userName);
    return false
  }
}

//レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}
