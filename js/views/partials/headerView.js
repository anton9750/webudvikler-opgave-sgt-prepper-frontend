import { Heading } from "../components/atoms/index.js"

const renderHeader = () => {
    const header = document.querySelector('#header')
    const h1 = Heading(1, 'Sgt. Prepper', 'text-2xl font-bold')
    header.append(h1)
}

export default renderHeader