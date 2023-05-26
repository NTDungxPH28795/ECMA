import header from "../components/header"
import ProductList from "../components/ProductList"
import { Projects } from "../../db.json"
const projects = () => {
    return `
    ${header}
    <div class="container mt-5">
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <h3 class="font-weight-bold project color-main">Project</h3>
                        <span class="text-black-50 totals">${Projects.length} Total</span>
                    </div>
                    <button class="btn project-more bg-color-main tra-05s text-white">More</button>
                </div>
                <div class="mt-3 d-flex justify-content-between align-items-center">
                    <div class="row">
                        <input class="col-9 form-controls w-100" placeholder="🔍 Search project..">
                        <!-- <span class="col-3 search"><i class="fa fa-search"></i></span> -->
                    </div>
                    <div class="px-2">
                        <span>Filters <i class="fa fa-angle-down"></i></span>
                        <i class="fa fa-ellipsis-h ms-3"></i>
                    </div>
                </div>
            ${ProductList()}
        </div>`
}

export default projects
