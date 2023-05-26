import { menus } from "../data"
const nav = () => {
    return `
    ${menus.map(menu => `
    <li class="nav-item">
        <a class="nav-link text-uppercase" href="${menu.link}">${menu.name}</a>
    </li>`).join("")}
  `
}

export default nav
