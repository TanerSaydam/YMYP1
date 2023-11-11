const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
document.addEventListener("keydown", myKeydownFunction);

let interval;
let oyunBasladiMi = false;
const height = canvas.height;
const width = canvas.width;
let x = width / 2;
let y = height - 30;
let dx = 2;
let dy = -2;
let ballColor = "#0095DD";
let cubukGenisligi = 180;
let cubukYuksekligi = 10;
let cubukX = (width - cubukGenisligi) / 2;
let cubukY = (height - cubukYuksekligi);
let tuglaSatirSayisi = 3;
let tuglaSutunSayisi = 5;
const tuglaGenislik = 75;
const tuglaYukseklik = 20;
const tuglaOffSetTop = 30;
const tuglaOffSetLeft = 30;
const tuglaPadding = 10;
const tuglalar = [];
let dusenSuprizler = [];
let surprizSayisi = 2;
let surprizVerildi = 0;
for(let k = 0; k < tuglaSutunSayisi; k++){
    tuglalar[k] = [];
    for(let s = 0; s < tuglaSatirSayisi; s++){
        let surpriz = false;
        if (surprizVerildi < surprizSayisi && Math.random() < 0.1) { // %10 olasılıkla süpriz ver
            surpriz = true;
            surprizVerildi++;
        }
        tuglalar[k][s] = {x: 0, y:0, status: 1, surpriz: surpriz};
    }
}
let skor = 0;
let can = 3;
let isGaveOver = false;



const oyunuCiz = () => {
    tahtayiTemizle();
    topuCiz(); 
    topunKonumunuDegistir();
    cubuguCiz();    
    tuglalariCiz();
    tuglayaCarptiMi();
    suprizleriCiz();
    skoruCiz();
    canCiz();
    if(oyunuBaslatmaYazisiCiz()) return;
    
    
    
}

const tahtayiTemizle = () => {
    ctx.clearRect(0, 0, width, height);
}

const topuCiz = () => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

const topunKonumunuDegistir = () => {
    if(x + dx > width - 10 || x + dx < 10){
        dx = -dx;
        //ballColor = "red";
    }

    if(y + dy < 10){ //yukarı çarptığında
        dy = -dy;
    }else if (
        y + dy > cubukY - 10 && y + dy < cubukY + 10 && // Y ekseninde çubuğa çarptığında
        x > cubukX && x < cubukX + cubukGenisligi  // X ekseninde çubuğa çarptığında
    ) {
        dy = -dy;
    }else if(y + dy > height - 10){ //aşağı çaprtığında
        if(x < cubukX || x > cubukX + cubukGenisligi){
            can--;
            if(can === 0){
                ctx.font = "25px Verdena";
                ctx.fillStyle = "red";
                ctx.fillText("Game Over!",width/2-100,height/2);
                clearInterval(interval);
                isGaveOver= true; 
                oyunBasladiMi = false;           
            }
        }
        
        dy = -dy;

    }    

    x += dx;
    y += dy;
}

const cubuguCiz = ()=> {
    ctx.beginPath();
    ctx.rect(cubukX,cubukY,cubukGenisligi,cubukYuksekligi);
    ctx.fill();
    ctx.closePath();
}

