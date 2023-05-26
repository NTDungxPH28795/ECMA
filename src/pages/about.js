import header from "../components/header"
import { About } from "../../db.json"
import { Infos } from "../../db.json"
const about = () => {
    return `
    ${header()}
    <div class="about mt-5 p-4 container">
        <!-- <h3 class="text-center">A little bit about me</h3> -->
        <p class="text-center"></p>
        <div class="about_main row">
            <div class="about_main_left col-md-3 col-sm-12">
                <img class="w-100" src="${About[0].img}" alt="">
                <p class="font-italic">"${About[0].title}"</p>
            </div>
            <div class="about_main_left row col-md-9 col-sm-12">
                <div class="about_main_left_box col-md-6">
                    <img src="" alt="">
                    <h4 class="color-main">. Information </h4>
                    <p>
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="card">
                            <div class="list border-bottom row">
                                    <i class="fa-solid fa-phone-volume col-1"></i>
                                    <div class="col-9">
                                        <span>${Infos[0].number}</span>
                                    </div>
                                </div>
                                <div class="list border-bottom row">
                                    <i class="fa-regular fa-envelope col-1"></i>
                                    <div class="col-9">
                                        <span>${Infos[0].mail}</span>
                                    </div>
                                </div>
                                <div class="list border-bottom row">
                                    <i class="fa-solid fa-location-dot col-1"></i>
                                    <div class="col-9">
                                        <span>${Infos[0].address}</span>
                                    </div>
                                </div>
                                <div class="list row">
                                    <i class="fa-solid fa-link col-1"></i>
                                    <div class="col-9">
                                        <span>${Infos[0].link}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </p>
                </div>
                <div class="about_main_right_box col-md-6">
                    <img src="" alt="">
                    <h4 class="color-main">Education</h4>
                    <p>
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="card">
                                <div class="list border-bottom row">
                                    <i class="fa-solid fa-school col-1"></i>
                                    <div class="col-9">
                                        <span>${Infos[0].school}</span>
                                    </div>
                                </div>
                                <div class="list border-bottom row">
                                    <i class="fa-solid fa-address-card col-1"></i>
                                    <div class="col-9">
                                        <span>${Infos[0].Occupation}</span>
                                    </div>
                                </div>
                                <div class="list border-bottom row">
                                    <i class="fa-solid fa-circle-question col-1"></i>
                                    <div class="col-9">
                                        <span>..</span>
                                    </div>
                                </div>
                                <div class="list row">
                                    <i class="fa-solid fa-circle-question col-1"></i>
                                    <div class="col-9">
                                        <span>..</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </p>
                </div>
            </div>
        </div>
    </div>`
}

export default about
