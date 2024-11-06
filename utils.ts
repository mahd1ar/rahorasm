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