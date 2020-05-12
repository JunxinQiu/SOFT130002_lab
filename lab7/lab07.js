const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let justify = document.getElementsByClassName("justify");//最外层容器

function add_item(num) {
    let item = document.createElement("div");
    item.className = "item";//容器

    let genre = document.createElement("h4");
    genre.innerHTML = "Genre: " + works[num].tips;
    item.appendChild(genre);//genre

    let author_container = document.createElement("div");
    author_container.className = "inner-box";
    item.appendChild(author_container);//author 容器

    let author_name = document.createElement("h3");
    author_name.innerHTML = works[num].author;
    author_name.style.display = "inline";//并行显示
    author_container.appendChild(author_name);//姓名

    let author_lifetime = document.createElement("h5");
    author_lifetime.style.display = "inline";
    author_lifetime.style.marginLeft = "1em";//左边距
    author_lifetime.innerHTML = "lifetime:" + works[num].lifetime;
    author_container.appendChild(author_lifetime);//生辰

    let art_container = document.createElement("div");
    art_container.className = "inner-box";
    item.appendChild(art_container);//作品容器

    let popular_photo = document.createElement("h3");
    popular_photo.innerHTML = "Popular Photos";
    art_container.appendChild(popular_photo);//标题

    for (let i = 0; i < works[num].photos.length; i++) {
        let pic = document.createElement("img");
        pic.className = "photo";
        pic.src = works[num].photos[i];
        pic.style.display = "inline";
        art_container.appendChild(pic);
    }//图片

    let btn = document.createElement("button");
    btn.innerHTML = "Visit";
    item.appendChild(btn);

    justify[0].appendChild(item);
}

    for(i=0;i<works.length;i++){
    add_item(i);
}
