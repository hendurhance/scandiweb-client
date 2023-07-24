const decimalToWholeNumber = (decimal: number): number => {
    return Math.round(decimal * 100) / 100;
}

export default decimalToWholeNumber;