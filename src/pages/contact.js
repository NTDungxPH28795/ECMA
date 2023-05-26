import header from "../components/header"
import { Infos } from "../../db.json"

const contact = () => {
    return `
    ${header()}
    <div class="container mt-5 p-5">
        <div class="card">
            <div class="row">
                <div class="col-md-4 col-sm-12 left-side">
                    <span class="line1 w-100"></span>
                    <span class="line2 w-100"></span>
                    <span class="line3 w-100"></span>
                    <div class="contact-us">
                        <p>Contact Us</p>
                        <span></span>
                    </div>
                    <div class="social d-flex w-100 justify-content-center">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </div>
                <div class="col-md-8 col-sm-12 right-side">
                    <div class="top-div">
                        <h2 class="text-center color-main">Get in touch !</h2>
                        <p class="text-center">${Infos[0].Title}</p>
                    </div>
                    <div class="d-flex justify-content-center row mb-5">
                        <div class="p-2 col-md-4 col-sm-12 text-center ">
                            <i class="fa fa-map-marker"></i>
                            <span>${Infos[0].address}</span>
                        </div>
                        <div class="p-2 col-md-4 col-sm-12 text-center">
                            <i class="fa fa-phone"></i>
                            <span>${Infos[0].number}</span>
                        </div>
                        <div class="p-2 col-md-4 col-sm-12 text-center">
                            <i class="fa fa-envelope"></i>
                            <span>${Infos[0].mail}</span>
                        </div>
                    </div>
                    <form class="form-content ">
                        <span>
                            <div class="input-text p-2 row">
                                <small class="col-md-3 col-sm-12">Name</small>
                                <input class="col-md-9 col-sm-12" type="text" required="required">
                            </div>
                            <div class="input-text p-2 row">
                                <small class="col-md-3 col-sm-12">E-mail</small>
                                <input class="col-md-9 col-sm-12" type="text" required="required">
                            </div>
                            <div class="textarea p-2 row">
                                <small class="col-md-3 col-sm-12">Message</small>
                                <textarea class="col-md-9 col-sm-12" required="required"></textarea>
                            </div>
                            <button class="tra-05s w-100 contact-btn" type="submit">CONTACT</button>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </div>`
}

export default contact
