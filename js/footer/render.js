import { footer } from "../dom.js"
import { Footer } from "./components/Footer.js"

export const renderFooter = () => {
    footer.innerHTML = Footer();
}

