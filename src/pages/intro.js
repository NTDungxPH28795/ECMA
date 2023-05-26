
import { Intro } from "../../db.json"

const intro = () => {
    return `<div class="container">
    <div class="row introduct m-lg-5 m-sm-2 p-lg-5 p-sm-2">
        <div class="col-md-6 col-sm-12 introduct_content">
            <h1>${Intro[0].title01}</h1>
            <p class="">${Intro[0].slogan}</p>
            <div class="d-flex">
                <a class="introduct_btn text-center text-decoration-none data-navigo text-light"
                    href="/contact"><span>Contact!</span></a>
                <div class="centered text-center">
                    <div class="box color-main">Learn More</div>
                </div>
            </div>

        </div>
        <div class="col-md-6 col-sm-12">
            <img class="w-100" src="./imgs/banner_introduct.jpg" alt="">
        </div>
    </div>
</div>`
}

export default intro()
