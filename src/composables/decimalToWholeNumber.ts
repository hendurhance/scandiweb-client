const decimalToWholeNumber = (decimal: number|undefined): number => {
    if (decimal) {
        return Math.round(decimal * 100);
    }
    return 0;
}

export default decimalToWholeNumber;