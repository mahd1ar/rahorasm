export function timeout(ms:number) : Promise<void> {
    return new Promise(res => {
        setTimeout(() => {
           res()
       }, ms);
    })
}

export function remove<T>(items: Array<T>, fn: (n: T) => boolean) {
    for (let i = items.length - 1; i > -1; i--) {
        if (fn(items[i])) {
            items.splice(i, 1)
        }
    }
}

export function stripHTML(str: string) {
    return str.replace(/(<([^>]+)>)/gi, '');
}

export function HtmlToExcerpt(str: string) {
    return stripHTML(str).substring(0, 100)
}

export function isValidNationalCode(code: string) {
    if (code.length !== 10 || /(\d)(\1){9}/.test(code)) return false;

    let sum = 0,
        chars = code.split(''),
        lastDigit,
        remainder;

    for (let i = 0; i < 9; i++) sum += +chars[i] * (10 - i);

    remainder = sum % 11;
    lastDigit = remainder < 2 ? remainder : 11 - remainder;

    return +chars[9] === lastDigit;
};