const tuglalariCiz = () => {
    for(let sutun = 0; sutun < tuglaSutunSayisi; sutun++){        
        for(let satir = 0; satir < tuglaSatirSayisi; satir++){
            if(tuglalar[sutun][satir].status === 1){
                const tuglaX = sutun * (tuglaGenislik + tuglaPadding) + tuglaOffSetLeft; //30
                const tuglaY = satir * (tuglaYukseklik + tuglaPadding) + tuglaOffSetTop; //302

                tuglalar[sutun][satir].x = tuglaX;
                tuglalar[sutun][satir].y = tuglaY;

                ctx.beginPath();
                ctx.rect(tuglaX, tuglaY, tuglaGenislik, tuglaYukseklik);
                ctx.fillStyle = ballColor;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

const tuglayaCarptiMi = () => {
    for(let sutun = 0; sutun < tuglaSutunSayisi; sutun++){
        for(let satir = 0; satir < tuglaSatirSayisi; satir++){
            const tugla = tuglalar[sutun][satir];
            if(tugla.status === 1){
                if(x > tugla.x && x < tugla.x + tuglaGenislik && y > tugla.y && y < tugla.y + tuglaYukseklik){
                    dy = -dy
                    tugla.status = 0;
                    skor++;

                    // Süprizi kontrol et
                    if (tugla.surpriz) {
                        dusenSuprizler.push({x: tugla.x + tuglaGenislik / 2, y: tugla.y + tuglaYukseklik / 2, status: 1});
                    }

                    if(skor === tuglaSatirSayisi * tuglaSutunSayisi){
                        clearInterval(interval);

                        ctx.font = "25px Verdena";
                        ctx.fillStyle = "black";
                        ctx.fillText("Tebrikler, oyunu kazandın!",width /2 - 100, height/2 );
                    }
                }
            }
        }
    }
}

const suprizleriCiz = () => {
    for (let i = 0; i < dusenSuprizler.length; i++) {
        const supriz = dusenSuprizler[i];
        if (supriz.status === 1) {
            ctx.beginPath();
            ctx.rect(supriz.x, supriz.y, 10, 10); // 10x10 boyutunda bir kare olarak süprizi çiziyoruz.
            ctx.fillStyle = "#FF0000"; // Süprizi kırmızı yapalım.
            ctx.fill();
            ctx.closePath();

            // Süprizi aşağı doğru hareket ettirelim.
            supriz.y += 2;

            // Eğer süpriz, çubuğa çarparsa:
            if (supriz.y >= cubukY && supriz.y <= cubukY + cubukYuksekligi &&
                supriz.x >= cubukX && supriz.x <= cubukX + cubukGenisligi) {
            
                supriz.status = 0; // Süprizi devre dışı bırakalım.
            
                // Çubuğu ya büyütelim ya da küçültebiliriz. Rastgele bir seçim yapalım.
                const buyut = Math.random() >= 0.5;  // 0.5'ten büyük ya da eşitse true, küçükse false döner.
            
                if (buyut && cubukGenisligi <= 100) {  // Çubuğu büyütmeyi sınırlayalım.
                    cubukGenisligi =  cubukGenisligi * 2;
                } else if (!buyut && cubukGenisligi >= 20) {  // Çubuğu küçültmeyi sınırlayalım.
                    cubukGenisligi = cubukGenisligi /2;
                }
            }
        }
    }
};

const skoruCiz = () => {
    ctx.font = "16px Arial";
    ctx.fillStyle = ballColor;
    ctx.fillText(`Skor: ${skor}`,8,20)
}

const canCiz = () => {
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`Can: ${can}`, width-65,20);
}

const oyunuBaslatmaYazisiCiz = () => {
    if(!oyunBasladiMi && !isGaveOver){
        ctx.fillStyle = "black";
        ctx.font = "20px Verdena";
        ctx.fillText(`Oyuna başlamak için tıklayın`,width/2 - 100,height/2);
        return true; 
    }else{
        return false;
    }
}

oyunuCiz();

const oyunuBaslat = () => {
    if(oyunBasladiMi === false){
        if(isGaveOver){
            document.location.reload();
        }else{
            interval = setInterval(oyunuCiz,10);
            oyunBasladiMi = true;
        }        
    }else{
        clearInterval(interval);
        oyunBasladiMi = false;

        ctx.fillStyle = "black";
        ctx.font = "20px Verdena";
        ctx.fillText(`Oyun Duraklatıldı`,width/2 - 60,height/2)
    }    
}

function myKeydownFunction(e){
    if(e.key === "Right" || e.key === "ArrowRight"){
        if(cubukX + 5 > width - cubukGenisligi) return;

        cubukX += 5;
    }else if(e.key === "Left" || e.key === "ArrowLeft"){
        if(cubukX - 5 < 0)
        return;

        cubukX -= 5;
    }
}