const $ = (selector) => document.querySelector(selector);
const RSVP_WHATSAPP_NUMBER = "917797179770";
const englishText = new Map([
  ["আমাদের আনন্দে", "Join our celebration"],
  [
    "চারটি অনুষ্ঠান, একসঙ্গে অনেক আনন্দ",
    "Four occasions, one beautiful celebration",
  ],
  ["গায়ে হলুদ", "Gaye Holud"],
  ["মেহেন্দি", "Mehendi"],
  ["সংগীত সন্ধ্যা", "Sangeet Evening"],
  ["শুভ বিবাহ", "Wedding Ceremony"],
  ["Gaye Holud", "Haldi"],
  ["Sangeet Evening", "Sangeet"],
  ["পোশাকের ভাবনা", "Dress Code Inspiration"],
  [
    "প্রতিটি অনুষ্ঠানে রঙের সঙ্গে উৎসব করুন",
    "Celebrate each occasion through color",
  ],
  ["আপনাদের অপেক্ষায়", "We look forward to welcoming you"],
  ["শুভ বিবাহ · Mahanagar, Lucknow", "Wedding Ceremony · Mahanagar, Lucknow"],
  [
    "মেহেন্দি ও সংগীত · B-16/1, Kapurthala Road, Lucknow",
    "Mehendi and Sangeet · B-16/1, Kapurthala Road, Lucknow",
  ],
  ["আপনার উপস্থিতি", "Your presence"],
  ["সাদর আমন্ত্রণ", "You are warmly invited"],
  [
    "আপনাদের শুভ উপস্থিতি একান্ত কামনা করি",
    "Your gracious presence would mean the world to us",
  ],
  ["আপনার নাম", "Your name"],
  ["কতজন আসছেন?", "How many guests?"],
  ["বর বরণ", "Welcoming the groom"],
  ["মালাবদল", "Garland exchange"],
  ["সাত পাক", "Seven sacred rounds"],
  ["সিঁদুর দান", "Sindoor ceremony"],
  ["কোনও অনুষ্ঠান নেই", "No events yet"],
  [
    "এই আমন্ত্রণে এখন কোনও অনুষ্ঠান যোগ করা হয়নি।",
    "No events have been added to this invitation yet.",
  ],
  ["আমন্ত্রণে ফিরুন", "Return to invitation"],
  ["পৃষ্ঠা পাওয়া যায়নি", "Page not found"],
  [
    "এই আমন্ত্রণের ঠিকানাটি আর সক্রিয় নেই।",
    "This invitation address is no longer active.",
  ],
  [
    "শুভেচ্ছান্তে · ব্যানার্জী পরিবার",
    "With warm wishes · The Banerjee family",
  ],
  ["ফোন করুন", "Call us"],
  ["২৬ নভেম্বর ২০২৬ · সকাল ১১টা থেকে", "26 November 2026 · 11 AM onwards"],
  ["২৫ নভেম্বর ২০২৬ · বিকেল ৩টা", "25 November 2026 · 3 PM"],
  ["২৫ নভেম্বর ২০২৬ · সন্ধ্যা ৬টা", "25 November 2026 · 6 PM"],
  ["২৬ নভেম্বর ২০২৬ · সন্ধ্যা ৭টা থেকে", "26 November 2026 · 7 PM onwards"],
  ["সকাল ১১টা থেকে", "11 AM onwards"],
  ["বিকেল ৩টা", "3 PM"],
  ["সন্ধ্যা ৬টা", "6 PM"],
  ["সন্ধ্যা ৭টা থেকে", "7 PM onwards"],
  ["৭:০০ PM", "7:00 PM"],
  ["৮:০০ PM", "8:00 PM"],
  ["৯:০০ PM", "9:00 PM"],
  ["১০:০০ PM", "10:00 PM"],
]);
document.querySelectorAll("body *").forEach((element) =>
  element.childNodes.forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;
    englishText.forEach((replacement, original) => {
      node.textContent = node.textContent.replaceAll(original, replacement);
    });
  }),
);
document.querySelectorAll(".dress .swatch").forEach((swatch) => {
  const image = getComputedStyle(swatch).backgroundImage;
  if (image && image !== "none") swatch.classList.add("has-image");
});
document.querySelector("#rsvp")?.remove();
document.querySelector('.nav a[href="#rsvp"]')?.remove();
const heroArch = document.querySelector(".arch");
const honorText = heroArch.querySelector(".translation");
const oldHeroName = heroArch.querySelector("h2");
const oldFamily = heroArch.querySelector(".family");
honorText.classList.add("honor-text");
honorText.textContent =
  "We request the honour of your gracious presence at the wedding celebration.";
oldHeroName.outerHTML =
  '<div class="couple-names"><div class="partner"><h2>Ishani</h2><p>Daughter of <strong>Indrani &amp; Bishwanath Banerjee</strong></p></div><span class="weds">weds</span><div class="partner"><h2>Subhanshu</h2><p>Son of <strong>Beena &amp; Sanjay Banerjee</strong></p></div></div>';
oldFamily.remove();
const cover = $("#cover");
const menu = $("#nav");
const menuButton = $("#menuButton");

menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
  menuButton.textContent = open ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }),
);

$("#openInvite").addEventListener("click", () => {
  cover.classList.add("hide-cover");
  $("#invite").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => cover.remove(), 900);
  startAudio();
});

