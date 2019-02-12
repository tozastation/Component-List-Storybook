interface ISale {
    month: string,
    sale: number,
    totalSale: number
}

export default interface ISales {
    sales: ISale[]
}
