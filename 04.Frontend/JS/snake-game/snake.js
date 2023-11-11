const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

document.addEventListener("keydown", tusHareketleri);

let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;
let x = 10;
let y = 10;
let hareketX = 0;
let hareketY = 0;
let elmaX = 5;
let elmaY = 5;
let konum = 20;
let boyut = 18;
let yilanUzunlugu = 3;
let yilanParcalari = [];
let skor = 0;
let hiz = 10;
let can = 3;
const elmaResmi = new Image();
elmaResmi.src = 'elma.png';
const yilanKuyrukSVG = `
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
<!-- Yılanın kuyruğu -->
<circle cx="50" cy="50" r="45" style="fill:green;stroke:black;stroke-width:5;" />
</svg>
`;
const yilanKuyrukResmi = new Image();
yilanKuyrukResmi.src = 'data:image/svg+xml,' + encodeURIComponent(yilanKuyrukSVG);
let yilanBasSVG = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <!-- Yılanın vücudu -->
    <circle cx="80" cy="80" r="85" style="fill:green;stroke:black;stroke-width:5;" />

    <!-- Gözler -->
    <circle cx="30" cy="30" r="5" style="fill:white;" />
    <circle cx="70" cy="30" r="5" style="fill:white;" />

    <!-- Göz mercekleri -->
    <circle cx="30" cy="30" r="2.5" style="fill:black;" />
    <circle cx="70" cy="30" r="2.5" style="fill:black;" />

    <!-- Ağız -->
    <path d="M 30 70 Q 50 90 70 70" stroke="white" stroke-width="5" fill="none" />
    </svg>
`;
let yilanBasResmi = new Image();
yilanBasResmi.src = 'data:image/svg+xml,' + encodeURIComponent(yilanBasSVG);

class YilanParcasi {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function oyunuCiz() {
    ekraniTemizle();
    yilaniCiz();
    elmayiCiz();
    yilanHareketiniGuncelle();
    elmaninKonumunuGuncelle();
    skoruCiz();
    hiziCiz();
    canCiz();
    const sonuc = oyunBittiMi();

    if (sonuc)
        return;

    setTimeout(oyunuCiz, 1000 / hiz);
}

function ekraniTemizle() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function yilaniCiz() {
    ctx.fillStyle = "green";
    for (let i of yilanParcalari) {
        //ctx.fillRect(i.x * konum, i.y * konum, boyut, boyut)
        ctx.drawImage(yilanKuyrukResmi, i.x * konum, i.y * konum, boyut, boyut);
    }

    yilanParcalari.push(new YilanParcasi(x, y));

    if (yilanParcalari.length > yilanUzunlugu) {
        yilanParcalari.shift();
    }

    ctx.fillStyle = "white";
    //ctx.fillRect(x * konum,y * konum,boyut,boyut)
    ctx.drawImage(yilanBasResmi, x * konum, y * konum, boyut, boyut);
}

function elmayiCiz() {
    ctx.fillStyle = "red";
    //ctx.fillRect(elmaX * konum, elmaY * konum,boyut,boyut);
    ctx.drawImage(elmaResmi, elmaX * konum, elmaY * konum, boyut, boyut);
}

function tusHareketleri(e) {
    switch (e.keyCode) {
        case 37: //sol
            if (hareketX === 1) return;
            hareketX = -1;
            hareketY = 0;

//             yilanBasSVG = `
//     <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
//     <!-- Yılanın vücudu -->
//     <circle cx="40" cy="40" r="15" style="fill:green;stroke:black;stroke-width:5;" />

//     <!-- Gözler -->
//     <circle cx="30" cy="30" r="5" style="fill:white;" />
//     <circle cx="70" cy="30" r="5" style="fill:white;" />

//     <!-- Göz mercekleri -->
//     <circle cx="30" cy="30" r="2.5" style="fill:black;" />
//     <circle cx="70" cy="30" r="2.5" style="fill:black;" />

//     <!-- Ağız -->
//     <path d="M 30 70 Q 50 90 70 70" stroke="white" stroke-width="5" fill="none" />
//     </svg>
// `

//             yilanBasResmi.src = 'data:image/svg+xml,' + encodeURIComponent(yilanBasSVG);
            break;
        case 38: //yukarı
            if (hareketY === 1) return;
            hareketY = -1;
            hareketX = 0;

//             yilanBasSVG = `
//     <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
//     <!-- Yılanın vücudu -->
//     <circle cx="80" cy="80" r="85" style="fill:green;stroke:black;stroke-width:5;" />

