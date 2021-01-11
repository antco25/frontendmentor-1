export function isBlank(value : string) {
    return (!value || /^\s*$/.test(value));
}

export function isEmail(email: string) {
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
}