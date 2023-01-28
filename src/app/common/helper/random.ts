
// Returns a random integer from 0 to 1000:
export const randomNumber = (total: number) => {
    return Math.floor(Math.random() * total);
}

export const getRandomData = (array: Array<any>) => {
    return array[randomNumber(array.length)]
}