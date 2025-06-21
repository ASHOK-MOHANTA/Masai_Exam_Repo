const postCointer = document.getElementById("postCointer");
const seachInput = document.getElementById("searchInput");
const userFilter = document.getElementById("userFilter");
const sortSelect = document.getElementById("sortSelect");
const noResult = document.getElementById("noResult");
let posts =[];

fetch("https://jsonplaceholder.typicode.com/posts")
                                  .then(res=> res.json()).then(data=>{
                                  posts = data.slice(0,50);
                                  addUserOption();
                                  showPosts(posts)
});

console.log(posts)

function addUserOption(){
    for(let i=1;i<=10;i++){
        const opt = document.createElement("option")
        opt.value =i;
        opt.textContent = "User"+ i;
        userFilter.appendChild(opt);
    }
}

function showPosts(list){
    postCointer.innerHTML ="";
    if(list.length ===0){
        noResult.style.display="block";
        return;
    }else{
        noResult.style.display ="none";
    }
    list.forEach(post=>{
        const card = document.createElement("div");
        card.className="card";
        if(post.userid <=3){
            card.classList.add("green");
        }else if(post.userid <=7){
            card.classList.add("orange");
        }else{
            card.classList.add("red")
        }

        card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <small>User ID: ${post.userid} | Post ID:${post.id}</small>
        `;
        postCointer.appendChild(card);

    });
}

function updatePost(){
    let filterPost = [...posts];

    const searchValue = seachInput.value.toLowerCase();
    filterPost = filterPost.filter(post=>post.title.toLowerCase().includes(searchValue));
    const userid = userFilter.value;
    if(userid){
        filterPost = filterPost.filter(post => post.userid == userid);
    }

    const sortValue = sortSelect.value;
    if(sortValue ==="titleASC"){
        filterPost.sort((a,b)=>
            a.title.localeCompare(b.title))
    }else if(sortValue==="titleDesc"){
        filterPost.sort((a,b)=>b.title.localeCompare(a.id));
    }
    else if(sortValue === "idASC"){
        filterPost.sort((a,b)=>a.id - b.id);
    }
    else if(sortValue ==="idDesc"){
        filterPost.sort((a,b)=>b.id-a.id);
    }
    showPosts(filterPost);
}
seachInput.addEventListener("input",updatePost)
userFilter.addEventListener("change",updatePost);
sortSelect.addEventListener("change",updatePost);
