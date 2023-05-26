import { Projects } from "../../db.json"
const ProductList = () => {
    return `<div class="row mb-5">
    ${Projects.map((Product) => { // for(i = 0; i<= Product.hashtags.length; i++){}
        return `<div class="col-md-6 mt-3">
    <div class="box-shadow p-3 rounded ">
        <h6 class="color-main">${Product.nameProject}</h6>
        <p class="text-black-50 content mb-1">${Product.content}</p>
            
        <button class="hashtag-technology tra-05s"><i class="fa-brands fa-html5"></i>${Product.hashtags[0]}</button>
        <button class="hashtag-technology tra-05s"><i class="fa-brands fa-php"></i>${Product.hashtags[1]}</button>
        <button class="hashtag-technology tra-05s"><i class="fa-brands fa-css3-alt">${Product.hashtags[2]}</i></button>
        <button class="hashtag-technology tra-05s"><i class="fa-brands fa-js"></i>${Product.hashtags[3]}</button>

        <div class="container mt-5 px-2">
            <div class="table-responsive">
                <!-- <img class="w-100" src="./imgs/project01.png" alt=""> -->
                <table class="table table-responsive table-borderless">
                    <thead>
                        <tr class="bg-light">
                            <th scope="col" width="5%">#</th>
                            <th scope="col" width="20%">Name</th>
                            <th scope="col" width="35%">Developers</th>
                            <th scope="col" width="20%">Deadline</th>
                            <th scope="col" width="20%">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#${Product.id}</td>
                            <td>${Product.nameProject}</td>
                            <td><img src="${Product.imgs}" width="25">${Product.developer}</td>
                            <td>${Product.deadline}</td>
                            <td class="green">${Product.status}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="float-right">
                    <div class="btn btn-dark"><a class="text-decoration-none text-white" href="${Product.link}">Code</a></div>
                    <div class="btn btn-dark"><a class="text-decoration-none text-white" href="/products/">Demo</a></div>
                </div>
            </div>
        </div>
    </div>
</div>`
    }).join("")}
</div>`
}

export default ProductList
