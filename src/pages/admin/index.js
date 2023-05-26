// import { formToJSON } from "axios"
import { Projects, user } from "../../../db.json"
import { getProjects, deleteProject } from "../../api/project"
import { useEffect, useState } from "../../lib/"
const admin = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setData(await getProjects());
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove")
        // console.log(btns);
        for (let btn of btns) {
            btn.addEventListener("click", async function () {

                const id = this.dataset.id;
                // console.log(id);
                const confirm = window.confirm('Bạn có chắc chắn muốn xóa hay không?');
                if (confirm) {
                    try {
                        await deleteProject(id);
                        const newProject = data.filter((project) => project.id !== +id);
                        setData(newProject)
                    } catch {
                        console.log(error);
                    }
                }
            })
        }
    })

    return `<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary"> <!-- Vertical Navbar -->
    <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
        id="navbarVertical">
        <div class="container-fluid">
            <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse"
                data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- User menu (mobile) -->
            <div class="navbar-user d-lg-none"> <!-- Dropdown -->
                <div class="dropdown">
                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <div class="avatar-parent-child">
                            <img alt="Image Placeholder"
                                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                class="avatar avatar- rounded-circle">
                            <span class="avatar-child avatar-badge bg-success"></span>
                        </div>
                    </a> <!-- Menu -->
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                        <a href="#" class="dropdown-item">Profile</a>
                        <a href="#" class="dropdown-item">Settings</a>
                        <a href="#" class="dropdown-item">Billing</a>
                        <hr class="dropdown-divider">
                        <a href="#" class="dropdown-item">Logout</a>
                    </div>
                </div>
            </div> <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidebarCollapse"> <!-- Navigation -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            <i class="bi bi-house"></i>Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/projects">
                            <i class="bi bi-bar-chart"></i>Projects
                            <span
                                class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">${Projects.length}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-people"></i> Users
                        </a>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-person-square"></i> Account
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            <i class="bi bi-box-arrow-left"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> <!-- Main content -->
    <div class="h-screen flex-grow-1 overflow-y-lg-auto"> <!-- Header -->
        <main class="py-6 bg-surface-secondary">
            <div class="container-fluid"> <!-- Card stats -->
                <div class="card shadow border-0 mb-7">
                    <div class="row card-header">
                        <h5 class="mb-0 col-6">Hello ${user[0].name}</h5>
                        <a class="justify-content-end d-flex col-6" href="/admin/add">
                            <button class="justify-content-end btn btn-dark">ADD</button>
                        </a>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover table-nowrap">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Developer</th>
                                    <th scope="col">Dealine</th>
                                    <th scope="col">Name of project</th>
                                    <th scope="col">Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            ${data.map((project, index) => {
        return `<tr>
                                <td>${index + 1}</td>
                                <td>
                                    <img alt="..."
                                        src="https://img.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg?w=740&t=st=1676835282~exp=1676835882~hmac=c365022593936e8cd8c2774191f1e5ff5abf80105a9f6885d709922d6e1bd6d1"
                                        class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="${project.info}">${project.developer}</a>
                                </td>
                                <td>${project.deadline}</td>
                                <td>
                                    <img alt="..."
                                        src="https://preview.webpixels.io/web/img/other/logos/logo-1.png"
                                        class="avatar avatar-xs rounded-circle me-2">
                                    <a lass="text-heading font-semibold" href="${project.link}">${project.nameProject}</a>
                                <td>
                                    <span class="badge badge-lg badge-dot">
                                        <i class="bg-success"></i>${project.status}
                                    </span>
                                </td>
                                <td class="text-end">
                                    <a href="/admin/${project.id}/edit" class="btn btn-sm btn-neutral">Edit</a>
                                    <button type="button" data-id="${project.id}"
                                        class="btn btn-remove btn-sm btn-square btn-neutral text-danger-hover">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>`
    }).join("")}
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer border-0 py-5">
                        <span class="text-muted text-sm">Showing ${Projects.length} results found</span>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
<style>
    @import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);
    @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
</style>
  `
}

export default admin
