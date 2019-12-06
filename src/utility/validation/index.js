export  const required = value => {
    if (value) return undefined;
    return "OOpss... Field is required"
}


export const maxLength = (lengthNumber) => (value) => {
    if (value && value.length > lengthNumber) return "Max length is" + lengthNumber + "sumbols";
    return undefined
}