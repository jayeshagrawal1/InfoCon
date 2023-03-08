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

fetchContestDetails();

async function fetchContestDetails()
{
    try{
        const response= await fetch("https://kontests.net/api/v1/all");
    
        const data=await response.json();

        renderContestDetails(data);
    }
    catch(err)
    {
        console.log(err);
        const errorHandlerDiv=document.querySelector(".ErrorHandling");
        errorHandlerDiv.append("Cannot Fetch Details right now please try again later");
    }
}

function renderContestDetails(data){
    data.forEach(user=>{

        const card=userdataTemplate.content.cloneNode(true).children[0]
        const title=card.querySelector(".card-title");
        const txt1=card.querySelector(".card-text1");
        const txt2=card.querySelector(".card-text2");
        const txt4=card.querySelector(".card-text4");
        const txt5=card.querySelector(".card-text5");

        let platform="";
        let img=card.querySelector("#card-img-top");
        if(user.url.includes("hackerearth"))
        {
            img.src="images/he.png";
            platform='HackerEarth';
        }
        else if(user.url.includes("hackerrank"))
        {
            img.src="images/hr.png";
            platform='HackerRank';
        }
        else if(user.url.includes("leetcode"))
        {
            img.src="images/lc.png";
            platform='Leetcode';
        }
        else if(user.url.includes("codeforces"))
        {
            img.src="images/cf.jpg";
            platform='CodeForces';
        }
        else if(user.url.includes("codechef"))
        {
            img.src="images/cc.jpg";
            platform='CodeChef';
        }
        else if(user.url.includes("google"))
        {
            img.src="images/google.jpg";
            platform='Google';
        }
        else
        {
            img.src="images/ac.jpg";
            platform='AtCoder';
        }
        
        // start time formatting
        var date = user['start_time'].split('UTC')[0].split('T')[0];
        var time = user.start_time.split('.')[0].split('T')[1];
        if(user['start_time'].includes('UTC')) 
            txt1.textContent+=date;      
        else
            txt1.textContent+=date+'  '+time;  
        // end time formatting
        var date = user['end_time'].split('UTC')[0].split('T')[0];
        var time = user.end_time.split('.')[0].split('T')[1];
        if(user['end_time'].includes('UTC')) 
            txt2.textContent+=date;
        else
        txt2.textContent+=date+"  "+time;

        txt4.textContent+=platform;
        txt5.textContent+=user.in_24_hours;
        title.textContent=user.name;
        let a=card.querySelector(".btn-primary")
        a.href=user.url
        userCardContainer.append(card)
    })
}


let search=document.getElementById('search');
search.addEventListener('click',(e)=>{
    e.preventDefault()
    search.style.backgroundColor='#293b79';
    
})
search.addEventListener('touchstart',(e)=>{
    e.preventDefault()
    search.style.backgroundColor='#293b79';
    
})
search.addEventListener('mouseout',(e)=>{
    e.preventDefault()
    search.style.backgroundColor='#314894';
    
})

search.addEventListener('touchend',(e)=>{
    e.preventDefault()
    search.style.backgroundColor='#314894';

})
search.addEventListener('keyup',(e)=>{
    e.preventDefault()
    search.style.backgroundColor='#314894';

})