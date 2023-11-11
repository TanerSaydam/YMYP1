function changeLanguage() {
    const languageEl = document.getElementById("language");
    const language = languageEl.value;
    // const titleEl = document.getElementById("title");   
    // const nameLabelEl = document.getElementById("nameLabel");   
    // const emailLabelEl = document.getElementById("emailLabel");   
    // const subjectLabelEl = document.getElementById("subjectLabel");   
    // const contentLabelEl = document.getElementById("contentLabel");   
    // const sendBtnEl = document.getElementById("sendBtn");   

        const elements = document.querySelectorAll(".lang");        

        for(let el of elements){           
           el.innerText = el.dataset[language]
        }




    // if(language === "en"){
    //     // titleEl.innerText = "Contact Page"
    //     // nameLabelEl.innerText = "Name Lastname"
    //     // emailLabelEl.innerText = "Email"
    //     // subjectLabelEl.innerText = "Subject"
    //     // contentLabelEl.innerText = "Content"
    //     // sendBtnEl.innerText = "Send"
    // }else if(language === "tr"){
        
    //     // titleEl.innerText = "İletişim Sayfası"
    //     // nameLabelEl.innerText = "Ad Soyad"
    //     // emailLabelEl.innerText = "Mail Adresi"
    //     // subjectLabelEl.innerText = "Konu"
    //     // contentLabelEl.innerText = "İçerik"
    //     // sendBtnEl.innerText = "Gönder"
    // } 

    changeNavLanguage();
}