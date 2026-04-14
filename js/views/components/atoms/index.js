// Paragraph Atom
export const Paragraph = (className = '') => {
    const element = document.createElement('p')
    element.className = className
    return element
}

// Heading Atom
export const Heading = (num, text, className = '') => {
    const element = document.createElement(`h${num}`)
    element.className = className
    element.innerText = text
    return element
}