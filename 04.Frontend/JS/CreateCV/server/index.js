const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const Personal = require("./models/personal")
const Skill = require("./models/skill")
const SocialMedia = require("./models/social-media")
const WorkExperience = require("./models/work-experience")
const Education = require("./models/education")
const connect = require("./connection");

connect();

app.use(cors());
app.use(express.json());

const apiRoutes = express.Router();

let person = {    
    name: "Taner Saydam",
    title: "Full Stack Sofware Traning",
    phone: "0(554) 654 8006",
    email: "tanersaydam@gmail.com",
    address: "TÜRKİYE/Kayseri",
    dateOfBirth: new Date("1989-09-03"),
    avatar: "avatar.jpg",
    aboutMe: `
    <div class="show-more-module--container--2QPRN"><span id="u146-show-more--1" data-type="checkbox" data-checked="checked" style="display:none"></span><div class="show-more-module--content--cjTh0 show-more-module--with-gradient--1ZDrA" style="max-height:32rem"><div tabindex="0"><div data-purpose="instructor-description"><p>Hello! I'm <strong>Taner Saydam</strong>, an experienced software developer and instructor.</p><p>Through my courses on <strong>Udemy</strong> and <strong>YouTube</strong>, I help participants develop their software skills from beginner to advanced levels.</p><p>Throughout my professional career, I have successfully completed projects in various companies and I am eager to share everything I have learned with you.</p><p>My courses on <strong>Udemy </strong>cover programming languages, web and mobile application development, and much more.</p><p>My courses focus on helping students acquire strong foundations and practical knowledge for real-world applications.</p><p>By joining my courses, you will be prepared to embark on a successful and exciting career in software development.</p><p>My goal is to help you achieve success with trainings that will change your way of thinking and perspective.</p><p>If you want to improve your skills, bring your projects to life, and make a difference in the world of software, check out my courses and invest in your future.</p></div></div></div></div>
    `
}

let skills = [
    {
        title: "C#",
        rate: 80
    },
    {
        title: "HTML",
        rate: 100
    },
    {
        title: "JS",
        rate: 50
    }
]

let socialMedias = [
    {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/taner-saydam-b26336222/",
        icon: "fa fa-linkedin"
    },
    {
        title: "Youtube",
        link: "https://www.youtube.com/channel/UC6Pw9YDMHq3EeNhIF8FMemw",
        icon: "fa fa-youtube"
    }    
]

let workExperiences = [
    {
        title: "LEAD WEB DESIGNER",
        subTitle: "ETC College America",
        date: "2014/Present",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repellat corrupti eius excepturi est repellendus. Maiores, reiciendis excepturi, enim provident molestiae quisquam atque recusandae, id et quod consequuntur pariatur magni."
    },
    {
        title: "LEAD WEB DESIGNER",
        subTitle: "ETC College America",
        date: "2014/2016",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repellat corrupti eius excepturi est repellendus. Maiores, reiciendis excepturi, enim provident molestiae quisquam atque recusandae, id et quod consequuntur pariatur magni."
    }
]

let educations = [
    {
        title: "ULUDAG UNIVERSITY",
        section: "Physict Departmant",
        date: "2006/2013",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repellat corrupti eius excepturi est repellendus. Maiores, reiciendis excepturi, enim provident molestiae quisquam atque recusandae, id et quod consequuntur pariatur magni."
    }
]

app.get("/api/createDefaultValue", async (req,res)=> {
    let personalModel = await Personal.findOne();
    if(personalModel === null){
        personalModel = new Personal(person);
        personalModel._id = uuidv4();
        await personalModel.save();
    }

    for(let s of skills){
        let skill = await Skill.findOne({title: s.title});
        if(skill === null){
            skill = new Skill(s);
            skill._id = uuidv4();
            await skill.save();
        }
    }

    for(let s of socialMedias){
        let socialMedia = await SocialMedia.findOne({title: s.title});
        if(socialMedia === null){
            socialMedia = new SocialMedia(s);
            socialMedia._id = uuidv4();
            await socialMedia.save();
        }
    }

    for(let w of workExperiences){
        let workExperience = await WorkExperience.findOne({
            title: w.title,
            subTitle: w.subTitle, 
            date: w.date,
            description: w.description});
        if(workExperience === null){
            workExperience = new WorkExperience(w);
            workExperience._id = uuidv4();
            await workExperience.save();
        }
    }

    for(let e of educations){
        let education = await Education.findOne({title: e.title,section: e.section});
        if(education === null){
            education = new Education(e);
            education._id = uuidv4();
            await education.save();
        }
    }

    res.json({message: "Create default value is successful"});
});

app.get("", (req, res)=> {
    res.json({message: "Api çalışıyor"});
});

app.get("/api/get", async (req,res)=> {
    const myInformation = {
        person: await Personal.findOne(),
        skills: await Skill.find(),
        socialMedias: await SocialMedia.find(),
        workExperiences: await WorkExperience.find(),
        educations: await Education.find()
    }
    res.json(myInformation);
});

app.post("/api/set", async(req,res)=> {
    const body = req.body;
    //Person update
    person = await Personal.findOne();
    const newPerson = new Personal(body.person);
    newPerson._id = person._id;
    await Personal.findByIdAndUpdate(person._id, newPerson);

    skills = body.skills;

    const currentSkills = await Skill.find();
    for(let c of currentSkills){
        const result = skills.findIndex(p=> p._id === c.id);
        if(result === -1){
            await Skill.findByIdAndRemove(c._id);
        }
    }

    for(let s of skills){
        if(s._id === null){
            const skill = new Skill();
            skill._id = uuidv4();
            skill.title = s.title;
            skill.rate = s.rate;
            await skill.save();
        }else{
            const skill = new Skill();
            skill._id = s._id
            skill.title = s.title;
            skill.rate = s.rate;
            await Skill.findByIdAndUpdate(s._id, skill)
        }
    }


    socialMedias = body.socialMedias;
    workExperiences = body.workExperiences;
    educations = body.educations;

    res.json({message: "Update is successful"})
});

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log("Uygulama ayakta: " + port));