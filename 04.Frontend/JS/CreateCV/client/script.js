get();
let day =  "01";
let month =  "01";
let year =  "2023";

let myData = {};
const apiUrl = "http://localhost:5000/api"
//const apiUrl = "https://my-cv-server-with-express-d798l2luf-tanersaydam.vercel.app"

function get() {
    const apiUrl = "http://localhost:5000/api"
    document.getElementById("blog").style.display = "none";
    document.getElementById("blog-loading").style.display = "block";
    //document.getElementById("spinner").style.display = "flex";
    document.getElementById("error").style.display = "none";
    axios.get(`${apiUrl}/get`)
        .then(res => {
            myData = res.data;
            setMyInformation(myData.person);
            setMySkills(myData.skills);
            setMySocialMedias(myData.socialMedias);
            setMyWorkExperiences(myData.workExperiences);
            setEducations(myData.educations);

            document.getElementById("blog").style.display = "block";
            document.getElementById("blog-loading").style.display = "none";
            document.getElementById("spinner").style.display = "none";
        })
        .catch(err=> {
            console.log(err);
            document.getElementById("blog-loading").style.display = "none";
            document.getElementById("spinner").style.display = "none";
            document.getElementById("error").style.display = "flex";
        });
}

function tryAgain(){
    document.location.reload();
}

function setMyInformation(person) {
    //HTML Çıktı Elementleri
    document.getElementById("name").innerText = person.name;
    document.getElementById("title").innerText = person.title;
    document.getElementById("avatar").src = person.avatar;
    document.getElementById("phone").innerText = person.phone;
    document.getElementById("email").innerText = person.email;
    document.getElementById("address").innerText = person.address;
    document.getElementById("aboutMe").innerHTML = person.aboutMe;     
    document.getElementById("dateOfBirth").innerText = setAndConvertDate(person.dateOfBirth);

    //HTML INPUT VS Girdi Elementleri
    document.getElementById("nameInput").value = person.name;
    document.getElementById("subTitleInput").value = person.title;
    document.getElementById("dateOfBirthInput").value = `${year}-${month}-${day}`
    document.getElementById("phoneInput").value = person.phone;
    document.getElementById("emailInput").value = person.email;
    document.getElementById("addressInput").value = person.address;
    document.getElementById("aboutMeInput").value = person.aboutMe;
}

function keyupInputAndSetValue(id,event){
    document.getElementById(id).innerHTML = event.target.value;
    myData.person[id] = event.target.value;
}

function changeBirthDateAndSetValue(event){    
    document.getElementById("dateOfBirth").innerText = setAndConvertDate(event.target.value);
    myData.person["dateOfBirth"] = event.target.value;
}

function setAndConvertDate(data){
    const date = new Date(data);   
    day =  date.getDate();
    day = day.toString().length === 1 ? "0" + day.toString() : day;

    month =  date.getMonth() + 1;
    month = month.toString().length === 1 ? "0" + month.toString() : month;

    year =  date.getFullYear();
    const dateString = `${day}/${month}/${year}`
    return dateString;
}

function showEditForm(){
    const blog = document.getElementById("blog");
    blog.classList.add("main");

    const editForm = document.getElementById("edit-form");
    editForm.style.display = "block";
}

function hideEditForm(){
    const result = confirm("Are you sure cancel this changing?");
    if(!result) return;
    
    clear();
    
}

function clear(){
    const blog = document.getElementById("blog");
    blog.classList.remove("main");
    
    const editForm = document.getElementById("edit-form");
    editForm.style.display = "none";  
      
    get();
}

function save(){
    axios.post(`${apiUrl}/set`,myData)
        .then(res=> {
            clear();
    });
}

let skillEditId = 0;
function setMySkills(skills) {
    createSkillElementForShowField(skills);

    let editText = "";
    for(let skill of skills){
        skillEditId++;
        editText += getSkillEditFormDivField(skill);

    document.getElementById("skill-div").innerHTML = editText;
    }
}

