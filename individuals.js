const allCategories = [
    {
        id:1,
        title:"Photoshop",
        category: "photo",
        img: "./images/image37.jpg",
        desc: "Create gorgeous images, rich graphics and inredible art",
    },

    {
        id:2,
        title:"Illustrator",
        category: "overview",
        img: "./images/image11.jpg",
        desc: "Create beautiful designs, icons and more -- then use them anyplace at any size",
    },
    {
        id:3,
        title:"Acrobat DC",
        category: "overview",
        img: "./images/image12.jpg",
        desc: "get PDFs and e-signature tools for all your digital documents needs ",
    },
    {
        id:4,
        title:"Premeire Pro",
        category: "overview",
        img: "./images/image13.jpg",
        desc: "Create everything from from social clips to feature films with the leading video editor",
    },
    {
        id:5,
        title:"inDesign",
        category: "overview",
        img: "./images/image14.jpg",
        desc: "Create and publish books, digital magazines, eBooks, posters, and interactive PDFs",
    },
    {
        id:6,
        title:"Adobe Express",
        category: "overview",
        img: "./images/image15.jpg",
        desc: "Quickly and easily make standout content from thousands of beautiful templates ",
    },
    {
        id:7,
        title:"Photoshop Lightroom Retro",
        category: "photo",
        img: "./images/image26.jpg",
        desc: "Create gorgeous images,with the best tools available",
    },
    {
        id:8,
        title:"Photoshop Lightroom",
        category: "photo",
        img: "./images/image16.jpg",
        desc: "Brighten shots, bump up colors, find and sort, and make your photos amazing, everywhere you are",
    },
    {
        id:9,
        title:"Photoshop Lightroom Classic",
        category: "photo",
        img: "./images/image17.jpg",
        desc: "Make your best photos even better with editing tools designed for your desktop",
    },
    {
        id:10,
        title:"Adobe Stock",
        category: "photo",
        img: "./images/image18.jpg",
        desc: "Choose from million of photos, drawings, video clips and more to add to your creations",
    },
    {
        id:11,
        title:"Photoshop Express",
        category: "photo",
        img: "./images/image19.jpg",
        desc: "Quickly edit, collage and retouch photos so they stand out on social and everywheere else",
    },
    {
        id:12,
        title:"Photoshop Camera",
        category: "photo",
        img: "./images/image20.jpg",
        desc: "Amp up your photos with the intelligent camera app that suggests the best lenses and filters for you",
    },
    {
        id:13,
        title:"Photoshop",
        category: "graphics",
        img: "./images/image21.jpg",
        desc: "Create gorgeous images, rich graphics and inredible art",
    },

    {
        id:14,
        title:"Illustrator",
        category: "graphics",
        img: "./images/image11.jpg",
        desc: "Create beautiful designs, icons and more -- then use them anyplace at any size",
    },

    {
        id:15,
        title:"inDesign",
        category: "graphics",
        img: "./images/image22.jpg",
        desc: "Create and publish books, digital magazines, eBooks, posters, and interactive PDFs",
    },
    {
        id:16,
        title:"Acrobat DC",
        category: "graphics",
        img: "./images/image23.jpg",
        desc: "get PDFs and e-signature tools for all your digital documents needs ",
    },
    {
        id:17,
        title:"Adobe Stock",
        category: "graphics",
        img: "./images/image24.jpg",
        desc: "Choose from million of photos, drawings, video clips and more to add to your creations",
    },
    {
        id:18,
        title:"Adobe Stock",
        category: "graphics",
        img: "./images/image25.jpg",
        desc: "get PDFs and e-signature tools for all your digital documents needs ",
    },
    {
        id:19,
        title:"Acrobat",
        category: "graphics",
        img: "./images/image26.jpg",
        desc: "get PDFs and e-signature tools for all your digital documents needs ",
    },
    {
        id:20,
        title:"Premeire Pro",
        category: "video",
        img: "./images/image27.jpg",
        desc: "Create everything from from social clips to feature films with the leading video editor",
    },
    {
        id:21,
        title:"After Effects",
        category: "video",
        img: "./images/image28.jpg",
        desc: "Create movie titles, intros, and transitions with the industry-standard for moton graphics and visual effects ",
    },
    {
        id:22,
        title:"Audition",
        category: "video",
        img: "./images/image29.jpg",
        desc: "Create, mix and add sound effects to your movies, social posts and podcasts ",
    },
    {
        id:23,
        title:"Animate",
        category: "videos",
        img: "./images/image30.jpg",
        desc: "Design animations for cartoons, banners, games, and the web ",
    },
    {
        id:24,
        title:"Character Animator",
        category: "videos",
        img: "./images/image31.jpg",
        desc: "Use your expressions and movements to bring your characters to life in real-time ",
    },
    {
        id:25,
        title:"Media Encoder",
        category: "videos",
        img: "./images/image32.jpg",
        desc: "Quickly output video files for virtually any screen ",
    },
    {
        id:26,
        title:"Premeire Rush",
        category: "videos",
        img: "./images/image33.jpg",
        desc: "Shoot, edit and share high-quality content with the video editing app for creativity on the go ",
    },
    {
        id:27,
        title:"Photoshop",
        category: "illustration",
        img: "./images/image34.jpg",
        desc: "Create gorgeous images, rich graphics and inredible art",
    },
    {
        id:28,
        title:"Adobe fresco",
        category: "illustration",
        img: "./images/image35.jpg",
        desc: "Enjoy a natural painting and drawing experience with the world's largest collection of brushes",
    },
    {
        id:29,
        title:"Illustrator",
        category: "illustration",
        img: "./images/image36.jpg",
        desc: "Create beautiful designs, icons and more -- then use them anyplace at any size",
    },
    {
        id:30,
        title:"Capture",
        category: "illustration",
        img: "./images/image37.jpg",
        desc: "Capture color combos, textures and more on your phone to use in your photo, video and design projects",
    },
    {
        id:31,
        title:"XD",
        category: "ui/ux",
        img: "./images/image38.jpg",
        desc: "Design incredible experiences for websites, apps, games and brands",
    },
    
    {
        id:32,
        title:"Photoshop",
        category: "ui/ux",
        img: "./images/image39.jpg",
        desc: "Create gorgeous images, rich graphics and inredible art",
    },
    
    {
        id:33,
        title:"Illustrator",
        category: "ui/ux",
        img: "./images/image40.jpg",
        desc: "Create beautiful designs, icons and more -- then use them anyplace at any size",
    },
    {
        id:34,
        title:"After Effects",
        category: "ui/ux",
        img: "./images/image41.jpg",
        desc: "Create movie titles, intros, and transitions with the industry-standard for moton graphics and visual effects ",
    },
    
    {
        id:35,
        title:"Premeire Pro",
        category: "social media",
        img: "./images/image42.jpg",
        desc: "Create everything from from social clips to feature films with the leading video editor",
    },
    
    {
        id:36,
        title:"Photoshop Lightroom",
        category: "social media",
        img: "./images/image11.jpg",
        desc: "Brighten shots, bump up colors, find and sort, and make your photos amazing, everywhere you are",
    },
    {
        id:37,
        title:"Photoshop Express",
        category: "social media",
        img: "./images/image10.jpg",
        desc: "Quickly edit, collage and retouch photos so they stand out on social and everywheere else",
    },
    
];
const questions = document.querySelectorAll(".question");
const open = document.getElementById('open');
const close = document.getElementById('close');
const aside = document.querySelector(".aside");
const about = document.querySelector(".about");
const buttons = document.querySelectorAll(".display-btn");
const content = document.querySelectorAll(".content");
const aboutContent = document.querySelector(".about-content");
const articleContainer = document.querySelector(".article-container");
const btnContainer = document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded", function(){
    // displayCategoryItems(allCategories)
});

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    if(id){
        buttons.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
            aboutContent.style.visibility = "visible";
        });

        content.forEach(function(articles){
            articles.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
        
    }
 });


 

 questions.forEach(function(question){
    const btns = question.querySelector(".question-btn");
    
    btns.addEventListener('click', ()=>{

        questions.forEach((item)=>{

            if(item != question){
                item.classList.remove('show-text');
            }

        });
        
        question.classList.toggle('show-text');


    });
 });

 open.addEventListener('click', function(){
    aside.classList.toggle('active');
 });

 close.addEventListener('click', ()=>{
    aside.classList.remove('active');
 });

 function displayCategoryItems(categoryItems){

    let displayCategory = categoryItems.map(function(items){
        return `<article class="category-info">
        <img src="${items.img} " alt="" class="photo">
        <header>
            <h4>${items.title}</h4>
            <span class="fas fa-camera-retro"></span>
            <span class="fas fa-laptop"></span>
        </header>
        <div class="item-container">
            <p class="item-text">
                ${items.desc} <a href="">learn more</a>
            </p>
            <div class="line"></div>
            <a href="" id="class">Start free trial</a>
        </div>
    </article>`
    });

    displayCategory = displayCategory.join("");
    articleContainer.innerHTML = displayCategory;
 
}

btnContainer.forEach(function(categoryBtn){
    categoryBtn.addEventListener('click', (e)=>{
        const category = e.currentTarget.dataset.id;
        const currentCategory = allCategories.filter(function(categoryItems){
            if(categoryItems.category === category){
                return categoryItems;
            }

        });
        if(category === "all"){
            displayCategoryItems(allCategories);
        }
        else{
            displayCategoryItems(currentCategory);
        }
    });

});

