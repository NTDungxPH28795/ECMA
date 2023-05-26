import axios from "axios";
import { useEffect, router } from "../../lib";
import { addProjects } from "../../api/project"
//import { projects } from "../../data";

const AdminProjectsAdd = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add")
        const NameProject = document.querySelector("#nameForm");
        const Developer = document.querySelector("#Developer")
        const Link = document.querySelector("#linkForm")
        const backUp = document.querySelector("#backUplink")
        const Date = document.querySelector("#date")
        const content = document.querySelector("#textForm")
        // (() => {
        //     const technology = document.getElementsByName("exampleRadios")
        //     const statuS = []
        //     for (let i = 0; i < technology.length; i++) {
        //         if (technology[i].checked) {
        //             statuS = technology[i].value;
        //         }
        //     }
        //     return statuS
        // })()


        form.addEventListener("submit", function (e) {
            e.preventDefault();

            addProjects({
                nameProject: NameProject.value,
                content: content.value, // mô tả 
                developer: Developer.value,
                deadline: Date.value,
                link: Link.value,
                backupLink: backUp.value,
                // status: statuS
            })
                .then(() => router.navigate('/admin/'))
                .catch((error) => console.log(error))

        });
    });


    return `    <div class="container p-2 w-50">
    <form id="form-add">
        <h3 class="text-center bg-color-main text-white rounded p-2">ADD PROJECT</h3>
        <div class="row mb-3">
            <div class="col-md-6 col-sm-12 form-group">
                <label for="exampleInputEmail1">Name Project</label>
                <input type="text" class="form-control" id="nameForm" aria-describedby="namelHelp"
                    placeholder="Project Tree 🥬">
                <small id="nameHelp" class="form-text text-muted">You can choose the right name for your
                    website</small>
            </div>
            <div class="col-md-6 col-sm-12 form-group">
                <label for="exampleInputPassword1">Developer</label>
                <input type="text" class="form-control" id="Developer" placeholder="#laxus..">
                <small id="developerHelp" class="form-text text-muted">Who created this website?</small>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-6 col-sm-12 mb-3 form-group">
                <label for="exampleInputPassword1">Link </label>
                <input type="text" class="form-control" id="linkForm" placeholder="laxus66.vercel.app/">
                <small id="linkHelp" class="form-text text-muted">Link this website?</small>
            </div>
            <div class="col-md-6 col-sm-12 form-group">
                <label for="exampleInputPassword1">Backup Link</label>
                <input type="text" class="form-control" id="backUplink"
                    placeholder="https://github.com/Laxus66">
            </div>
        </div>
        <div class="mb-3 form-group">
            <label for="exampleInputPassword1">Date</label>
            <input type="date" class="form-control" id="date">
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
            <textarea class="form-control" id="textForm" rows="3"></textarea>
            <small id="emailHelp" class="form-text text-muted">What is your website about?</small>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
        `;
}

export default AdminProjectsAdd