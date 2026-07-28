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

const leafCursor = document.createElement("div");

leafCursor.textContent = "🍃";
leafCursor.style.position = "fixed";
leafCursor.style.pointerEvents = "none";
leafCursor.style.fontSize = "22px";
leafCursor.style.zIndex = "99999";
leafCursor.style.opacity = "0";
leafCursor.style.transition = "opacity .15s, transform .15s";
leafCursor.style.transform = "translate(-50%, -50%) scale(0.9)";

document.body.appendChild(leafCursor);

window.addEventListener("mousemove", e => {

    glow.style.left = e.clientX - 10 + "px";
    glow.style.top = e.clientY - 10 + "px";
    leafCursor.style.left = e.clientX + 18 + "px";
    leafCursor.style.top = e.clientY + 18 + "px";

});

const pointerTargets = document.querySelectorAll("a, button");

pointerTargets.forEach(el => {
    el.addEventListener("mouseenter", () => {
        leafCursor.style.opacity = "1";
        leafCursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
    el.addEventListener("mouseleave", () => {
        leafCursor.style.opacity = "0";
        leafCursor.style.transform = "translate(-50%, -50%) scale(0.9)";
    });
});

function spawnClickLeaf(x, y) {
    const leaf = document.createElement("img");
    leaf.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%2339ff14' d='M49.5 18.5c-6.4 7.3-16.9 16.2-30.7 18.9-2.3.4-4.3 1.8-5.1 4.1-1.6 4.8-1.5 11.9 6.7 20.1 8.6 8.6 17.8 6.4 22.4 4.6 2.2-.8 3.8-2.7 4.1-4.9 2.8-13.5 11.7-24.1 18.9-30.2 6.6-5.7 8.6-8.6 7.9-11.4-1.1-4.4-9-4.4-13.3-1.2z'/%3E%3Cpath fill='%231e8d07' d='M15.3 32.6c2.4-6.8 7.9-17.6 18.4-24.7 2.9-1.8 5.7-2.4 8.1-2.2-2.6 2.4-6 6-9.9 11.3-3.9 5.3-8.6 13.1-11.1 19.1-1.3 3.2-1.6 5.5-1.5 7.3-.6-2.9-1.3-6.3-.7-10.8z' opacity='.75'/%3E%3C/svg%3E";
    leaf.style.position = "fixed";
    leaf.style.left = `${x - 12}px`;
    leaf.style.top = `${y - 12}px`;
    leaf.style.width = `${22 + Math.random() * 14}px`;
    leaf.style.height = "auto";
    leaf.style.opacity = "1";
    leaf.style.pointerEvents = "none";
    leaf.style.zIndex = "99999";
    leaf.style.transition = "transform 0.9s ease-out, opacity 0.9s ease-out";
    document.body.appendChild(leaf);

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 90;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;
    const rotation = 360 + Math.random() * 360;

    requestAnimationFrame(() => {
        leaf.style.transform = `translate(${destX}px, ${destY}px) rotate(${rotation}deg)`;
        leaf.style.opacity = "0";
    });

    setTimeout(() => leaf.remove(), 1000);
}

document.addEventListener("click", e => {
    for (let i = 0; i < 4; i += 1) {
        const offsetX = (Math.random() - 0.5) * 24;
        const offsetY = (Math.random() - 0.5) * 24;
        spawnClickLeaf(e.clientX + offsetX, e.clientY + offsetY);
    }
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

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(this.classList.contains("donate-link")){
            const donateModal = document.getElementById("donateModal");
            if (donateModal) {
                e.preventDefault();
                donateModal.classList.add("open");
                return;
            }
        }

        if(href && href.startsWith("#")){

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior:"smooth"
                });
            }

        }

    });

});

const donateModal = document.getElementById("donateModal");
if (donateModal) {
    const donateClose = donateModal.querySelector(".close-modal");
    if (donateClose) {
        donateClose.addEventListener("click", () => {
            donateModal.classList.remove("open");
        });
    }
    donateModal.addEventListener("click", event => {
        if (event.target === donateModal) {
            donateModal.classList.remove("open");
        }
    });
}

const supportModal = document.getElementById("supportModal");
const supportOpen = document.querySelector(".support-open");
const supportClose = supportModal ? supportModal.querySelector(".close-modal") : null;
const introModal = document.getElementById("introModal");
const introOpen = document.querySelector(".intro-open");
const introClose = introModal ? introModal.querySelector(".close-modal") : null;

const connectButton = document.querySelector(".connect-button");
const serverUrl = "fivem://connect/103.142.26.157";

if (connectButton) {
    connectButton.addEventListener("click", () => {
        window.location.href = serverUrl;
    });
}

if (supportOpen && supportModal) {
    supportOpen.addEventListener("click", () => {
        supportModal.classList.add("open");
    });
}

if (introOpen && introModal) {
    introOpen.addEventListener("click", () => {
        introModal.classList.add("open");
    });
}

if (supportClose && supportModal) {
    supportClose.addEventListener("click", () => {
        supportModal.classList.remove("open");
    });
    supportModal.addEventListener("click", event => {
        if (event.target === supportModal) {
            supportModal.classList.remove("open");
        }
    });
}

if (introClose && introModal) {
    introClose.addEventListener("click", () => {
        introModal.classList.remove("open");
    });
    introModal.addEventListener("click", event => {
        if (event.target === introModal) {
            introModal.classList.remove("open");
        }
    });
}


