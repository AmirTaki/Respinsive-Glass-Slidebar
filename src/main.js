let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")
let searchBtn = document.querySelector("bx-search");
let listItem = document.querySelectorAll("list-item");


btn.addEventListener("click", (e)=>{
    sidebar.classList.toggle("active")
}) 

searchBtn.addEventListener("click", (e)=>{
    sidebar.classList.toggle("active")
})

const activeLink = () =>{
    listItem.forEach((item) => {
        item.classList.remove("active") 
        this.classList.add('active')

    })
 
}

   listItem.forEach((item) => {
        item.addEventListener('click', (e)=>{
            activeLink()
        })
    });