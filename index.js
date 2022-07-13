let sec_map = document.querySelector(".sec_map");

const data = [

    {
        par: "BAMBOO WHITE TEE",
        img: "./icons/img/p1 1.png"
    },
    {
        par: "WHITE DROP SHOULDER TEE",
        img: "./icons/img/p2 1.png"
    },
    {
        par: "WHITE SPORT SHIRT",
        img: "./icons/img/p3 1.png"
    },
    {
        par: "BAMBOO GREY GREEN",
        img: "./icons/img/p4 1.png"
    },
    {
        par: "GREY EVERYDAY HOODIE",
        img: "./icons/img/p5 1.png"
    },
    {
        par: "GREY GREEN DROP SHOULDER TEE        ",
        img: "./icons/img/p6 1.png"
    },
    {
        par: "GREY GREEN OVERSIZED LONG SLEEVE TEE",
        img: "./icons/img/p6 2.png"
    },
    {
        par: "GREY GREEN OVERSIZED HOODIE W MASK",
        img: "./icons/img/p7 1.png"
    },
    {
        par: "GREY GREEN SPORT SHIR",
        img: "./icons/img/p9 1.png"
    },
    {
        par: "GREY EVERYDAY LOUNGE",
        img: "./icons/img/p10 1.png"
    },
    {
        par: "LIGHT GREY SWEAT PANT",
        img: "./icons/img/p11 1.png"
    },
    {
        par: "GREY GREEN SWEAT PANT",
        img: "./icons/img/p12 1.png"
    },
    {
        par: "GREY GREEN SPORT SHORT",
        img: "./icons/img/p13 1.png"
    },
    {
        par: "GREY WOMEN CROP TOP HOODIE",
        img: "./icons/img/p14 1.png"
    },
    {
        par: "GREY WOMEN CROP TOP SWEATER",
        img: "./icons/img/p15 1.png"
    },
    {
        par: "GREY WOMEN TRACK PANTS",
        img: "./icons/img/p16 1.png"
    },

]

data.map((item)=>{
  sec_map.innerHTML +=`
    <div class="sec_map_mini">
    <img src=" ${item.img} " alt="">
    <p> ${item.par} </p>

    </div>
    `;
})