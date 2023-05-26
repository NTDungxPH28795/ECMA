import footer from "../components/footer"
import header from "../components/header"
import intro from "../pages/intro"


function home() {
    return `
        ${header}
        ${intro}
        ${footer}
    `
}

export default home
