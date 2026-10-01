const $ = (selector) => document.querySelector(selector);
const RSVP_WHATSAPP_NUMBER = "+917347825755";
const englishText = new Map([
  ["আমাদের আনন্দে", "Join our celebration"],
  [
    "চারটি অনুষ্ঠান, একসঙ্গে অনেক আনন্দ",
    "Four occasions, one beautiful celebration",
  ],
  ["গায়ে হলুদ", "Gaye Holud"],
  ["মেহেন্দি", "Mehendi"],
  ["সংগীত সন্ধ্যা", "Sangeet Evening"],
  ["সংগীত", "Sangeet"],
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
const contactNumber = RSVP_WHATSAPP_NUMBER.replace(/\D/g, "");
const contactCall = $("#contactCall");
const contactWhatsapp = $("#contactWhatsapp");
if (contactCall) contactCall.href = `tel:+${contactNumber}`;
if (contactWhatsapp) {
  contactWhatsapp.href = `https://wa.me/${contactNumber}`;
}
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
const context = canvas.getContext("2d", { willReadFrequently: true });
let cardCleared = false;
function setupScratch() {
  if (cardCleared) return;
  const bounds = canvas.getBoundingClientRect();
  const scale = devicePixelRatio || 1;
  context.setTransform(1, 0, 0, 1, 0, 0);
  canvas.width = bounds.width * scale;
  canvas.height = bounds.height * scale;
  context.scale(scale, scale);
  const gold = context.createLinearGradient(0, 0, bounds.width, bounds.height);
  gold.addColorStop(0, "#fff3ab");
  gold.addColorStop(0.16, "#dfb332");
  gold.addColorStop(0.42, "#f7d664");
  gold.addColorStop(0.66, "#bc890c");
  gold.addColorStop(1, "#e6b52f");
  context.fillStyle = gold;
  context.fillRect(0, 0, bounds.width, bounds.height);
  context.fillStyle = "#fff0b9";
  context.fillRect(0, 0, bounds.width, 3);
  context.fillRect(0, 0, 3, bounds.height);
  context.fillStyle = "#8e6f17";
  context.fillRect(0, bounds.height - 3, bounds.width, 3);
  context.fillRect(bounds.width - 3, 0, 3, bounds.height);
  context.fillStyle = "#c0122a";
  context.globalAlpha = 0.65;
  for (let x = 15; x < bounds.width - 12; x += 28) {
    for (let y = 13; y < bounds.height - 10; y += 25) {
      const offset = Math.floor(y / 25) % 2 ? 9 : 0;
      context.beginPath();
      context.arc(
        x + offset,
        y,
        (x + y) % 3 === 0 ? 1.8 : 1.25,
        0,
        Math.PI * 2,
      );
      context.fill();
    }
  }
  context.globalAlpha = 1;
  context.fillStyle = "#5e0711";
  context.font = "600 17px Marcellus, serif";
  context.textAlign = "center";
  context.fillStyle = "transparent";
  context.fillText(
    "✦  SCRATCH TO REVEAL  ✦",
    bounds.width / 2,
    bounds.height / 2,
  );
  context.fillStyle = "#900112";
  context.font = "600 17px Marcellus, serif";
  context.fillText("* SCRATCH HERE *", bounds.width / 2, bounds.height / 2 - 5);
  context.fillStyle = "rgba(94, 7, 17, 0.84)";
  context.font = "14px 'Hind Siliguri', sans-serif";
  context.fillText(
    "Use your finger or mouse to reveal the date",
    bounds.width / 2,
    bounds.height / 2 + 23,
  );
  context.globalCompositeOperation = "destination-out";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = 46;
}
setupScratch();
document.fonts?.ready.then(() => {
  if (!scratchBox.classList.contains("is-scratching")) setupScratch();
});
let scratching = false;
let lastPoint = null;
let lastProgressCheck = 0;
function showScratchConfetti() {
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;
  const scratchBounds = scratchBox.getBoundingClientRect();
  const centerX = scratchBounds.left + scratchBounds.width / 2;
  const centerY = scratchBounds.top + scratchBounds.height / 2;
  const burst = document.createElement("div");
  const colors = [
    "#720f1c",
    "#d9a928",
    "#f2d76c",
    "#fff3c1",
    "#c65342",
    "#2f7659",
  ];
  burst.className = "scratch-confetti";
  burst.setAttribute("aria-hidden", "true");

  for (let index = 0; index < 256; index += 1) {
    const piece = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance =
      Math.sqrt(Math.random()) *
      Math.hypot(viewportWidth, viewportHeight) *
      0.62;
    const deltaX = Math.round(Math.cos(angle) * distance);
    const deltaY = Math.round(
      Math.sin(angle) * distance + viewportHeight * 0.16,
    );
    const spin = Math.round(Math.random() * 900 - 450);
    piece.className = "scratch-confetti-piece";
    piece.style.left = `${centerX}px`;
    piece.style.top = `${centerY}px`;
    piece.style.backgroundColor = colors[index % colors.length];
    piece.style.setProperty("--dx", `${deltaX}px`);
    piece.style.setProperty("--dy", `${deltaY}px`);
    piece.style.setProperty("--mid-x", `${Math.round(deltaX * 0.65)}px`);
    piece.style.setProperty(
      "--mid-y",
      `${Math.round(deltaY * 0.45 - viewportHeight * 0.12)}px`,
    );
    piece.style.setProperty(
      "--spin",
      `${spin + Math.round(Math.cos(angle) * 360)}deg`,
    );
    piece.style.setProperty("--mid-spin", `${Math.round(spin * 0.7)}deg`);
    piece.style.setProperty("--duration", `${1200 + Math.random() * 900}ms`);
    piece.style.setProperty("--delay", `${Math.random() * 100}ms`);
    piece.style.setProperty("--size", `${5 + Math.random() * 5}px`);
    burst.appendChild(piece);
  }

  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 2400);
}
function checkScratchProgress(force = false) {
  if (cardCleared) return;
  const now = performance.now();
  if (!force && now - lastProgressCheck < 80) return;
  lastProgressCheck = now;

  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  const columns = 40;
  const rows = 24;
  let clearedSamples = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const x = Math.floor(((column + 0.5) * canvas.width) / columns);
      const y = Math.floor(((row + 0.5) * canvas.height) / rows);
      if (pixels[(y * canvas.width + x) * 4 + 3] === 0) clearedSamples += 1;
    }
  }

  if (clearedSamples / (columns * rows) >= 0.45) {
    cardCleared = true;
    scratching = false;
    lastPoint = null;
    scratchBox.classList.add("is-cleared");
    showScratchConfetti();
  }
}
function scratch(event) {
  if (!scratching || cardCleared) return;
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
  checkScratchProgress();
}
canvas.addEventListener("pointerdown", (event) => {
  if (cardCleared) return;
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
  checkScratchProgress(true);
});
canvas.addEventListener("pointercancel", () => {
  scratching = false;
  lastPoint = null;
  checkScratchProgress(true);
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
