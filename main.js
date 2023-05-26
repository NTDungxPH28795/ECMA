
import "./node_modules/bootstrap/dist/css/bootstrap.css"
import "./node_modules/bootstrap/dist/js/bootstrap.js"
const app = document.querySelector("#app")
import { router, render } from "./src/lib"
import about from "./src/pages/about"
import contact from "./src/pages/contact"
import home from "./src/pages/home"
import notFound from "./src/pages/notFound"
import projects from "./src/pages/Projects"
import work from "./src/pages/work"
import login from "./src/pages/login"
import admin from "./src/pages/admin"
import AdminProjectsAdd from "./src/pages/admin/project-add"
import AdminProjectsEdit from "./src/pages/admin/projects-edit"

router.on("/", () => render(home, app))
router.on("/about", () => render(about, app))
router.on("/contact", () => render(contact, app))
router.on("/work", () => render(work, app))
router.on("/projects", () => render(projects, app))
router.on("/signin", () => render(login, app))
router.notFound(() => render(notFound, app))
router.on("/admin", () => render(admin, app))
router.on("admin/add", () => render(AdminProjectsAdd, app))
router.on("/admin/:id/edit", ({ data }) => render(() => AdminProjectsEdit(data), app))

router.resolve();