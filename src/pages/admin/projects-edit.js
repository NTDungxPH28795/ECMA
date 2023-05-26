import axios from "axios";
import { updateProject, getProject } from "../../api/project";
import { useEffect, router, useState } from "../../lib";
// import { projects } from "../../data";

const AdminProjectsEdit = ({ id }) => {

    const [project, setProject] = useState({});

    useEffect(() => {
        (async () => {
            try {
                setProject(await getProject(id))
            } catch (error) {
                console.log(error);
            }
        })()

        axios.get(`http://localhost:3000/projects/${id}`)
            .then(({ data }) => {
                setProject(data)
            })
    }, [])

    useEffect(() => {
        const form = document.querySelector("#form-edit")
        const NameProject = document.querySelector("#nameForm");
        const Developer = document.querySelector("#Developer")
        const Link = document.querySelector("#linkForm")
        const BackUp = document.querySelector("#backUplink")
        const Date = document.querySelector("#date")
        const Content = document.querySelector("#textForm")



        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            try {
                await updateProject({
                    id: id,
                    nameProject: NameProject.value,
                    content: Content.value, // mô tả 
                    developer: Developer.value,
                    deadline: Date.value,
                    link: Link.value,
                    backupLink: BackUp.value,
                });
                router.navigate('/admin/')
            } catch (error) {
                console.log(error);
            }
        });

    })

    return `<div class="container p-2 w-50">
    <form id="form-edit">
    <h3 class="text-center bg-color-main text-white rounded p-2">ADD PROJECT</h3>
    <div class="row mb-3">
        <div class="col-md-6 col-sm-12 form-group">
            <label for="exampleInputEmail1">Name Project</label>
            <input type="text" class="form-control" id="nameForm" aria-describedby="namelHelp"
                placeholder="Project Tree 🥬" value="${project.nameProject}">
            <small id="nameHelp" class="form-text text-muted">You can choose the right name for your
                website</small>
        </div>
        <div class="col-md-6 col-sm-12 form-group">
            <label for="exampleInputPassword1">Developer</label>
            <input type="text" class="form-control" id="Developer" placeholder="#laxus.."value="${project.developer}">
            <small id="developerHelp" class="form-text text-muted">Who created this website?</small>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-md-6 col-sm-12 mb-3 form-group">
            <label for="exampleInputPassword1">Link </label>
            <input type="text" class="form-control" id="linkForm" placeholder="laxus66.vercel.app/" value="${project.link}">
            <small id="linkHelp" class="form-text text-muted">Link this website?</small>
        </div>
        <div class="col-md-6 col-sm-12 form-group">
            <label for="exampleInputPassword1">Backup Link</label>
            <input type="text" class="form-control" id="backUplink"
                placeholder="https://github.com/Laxus66" value="${project.backupLink}">
        </div>
    </div>
    <div class="mb-3 form-group">
        <label for="exampleInputPassword1">Date</label>
        <input type="date" class="form-control" id="date" value="${project.deadline}">
    </div>
    <div class="form-group mb-4">
        <label for="exampleFormControlFile1">Example file input</label>
        <input type="file" class="form-control-file" id="imgForm">
    </div>
    <label for="exampleFormControlFile1" class="">Status</label>
    <div class="row p-3">
        <div class="form-check col-md-4">
            <input class="form-check-input bg-primary" type="radio" name="exampleRadios" id="exampleRadios1"
                value="Idea" checked>
            <label class="form-check-label" for="defaultCheck1">
                Idea
            </label>
        </div>
        <div class="form-check col-md-4">
            <input class="form-check-input bg-warning" type="radio" name="exampleRadios" id="exampleRadios1"
                value="Pending" checked>
            <label class="form-check-label" for="defaultCheck1">
                Pending
            </label>
        </div>
        <div class="form-check col-md-4">
            <input class="form-check-input bg-success" type="radio" name="exampleRadios" id="exampleRadios1"
                value="Complete" checked>
            <label class="form-check-label" for="defaultCheck1">
                Complete
            </label>
        </div>
    </div>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="textForm" rows="3" value="${project.content}"></textarea>
        <small id="emailHelp" class="form-text text-muted">What is your website about?</small>
    </div>

    <button type="submit" class="btn btn-primary">Update</button>
</form>
</div>
    `;
}

export default AdminProjectsEdit