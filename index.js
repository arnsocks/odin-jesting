export function capitalize(x) {
    const i = x[0].toUpperCase()
    if (x.length === 1) return i
    return i + x.slice(1)
}

