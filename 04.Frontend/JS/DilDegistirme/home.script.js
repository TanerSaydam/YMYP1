function changeLanguage() {
    const languageEl = document.getElementById("language");
    const language = languageEl.value;    
    const descriptionEl = document.getElementById("description");

    //api isteği

    if(language === "en"){        
        descriptionEl.innerText = "Adipisicing elit. Deserunt, perspiciatis doloremque veniam a corporis aperiam, officia dolorum eveniet eum, omnis corrupti blanditiis vero illo exercitationem vel ducimus neque! Nihil, veniam?";
    }else if(language === "tr"){
        descriptionEl.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perspiciatis doloremque veniam a corporis aperiam, officia dolorum eveniet eum, omnis corrupti blanditiis vero illo exercitationem vel ducimus neque! Nihil, veniam?";
    }    
}

changeLanguage();