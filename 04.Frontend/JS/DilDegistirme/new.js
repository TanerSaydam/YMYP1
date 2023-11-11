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

getUserCountry();

function changeLanguage() { 
    let selectedLang = document.getElementById("language");

    fetch(selectedLang.value + '.json')
        .then(response => response.json()) 
        .then(data => {
            for (let el of document.querySelectorAll(".lang")) {
                const text = data[el.id];
                if(text === undefined) el.innerText = el.id;
                else el.innerText = data[el.id];
            }
        })
        .catch((error) => console.error('Bir hata oluştu:', error));
}
