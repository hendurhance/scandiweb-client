const decimalToWholeNumber = (decimal: number|null): number|null => {
    if (decimal === null) {
        return null;
    }
    return Math.round(decimal);
}

export default decimalToWholeNumber;