for (let i = 0; i < 20; i += 1) {
  const petal = document.createElement("i");
  petal.className = "petal";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${7 + Math.random() * 9}s`;
  petal.style.animationDelay = `${-Math.random() * 12}s`;
  petal.style.setProperty("--drift", `${Math.random() * 160 - 80}px`);
  $("#petals").appendChild(petal);
}

addEventListener("scroll", () => {
  const progress =
    (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100;
  $("#progress").style.width = `${progress}%`;
});

const weddingDate = new Date(2026, 10, 26, 19, 0, 0);
function updateCountdown() {
  const remaining = Math.max(0, weddingDate - Date.now());
  const values = [
    Math.floor(remaining / 864e5),
    Math.floor(remaining / 36e5) % 24,
    Math.floor(remaining / 6e4) % 60,
    Math.floor(remaining / 1e3) % 60,
  ];
  document.querySelectorAll(".time b").forEach((element, index) => {
    element.textContent = String(values[index]).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const canvas = $("#scratchCanvas");
const scratchBox = $("#scratch");
const context = canvas.getContext("2d");
function setupScratch() {
  const bounds = scratchBox.getBoundingClientRect();
  const scale = devicePixelRatio || 1;
  context.setTransform(1, 0, 0, 1, 0, 0);
  canvas.width = bounds.width * scale;
  canvas.height = bounds.height * scale;
  context.scale(scale, scale);
  context.fillStyle = "#b9a98f";
  context.fillRect(0, 0, bounds.width, bounds.height);
  context.fillStyle = "#efe4c6";
  context.font = "bold 12px Marcellus";
  context.textAlign = "center";
  context.fillText(
    "✦  SCRATCH TO REVEAL  ✦",
    bounds.width / 2,
    bounds.height / 2,
  );
  context.globalCompositeOperation = "destination-out";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = 46;
}
setupScratch();
let scratching = false;
let lastPoint = null;
function scratch(event) {
  if (!scratching) return;
  const bounds = canvas.getBoundingClientRect();
  const point = {
    x: event.clientX - bounds.left,
    y: event.clientY - bounds.top,
  };
  context.beginPath();
  if (lastPoint) {
    context.moveTo(lastPoint.x, lastPoint.y);
    context.lineTo(point.x, point.y);
    context.stroke();
  } else {
    context.arc(point.x, point.y, context.lineWidth / 2, 0, Math.PI * 2);
    context.fill();
  }
  lastPoint = point;
}
canvas.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  scratching = true;
  scratchBox.classList.add("is-scratching");
  lastPoint = null;
  canvas.setPointerCapture(event.pointerId);
  scratch(event);
});
canvas.addEventListener("pointermove", (event) => {
  if (scratching) event.preventDefault();
  scratch(event);
});
canvas.addEventListener("pointerup", () => {
  scratching = false;
  lastPoint = null;
});
canvas.addEventListener("pointercancel", () => {
  scratching = false;
  lastPoint = null;
});
addEventListener("resize", setupScratch);

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));

const calendar = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "BEGIN:VEVENT",
  "DTSTART:20261126T193000",
  "DTEND:20261126T233000",
  "SUMMARY:Ishani weds Subhanshu",
  "LOCATION:Kalyan Mandap, Mahanagar, Lucknow",
  "DESCRIPTION:Wedding Ceremony",
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");
const calendarLink = $("#calendar");
if (calendarLink)
  calendarLink.href = `data:text/calendar;charset=utf8,${encodeURIComponent(calendar)}`;

const rsvpForm = $("#rsvpForm");
rsvpForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = $("#formStatus");
  const name = $("#guest").value.trim();
  const people = $("#count").value;
  if (!name) {
    status.className = "status error";
    status.textContent = "Please enter your name.";
    return;
  }
  status.className = "status success";
  status.textContent = `Thank you, ${name}. Your RSVP is ready.`;
  const message = `Hello, I am ${name}. I will attend Ishani and Subhanshu's wedding with ${people}.`;
  const whatsappUrl = `https://wa.me/${RSVP_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener");
});

$("#phoneLink")?.addEventListener("click", (event) => {
  event.preventDefault();
  const status = $("#formStatus");
  if (!status) return;
  status.className = "status error";
  status.textContent = "A phone number will be added here when available.";
});

if (location.hash === "#not-found" || location.hash === "#empty-state") {
  document.querySelectorAll("main > *").forEach((element) => {
    element.hidden = true;
  });
  $(location.hash).hidden = false;
}

let youtubePlayer;
let playing = false;
let youtubeReady;
function loadYouTubeApi() {
  if (youtubeReady) return youtubeReady;
  youtubeReady = new Promise((resolve) => {
    window.onYouTubeIframeAPIReady = resolve;
    const api = document.createElement("script");
    api.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(api);
  });
  return youtubeReady;
}
async function startAudio() {
  await loadYouTubeApi();
  if (!youtubePlayer) {
    youtubePlayer = new YT.Player("youtube-player", {
      videoId: "u2XOyXN1Ppo",
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        playlist: "u2XOyXN1Ppo",
        playsinline: 1,
        start: 33,
      },
      events: { onReady: (event) => event.target.playVideo() },
    });
  } else {
    youtubePlayer.playVideo();
  }
  playing = true;
  $("#music").classList.add("on");
}
$("#music").addEventListener("click", () => {
  if (!youtubePlayer || !playing) {
    startAudio();
    return;
  }
  youtubePlayer.pauseVideo();
  playing = false;
  $("#music").classList.remove("on");
});