function getSkillEditFormDivField(skill){
    if(skill._id === null){
        return `
        <div id="skillEditDiv${skillEditId}" data-id="${skill.id}" class="form-group">
            <label for="skillTitleInput">Title</label>
            <input onkeyup="keyupGetAndSetSkillInputValue(event,'title','skills')" type="text" id="skillTitleInput${skillEditId}" data-id="${skill.id}" value="${skill.title}">
            <label for="skillRateInput">Rate</label>
            <input onkeyup="keyupGetAndSetSkillInputValue(event,'rate','skills')" type="num" max="100" min="0" id="skillRateInput${skillEditId}" data-id="${skill.id}" value="${skill.rate}">
            <button class="btn" onclick="removeSkillForEditForm('skillEditDiv${skillEditId}')">Sil</button>
        </div>`
    }else{
        return `
        <div id="skillEditDiv${skillEditId}" data-id="${skill._id}" class="form-group">
            <label for="skillTitleInput">Title</label>
            <input onkeyup="keyupGetAndSetSkillInputValue(event,'title','skills')" type="text" id="skillTitleInput${skillEditId}" data-id="${skill._id}" value="${skill.title}">
            <label for="skillRateInput">Rate</label>
            <input onkeyup="keyupGetAndSetSkillInputValue(event,'rate','skills')" type="num" max="100" min="0" id="skillRateInput${skillEditId}" data-id="${skill._id}" value="${skill.rate}">
            <button class="btn" onclick="removeSkillForEditForm('skillEditDiv${skillEditId}')">Sil</button>
        </div>`
    }
   
}

function createSkillEditFormDivField(){
    //bu kısımdaki Id kısmına database aldığımızda değişiklik yapılacak
    skillEditId++;
    const skill = {_id:null,id:skillEditId,title:"",rate:0};

    myData.skills.push(skill)
    const text = getSkillEditFormDivField(skill);
    //console.log(text);
    document.getElementById("skill-div").innerHTML += text;
    console.log(document.getElementById("skill-div").innerHTML);

    createSkillElementForShowField(myData.skills);
}

function keyupGetAndSetSkillInputValue(event,name,objectName){    
    const element = event.target;    
    const id = element.dataset["id"];
    const index = myData.skills.findIndex(p=> p.id == id || p._id == id);
    console.log(myData.skills);
    console.log(id);

    myData[objectName][index][name] = element.value;
    createSkillElementForShowField(myData.skills);
}

function createSkillElementForShowField(skills){
    let text = "";
    for (let skill of skills) {
        text += `
                <li>
                    <div class="bar">
                        <p>${skill.title}</p>
                        <progress id="file" style="color:black" value="${skill.rate}" max="100"> ${skill.rate}% </progress>
                    </div>
                </li>
                `
    }

    document.getElementById("skills").innerHTML = text;
}

function removeSkillForEditForm(elementId){ 
    debugger
    const element = document.getElementById(elementId);
    if(element === undefined) return;

    const id = element.dataset["id"];
    const index = myData.skills.findIndex(p=> p.id == id || p._id == id);
    myData.skills.splice(index,1);
    element.remove();

    createSkillElementForShowField(myData.skills);    
}

function setMySocialMedias(socialMedias) {
    let text = "";
    for (let social of socialMedias) {
        text += `
        <li class="social-media" title="${social.title}">
           <a href="${social.link}" target="_blank">
            <i class="${social.icon}">
            </i>
           </a>
        </li>
        `
    }

    document.getElementById("social-medias").innerHTML = text;
}

function setMyWorkExperiences(workExperiences){
    let text = `<h1 class="content-head"><span><i class="fas fa-suitcase-rolling"></i></span>WORK EXPERIENCE</h1>`;
    for(let work of workExperiences){
        text += `
        <div class="work-group">
                        <h3>${work.title}</h3>
                        <h4>${work.subTitle}</h4>
                        <span>${work.date}</span>
                        <p>${work.description}</p>
                    </div>
        `
    }

    document.getElementById("work-experiences").innerHTML = text;
}

function setEducations(educations){
    let text = `<h1 class="content-head"><span><i class="fas fa-book"></i></span>EDUCATION</h1>`
    for(let ed of educations){
        text += `
        <div class="edu-group">
                        <h4>${ed.title} <br>${ed.section}</h4>
                        <span>${ed.date}</span>
                        <p>${ed.description}</p>
                    </div>
        `
    }

    document.getElementById("educations").innerHTML = text;
}

// let skillElementId = 1;

// function addSkill(){
//     skillElementId++;
//     const value = `<li id="liSkill-${skillElementId}">
//     <div class="bar">
//         <p>C#
//         <button onclick="removeSkill('liSkill-${skillElementId}')">-</button>
//         </p>
//         <span></span>
//     </div>
// </li>`

// document.getElementById("skills").innerHTML += value;
// }

// function removeSkill(id){
//     document.getElementById(id).remove();
// }