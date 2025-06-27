import { header } from '../dom.js'
import { Header } from './components/Header.js'

export const renderHeader = () => {
    header.innerHTML = Header()
}