const arr = [0, 1, 2, 3, 4, 5]

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

Array.prototype.map2 = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result
}

Array.prototype.filter2 = function (callback) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        const value = callback(this[i], i, this)
        if (value)
            result.push(value)
    }
    return result
}

Array.prototype.reduce2 = function (callback, init) {
    for (let i = 0; i < this.length; i++) {
        init = callback(init, this[i], i, this)
    }
    return init
}

Array.prototype.find2 = function (callback) {
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this))
            return this[i]
    }
    return undefined
}