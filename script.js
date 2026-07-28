// ===============================
// GREEN CITY WEBSITE
// ===============================

// Navbar khi cuộn
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(3,15,7,.92)";
        header.style.boxShadow = "0 0 25px #39ff14";
    } else {
        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";
    }

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".card h1");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = Math.ceil(target / 80);

    const update = () => {

        count += speed;

        if (count >= target) {
            counter.innerText = target;
        } else {
            counter.innerText = count;
            requestAnimationFrame(update);
        }

    }

    update();

});

// ===============================
// Fade In
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: .15
});

document.querySelectorAll(".card,.job,.newsCard").forEach(item => {

    item.style.opacity = 0;
    item.style.transform = "translateY(60px)";
    item.style.transition = ".8s";

    observer.observe(item);

});

// ===============================
// Glow Mouse
// ===============================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "20px";
glow.style.height = "20px";
glow.style.borderRadius = "50%";
glow.style.background = "#39ff14";
glow.style.pointerEvents = "none";
glow.style.filter = "blur(10px)";
glow.style.zIndex = "99999";

document.body.appendChild(glow);

window.addEventListener("mousemove", e => {

    glow.style.left = e.clientX - 10 + "px";
    glow.style.top = e.clientY - 10 + "px";

});

// ===============================
// Hero Parallax
// ===============================

const heroImg = document.querySelector(".right img");

window.addEventListener("mousemove", e => {

    let x = (window.innerWidth / 2 - e.clientX) / 40;
    let y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImg.style.transform =
        `translate(${x}px,${y}px)`;

});

// ===============================
// Job Hover
// ===============================

document.querySelectorAll(".job").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 0 45px #39ff14";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});

// ===============================
// News Hover
// ===============================

document.querySelectorAll(".newsCard").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// Button Effect
// ===============================

document.querySelectorAll(".btn1,.btn2,.play").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";
        btn.style.boxShadow = "0 0 30px #39ff14";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "";

    });

});

// ===============================
// Floating Leaves
// ===============================

function createLeaf() {

    const leaf = document.createElement("div");

    leaf.innerHTML = "🍃";

    leaf.style.position = "fixed";
    leaf.style.left = Math.random() * window.innerWidth + "px";
    leaf.style.top = "-40px";
    leaf.style.fontSize = (20 + Math.random() * 20) + "px";
    leaf.style.opacity = .5;
    leaf.style.pointerEvents = "none";
    leaf.style.zIndex = 5;

    document.body.appendChild(leaf);

    let x = parseFloat(leaf.style.left);
    let y = -40;

    const speed = 1 + Math.random() * 2;

    const timer = setInterval(() => {

        y += speed;
        x += Math.sin(y / 40);

        leaf.style.top = y + "px";
        leaf.style.left = x + "px";
        leaf.style.transform = `rotate(${y}deg)`;

        if (y > window.innerHeight + 50) {

            clearInterval(timer);
            leaf.remove();

        }

    }, 16);

}

setInterval(createLeaf, 700);

// ===============================
// Loading
// ===============================

window.onload = () => {

    document.body.style.opacity = 0;

    setTimeout(() => {

        document.body.style.transition = ".8s";
        document.body.style.opacity = 1;

    }, 100);

};

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});