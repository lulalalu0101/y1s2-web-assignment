function backAbout() {
    window.location.href = "about.html";
}

const userData = [
    {
        name: "Josephine",
        username: "@josephine3399",
        userPhoto: "/review-user/user1.png",
        photo: "/review-image/review-1.jpg",
        comment: "Fast Delivery, Seller very cooperative 👍",
        model: "Razer Blade 15 Advanced Model RZ09-0409CEC3-R34"
    },
    {
        name: "Prasanna",
        username: "@prasannasamideshi",
        userPhoto: "/review-user/user2.png",
        photo: "/review-image/review-2.jpg",
        comment: "Good product quality good value for money very fast delivery excellent service by seller satisfaction guaranteed.",
        model: "HP Victus Gaming 16-E1044AX"
    },
    {
        name: "PuayAun",
        username: "@limpuayaun4488",
        userPhoto: "/review-user/user3.png",
        photo: "/review-image/review-3.jpg",
        comment: "Overall buat gaming terbaik performance mantap, tpi overheating laptop xrilek mat, saye sarankan beli laptop cooler.",
        model: "GIGABYTE G5 ME-51MY263SH"
    },
    {
        name: "Mason",
        username: "@mmasson4123",
        userPhoto: "/review-user/user4.png",
        photo: "/review-image/review-4.jpg",
        comment: "Fantastic seller. Apart from that these machine is a beast even after ssd and ram upgrade its run very fast. Quality wise awesome, seller service was cooperatives and kind. Highly recommended",
        model: "Lenovo Legion 5 15ITH6H 82JH00G2MJ"
    },
    {
        name: "Amily",
        username: "@amily91",
        userPhoto: "/review-user/user5.png",
        photo: "/review-image/review-5.jpg",
        comment: "Good product, overall not bad.",
        model: "Acer Predator Helios Neo 16 PHN16-71-54A6"
    },
    {
        name: "Daniel",
        username: "@daniel0912",
        userPhoto: "/review-user/user6.png",
        photo: "/review-image/review-6.jpg",
        comment: "This device is pretty good for gaming",
        model: "Asus TUF F15 FX507Z-V4LP031W"
    }
]

function addDataToHTML() {
    let listReviewHTML = document.querySelector('.container');

    if(userData != null) {
        userData.forEach(a => {
            let newBox = document.createElement('div');
            newBox.classList.add('box');
            newBox.innerHTML = `
            <div class="box-top">
                    <div class="profile">
                        <div class="profile-img">
                            <img src="${a.userPhoto}" alt="">
                        </div>
                        <div class="name-user">
                            <strong>${a.name}</strong>
                            <span>${a.username}</span>
                        </div>
                    </div>

                    <div class="rating">
                        <img src="/icon/star-yellow.png" alt="">
                        <img src="/icon/star-yellow.png" alt="">
                        <img src="/icon/star-yellow.png" alt="">
                        <img src="/icon/star-yellow.png" alt="">
                        <img src="/icon/star-yellow.png" alt="">
                    </div>
                </div>

                <div class="comment">
                    <p>${a.comment}</p>
                    <img src="${a.photo}">
                </div>

                <div class="model">
                    <p>${a.model}</p>
                </div>
            </div>
            `;

            listReviewHTML.appendChild(newBox);
        });
    }
}

addDataToHTML();