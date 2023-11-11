async function getUserCountry() {
    try {
        const response = await fetch("https://ipinfo.io/json?token=fe630376a642ae");
        const data = await response.json();
        const country = data.country;
        const element = document.getElementById("language")
        console.log("Ziyaretçi şu ülkeden geliyor: ", country);

        if (country === "TR") {
            console.log("Ziyaretçi Türkiye'den");
            element.value = "tr";
        } else {
            console.log(`Ziyaretçi ${country} ülkesinden`);
            element.value = "en";
        }

        changeLanguage();
        

    } catch (error) {
        console.log("Hata oluştu: ", error);
    }
}


function changeLanguage(){
        const languageEl = document.getElementById("language");
        const language = languageEl.value;

        const elements = document.querySelectorAll(".lang");        

        for(let el of elements){           
           el.innerText = el.dataset[language]
           el.dataset["deneme"] = "asdasd"
        }

        // const homeEl = document.getElementById("home");
        // const aboutEl = document.getElementById("about");
        // const contactEl = document.getElementById("contact");      
        
        // if (language === "en") {
        //     homeEl.innerText = "Home";
        //     aboutEl.innerText = "About";
        //     contactEl.innerText = "Contact";
        // } else if (language === "tr") {
        //     homeEl.innerText = "Ana Sayfa";
        //     aboutEl.innerText = "Hakkımda";
        //     contactEl.innerText = "İletişim";
        // }
}

getUserCountry();