//     <!-- Gözler -->
//     <circle cx="30" cy="30" r="5" style="fill:white;" />
//     <circle cx="70" cy="30" r="5" style="fill:white;" />

//     <!-- Göz mercekleri -->
//     <circle cx="30" cy="30" r="2.5" style="fill:black;" />
//     <circle cx="70" cy="30" r="2.5" style="fill:black;" />

//     <!-- Ağız -->
//     <path d="M 30 70 Q 50 90 70 70" stroke="white" stroke-width="5" fill="none" />
//     </svg>
// `

//             yilanBasResmi.src = 'data:image/svg+xml,' + encodeURIComponent(yilanBasSVG);
            break;
        case 39: //sağ
            if (hareketX === -1) return;
            hareketX = 1;
            hareketY = 0;
//             yilanBasSVG = `
//     <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
//     <!-- Yılanın vücudu -->
//     <circle cx="160" cy="160" r="105" style="fill:green;stroke:black;stroke-width:5;" />

//     <!-- Gözler -->
//     <circle cx="30" cy="30" r="5" style="fill:white;" />
//     <circle cx="70" cy="30" r="5" style="fill:white;" />

//     <!-- Göz mercekleri -->
//     <circle cx="30" cy="30" r="2.5" style="fill:black;" />
//     <circle cx="70" cy="30" r="2.5" style="fill:black;" />

//     <!-- Ağız -->
//     <path d="M 30 70 Q 50 90 70 70" stroke="white" stroke-width="5" fill="none" />
//     </svg>
// `

//             yilanBasResmi.src = 'data:image/svg+xml,' + encodeURIComponent(yilanBasSVG);
            break;
        case 40: //aşağı
            if (hareketY === -1) return;
            hareketY = 1;
            hareketX = 0;
            break;
    }

}

function yilanHareketiniGuncelle() {
    let sonucX = x + hareketX;
    let sonucY = y + hareketY;

    if (sonucY < 0) {
        sonucY = 19
    } else if (sonucY > 19) {
        sonucY = 0
    }

    if (sonucX < 0) {
        sonucX = 19
    } else if (sonucX > 19) {
        sonucX = 0;
    }

    x = sonucX;
    y = sonucY;
}

function elmaninKonumunuGuncelle() {
    if (x === elmaX && y === elmaY) {
        elmaX = Math.floor(Math.random() * konum);
        elmaY = Math.floor(Math.random() * konum);

        let elmaKonumuMüsaitMi = false;
        while (!elmaKonumuMüsaitMi) {
            elmaKonumuMüsaitMi = true;
            for (let parca of yilanParcalari) {
                if (parca.x === elmaX && parca.y === elmaY) {
                    elmaX = Math.floor(Math.random() * konum);
                    elmaY = Math.floor(Math.random() * konum);
                    elmaKonumuMüsaitMi = false;
                }
            }
        }

        yilanUzunlugu++;
        skor += 10;

        if (yilanUzunlugu % 3 === 0) {
            hiz += 3;
        }
    }
}

function skoruCiz() {
    ctx.fillStyle = "white";
    ctx.font = "20px verdena";
    ctx.fillText(`Skor: ${skor}`, canvasWidth - 80, 30);
}

function hiziCiz() {
    ctx.fillStyle = "white";
    ctx.font = "20px verdena";
    ctx.fillText(`Hız: ${hiz}`, canvasWidth - 160, 30);
}

function oyunBittiMi() {
    let oyunBitti = false;
    if (hareketX === 0 && hareketY === 0) return;

    for (let index in yilanParcalari) {

        let parca = yilanParcalari[index]
        if (parca.x === x && parca.y === y) {
            can--;
            if (can === 0) {
                oyunBitti = true
                break;
            }

            yilanParcalari.splice(0, index);
            yilanUzunlugu = yilanParcalari.length;
            // Reset the score based on the new length
            skor = yilanUzunlugu * 10;
            hiz -= 3;
            //oyunBitti = true;
            break;
        }
    }

    if (oyunBitti) {
        ctx.fillStyle = "white";
        ctx.font = "50px verdena";
        ctx.fillText(`Game Over!`, canvasWidth / 4.5, canvasHeight / 2);
    }

    return oyunBitti;
}

function canCiz() {
    ctx.fillStyle = "white";
    ctx.font = "20px verdena";
    ctx.fillText(`Can: ${can}`, canvasWidth - 230, 30)
}

function yeniOyun() {
    document.location.reload();
}
oyunuCiz();