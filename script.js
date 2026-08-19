// Tombol buka kejutan
const openBtn = document.getElementById("openBtn");

// Konten utama
const content = document.getElementById("content");

// Hero
const hero = document.querySelector(".hero");

// Musik
const music = document.getElementById("music");

// Surat
const letter = document.getElementById("letter");

// Tombol hadiah
const giftBtn = document.getElementById("giftBtn");

// Pesan hadiah
const giftMessage = document.getElementById("giftMessage");

// Quotes
const quote = document.getElementById("quote");


// =====================
// SURAT UNTUK ADIK
// =====================

const letterText = `

Selamat ulang tahun adikku tersayang. 💖

Hari ini adalah hari yang sangat spesial karena dunia pernah menerima kehadiran seseorang yang begitu berharga.

Mas sangat bangga melihatmu tumbuh menjadi pribadi yang baik, kuat, dan penuh semangat.

Terima kasih karena selalu membawa kebahagiaan dan warna dalam keluarga.

Semoga di usia yang baru ini kamu diberikan kesehatan, kebahagiaan, kesuksesan, dan kemudahan dalam meraih semua impianmu.

Jangan pernah takut untuk bermimpi besar.

Apa pun yang terjadi, ingat bahwa keluarga selalu ada untukmu dan Mas akan selalu mendukungmu.

Selamat ulang tahun adikku tercinta. 🎂💕

`;


// =====================
// BUKA KEJUTAN
// =====================

openBtn.addEventListener("click", () => {

    hero.style.display = "none";

    content.classList.remove("hidden");

    music.play();

    typeWriter();

});


// =====================
// TYPE WRITER
// =====================

let index = 0;

function typeWriter() {

    if(index < letterText.length){

        letter.innerHTML += letterText.charAt(index);

        index++;

        setTimeout(typeWriter, 35);
    }

}


// =====================
// HADIAH
// =====================

giftBtn.addEventListener("click", () => {

    giftMessage.innerHTML = `
    🎁 Semoga semua impianmu tercapai.<br>
    🌸 Selalu sehat dan bahagia.<br>
    ⭐ Menjadi pribadi yang semakin hebat.<br>
    💖 Dan selalu dikelilingi orang-orang yang menyayangimu.
    `;

});


// =====================
// QUOTES
// =====================

const quotes = [

"Adik adalah hadiah terindah yang Tuhan titipkan.",

"Teruslah bersinar dan mengejar impianmu.",

"Kebahagiaanmu adalah kebahagiaan keluarga.",

"Jangan pernah menyerah pada impianmu.",

"Kamu lebih hebat dari yang kamu kira.",

"Langkah kecil hari ini akan menjadi kesuksesan besar di masa depan.",

"Selalu percaya pada dirimu sendiri."

];

let quoteIndex = 0;

setInterval(() => {

    quoteIndex++;

    if(quoteIndex >= quotes.length){
        quoteIndex = 0;
    }

    quote.textContent = quotes[quoteIndex];

}, 4000);
function createSakura(){

    const sakura = document.createElement("div");

    sakura.classList.add("sakura");

    sakura.innerHTML = "🌸";

    sakura.style.left = Math.random() * window.innerWidth + "px";

    sakura.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    sakura.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.body.appendChild(sakura);

    setTimeout(() => {
        sakura.remove();
    },10000);

}

setInterval(createSakura,300);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade").forEach(el => {

    observer.observe(el);

});