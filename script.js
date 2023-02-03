const userdataTemplate=document.querySelector("[data-user-template]")
const userCardContainer=document.querySelector("[userCardContainer]")
const userSearch=document.querySelector("[data-search]")
let users=[]
userSearch.addEventListener("input",(e)=>{
    const value=e.target.value.toLowerCase()
    users.forEach(user=>{
        const isVisible=
        user.name.toLowerCase().includes(value) || user.platform.toLowerCase().includes(value)
        user.element.classList.toggle("hide",!isVisible);
    })
})

let url="https://kontests.net/api/v1/all";
let response=fetch(url)
response.then(res=> res.json()
).then(data=>{
    users=data.map(user=>{
        const card=userdataTemplate.content.cloneNode(true).children[0]
        const title=card.querySelector(".card-title")
        const txt1=card.querySelector(".card-text1")
        const txt2=card.querySelector(".card-text2")
        const txt3=card.querySelector(".card-text3")
        const txt4=card.querySelector(".card-text4")
        const txt5=card.querySelector(".card-text5")

        let img=card.querySelector("#card-img-top")
        img.src=(user.url.includes("hackerearth"))?"he.png":(user.url.includes("leetcode"))?"lc.png":(user.url.includes("codeforces"))?"cf.jpg":(user.url.includes("codechef"))?"cc.jpg":(user.url.includes("hackerrank"))?"hr.png":"ac.jpg";

        let pf=(user.url.includes("hackerearth"))?"Hackerearth":(user.url.includes("leetcode"))?"Leetcode":(user.url.includes("codeforces"))?"Codeforces":(user.url.includes("codechef"))?"Codechef":(user.url.includes("hackerrank"))?"Hackerrank":"Atcoder";

        txt1.textContent+=user.start_time;
        txt2.textContent+=user.end_time;
        txt3.textContent+=user.status;
        txt4.textContent+=pf;
        txt5.textContent+=user.in_24_hours;
        title.textContent=user.name;
        let a=card.querySelector(".btn-primary")
        a.href=user.url
        userCardContainer.append(card)
        return {name:user.name, platform: pf, element:card}
    })
})

