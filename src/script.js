const $ = (selector) => document.querySelector(selector);
const invitationData = {
  bride: {
    eventsIntro: "Four occasions, one beautiful celebration",
    contact: { phone: "+917347825755", whatsapp: "+917347825755" },
    events: [
      {
        name: "Mehendi",
        date: "25 November 2026",
        time: "3 PM",
        venue: "Kapoor's Inn Banquet Hall & Suites",
        address: "B-16/1, Kapurthala Road, Lucknow",
        tag: "HENNA HUES",
        image: "src/images/Mehendi.png",
        theme: "mehendi",
      },
      {
        name: "Sangeet",
        date: "25 November 2026",
        time: "6 PM",
        venue: "Kapoor's Inn Banquet Hall & Suites",
        address: "B-16/1, Kapurthala Road, Lucknow",
        tag: "INDIGO NIGHTS",
        image: "src/images/Sitar Tabla.png",
        theme: "sangeet",
      },
      {
        name: "Haldi",
        date: "26 November 2026",
        time: "11 AM onwards",
        venue: "Kalyan Mandap",
        address: "Mahanagar, Lucknow",
        tag: "TURMERIC & MARIGOLD",
        image: "src/images/Haldi.png",
        theme: "haldi",
      },
      {
        name: "Wedding Ceremony",
        date: "26 November 2026",
        time: "7 PM onwards",
        venue: "Kalyan Mandap",
        address: "Mahanagar, Lucknow",
        image: "src/images/Wedding.png",
        theme: "biye",
        rituals: [
          { name: "Welcoming the groom", time: "7:00 PM" },
          { name: "Garland exchange", time: "8:00 PM" },
          { name: "Seven sacred rounds", time: "9:00 PM" },
          { name: "Sindoor ceremony", time: "10:00 PM" },
        ],
      },
    ],
    dressCode: {
      enabled: true,
      items: [
        {
          name: "Gaye Holud",
          palette: "Turmeric & Marigold",
          mood: "Sunshine shades",
          swatch: "",
        },
        {
          name: "Mehendi",
          palette: "Henna Green",
          mood: "Henna hues",
          swatch: "green",
        },
        {
          name: "Sangeet",
          palette: "Indigo Nights",
          mood: "Peacock glam",
          swatch: "blue",
        },
        {
          name: "Wedding Ceremony",
          palette: "Benarasi & Gold",
          mood: "Lal-paar shada",
          swatch: "red",
        },
      ],
    },
    venues: [
      {
        name: "Kalyan Mandap",
        description: "Wedding Ceremony · Mahanagar, Lucknow",
        address: "Kalyan Mandap Mahanagar Lucknow",
        mapUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Kalyan%20Mandap%20Mahanagar%20Lucknow",
        mapEmbedUrl:
          "https://maps.google.com/maps?q=Kalyan%20Mandap%20Mahanagar%20Lucknow&output=embed",
      },
      {
        name: "Kapoor's Inn",
        description: "Mehendi and Sangeet · B-16/1, Kapurthala Road, Lucknow",
        address: "Kapoor's Inn Banquet Hall Lucknow",
        mapUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Kapoor's%20Inn%20Banquet%20Hall%20Lucknow",
        mapEmbedUrl:
          "https://maps.google.com/maps?q=Kapoor's%20Inn%20Banquet%20Kapurthala%20Road%20Lucknow&output=embed",
      },
    ],
    countdown: {
      targetDate: "2026-11-26T19:00:00",
      displayDate: "26 November 2026",
      displayTime: "Thursday · 7 PM onwards",
    },
    scratchCard: { date: "26 November 2026", time: "Thursday · 7 PM onwards" },
  },
  groom: {
    eventsIntro: "Seven celebrations, one beautiful celebration",
    contact: { phone: "+919116812724", whatsapp: "+919116812724" },
    events: [
      {
        name: "Nani Mukh Puja",
        date: "24 November 2026",
        time: "",
        venue: "",
        address: "592/10, Bangalo Tola, Kharika, Teli Bagh, Lucknow",
        image: "src/images/NaniMukhi.png",
        theme: "mehendi",
      },
      {
        name: "Aiburo Bhaat",
        date: "25 November 2026",
        time: "",
        venue: "",
        address: "592/10, Bangalo Tola, Kharika, Teli Bagh, Lucknow",
        image: "src/images/Kalash2.png",
        theme: "sangeet",
      },
      {
        name: "Haldi",
        date: "26 November 2026",
        time: "",
        venue: "",
        address: "592/10, Bangalo Tola, Kharika, Teli Bagh, Lucknow",
        image: "src/images/Haldi.png",
        theme: "haldi",
      },
      {
        name: "Barat",
        date: "26 November 2026",
        time: "",
        venue: "Kalyan Mandapam",
        address: "",
        type: "route",
        from: "Hanuman Mandir, Telibagh",
        to: "Kalyan Mandapam",
        image: "src/images/Barat.png",
        theme: "biye",
      },
      {
        name: "Bidai",
        date: "27 November 2026",
        time: "",
        venue: "Kalyan Mandapam",
        address: "Mahanagar, Lucknow",
        image: "src/images/Bidai.png",
        theme: "biye",
      },
      {
        name: "Cocktail",
        date: "27 November 2026",
        time: "",
        venue: "Purv Sainik Kalyan Nigam",
        address: "Lucknow",
        mapUrl: "https://maps.app.goo.gl/9e692tqTbMVGnjTD7?g_st=aw",
        image: "src/images/Cheers.png",
        theme: "sangeet",
      },
      {
        name: "Reception",
        date: "28 November 2026",
        time: "",
        venue: "Purv Sainik Kalyan Nigam",
        address: "Lucknow",
        mapUrl: "https://maps.app.goo.gl/9e692tqTbMVGnjTD7?g_st=aw",
        image: "src/images/reception.png",
        theme: "biye",
      },
    ],
    dressCode: { enabled: false, items: [] },
    venues: [
      {
        name: "Family home",
        description:
          "24-26 November · Nani Mukhi Puja, Aiburo Bhaat and morning Haldi",
        address: "592/10, Bangali Tola, Kharika, Teli Bagh, Lucknow",
        mapUrl: "https://maps.app.goo.gl/GTfDKJKTTX4D6GJn8",
        mapEmbedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.60329714843422!2d80.94671058918829!3d26.78734607969964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb007bed9bb7%3A0xb3a90eb843f00aa6!2sNJS%20durga%20puja!5e0!3m2!1sen!2sin!4v1791032607727!5m2!1sen!2sin",
      },
      {
        name: "Barat Route",
        description: "26 November",
        type: "route",
        from: "Hanuman Mandir, Telibagh",
        to: "Kalyan Mandapam",
        mapUrl:
          "https://www.google.com/maps/dir/?api=1&origin=Hanuman%20Mandir%2C%20Telibagh%2C%20Lucknow&destination=Kalyan%20Mandap%2C%20Mahanagar%2C%20Lucknow",
        mapEmbedUrl:
          "https://maps.google.com/maps?q=Hanuman%20Mandir%2C%20Telibagh%2C%20Lucknow&output=embed",
      },
      {
        name: "Kalyan Mandapam",
        description: "27 November · Bidai",
        address: "Mahanagar, Lucknow",
        mapUrl:
          "https://www.google.com/maps/dir/?api=1&destination=Kalyan%20Mandap%20Mahanagar%20Lucknow",
        mapEmbedUrl:
          "https://maps.google.com/maps?q=Kalyan%20Mandapam%2C%20Mahanagar%2C%20Lucknow&output=embed",
      },
      {
        name: "Purv Sainik Kalyan Nigam",
        description: "27 November · Cocktail; 28 November · Reception",
        address: "Lucknow",
        mapUrl: "https://maps.app.goo.gl/9e692tqTbMVGnjTD7?g_st=aw",
        mapEmbedUrl:
          "https://maps.google.com/maps?q=Purv%20Sainik%20Kalyan%20Nigam%2C%20Lucknow&output=embed",
      },
    ],
    countdown: {
      targetDate: "2026-11-26T19:00:00",
      displayDate: "26 November 2026",
      displayTime: "Thursday · 7 PM onwards",
    },
    scratchCard: { date: "26 November 2026", time: "Thursday · 7 PM onwards" },
  },
};
const sharedMusic = { youtubeVideoId: "u2XOyXN1Ppo", start: 33 };
const escapeHTML = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
const querySide = new URLSearchParams(location.search).get("side");
let activeSide = ["bride", "groom"].includes(querySide) ? querySide : "";
let scratchReady = false;
let scratchNeedsReset = false;
const sidePicker = $("#sidePicker");
const invitationPage = $("#invitationPage");
const eventGrid = $("#eventGrid");
const eventPrevious = $("#eventPrevious");
const eventNext = $("#eventNext");
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }),
  { threshold: 0.12 },
);
function observeRevealElements(root) {
  root
    .querySelectorAll(".reveal")
    .forEach((element) => revealObserver.observe(element));
}
function updateEventControls() {
  const maxScroll = eventGrid.scrollWidth - eventGrid.clientWidth;
  const initialOffset =
    Number.parseFloat(getComputedStyle(eventGrid).paddingLeft) || 0;
  eventPrevious.disabled = eventGrid.scrollLeft <= initialOffset + 1;
  eventNext.disabled = maxScroll - eventGrid.scrollLeft <= 1;
}
function scrollEvents(direction) {
  const firstCard = eventGrid.querySelector(".event-card");
  if (!firstCard) return;
  const gap = Number.parseFloat(getComputedStyle(eventGrid).columnGap) || 0;
  eventGrid.scrollBy({
    left: direction * (firstCard.getBoundingClientRect().width + gap),
    behavior: "instant",
  });
}
eventPrevious.addEventListener("click", () => scrollEvents(-1));
eventNext.addEventListener("click", () => scrollEvents(1));
eventGrid.addEventListener("scroll", updateEventControls, { passive: true });
addEventListener("resize", updateEventControls);
function showSidePicker() {
  invitationPage.hidden = true;
  sidePicker.hidden = false;
  document.body.classList.add("choosing-side");
  window.scrollTo({ top: 0, behavior: "instant" });
}
function renderInvitation(side) {
  activeSide = side;
  document.body.classList.remove("choosing-side");
  const data = invitationData[side];
  sidePicker.hidden = true;
  invitationPage.hidden = false;
  $("#switchInvitation").textContent =
    side === "groom" ? "Checkout Bride's invite" : "Checkout Groom's invite";
  $("#eventsIntro").textContent = data.eventsIntro;
  eventGrid.innerHTML = data.events
    .map((event) => {
      const location = [event.venue, event.address]
        .filter(Boolean)
        .join("<br>");
      const artwork = event.image
        ? `<img src="${escapeHTML(event.image)}" alt="" />`
        : "";
      const imageSlot = artwork
        ? `<div class="event-icon has-art${event.type === "route" ? " event-icon-route" : ""}">${artwork}</div>`
        : '<div class="event-icon event-image-placeholder" role="img" aria-label="Image placeholder"><span>Image</span></div>';
      const route =
        event.type === "route"
          ? `<div class="event-route"><span>${escapeHTML(event.from)}</span><b aria-hidden="true">↓</b><strong>BARAT</strong><b aria-hidden="true">↓</b><span>${escapeHTML(event.to)}</span></div>`
          : "";
      const rituals = event.rituals?.length
        ? `<div class="rituals">${event.rituals.map((ritual) => `<div class="ritual">${escapeHTML(ritual.name)}<time>${escapeHTML(ritual.time)}</time></div>`).join("")}</div>`
        : "";
      return `<article class="event-card plaque reveal ${escapeHTML(event.theme || "")}${event.name === "Haldi" ? " event-haldi" : ""}" tabindex="0" aria-label="${escapeHTML(event.name)}, ${escapeHTML(event.date)}"><div class="date">${escapeHTML(event.date)}${event.time ? ` · ${escapeHTML(event.time)}` : ""}</div>${imageSlot}<div class="event-copy"><h4>${escapeHTML(event.name)}</h4>${route}${event.type !== "route" && location ? `<div class="place">${location}</div>` : ""}${event.tag ? `<div class="tag">${escapeHTML(event.tag)}</div>` : ""}${rituals}</div></article>`;
    })
    .join("");
  observeRevealElements(eventGrid);
  updateEventControls();
  requestAnimationFrame(updateEventControls);
  eventGrid.querySelectorAll(".event-card").forEach((card) => {
    card.addEventListener("pointerenter", () => {
      if (!matchMedia("(hover: hover)").matches) return;
      const trackBounds = eventGrid.getBoundingClientRect();
      const cardBounds = card.getBoundingClientRect();
      const safeInset = 16;
      let scrollDelta = 0;
      if (cardBounds.left < trackBounds.left + safeInset) {
        scrollDelta = cardBounds.left - trackBounds.left - safeInset;
      } else if (cardBounds.right > trackBounds.right - safeInset) {
        scrollDelta = cardBounds.right - trackBounds.right + safeInset;
      }
      if (scrollDelta)
        eventGrid.scrollBy({ left: scrollDelta, behavior: "instant" });
    });
    card.addEventListener("click", (event) => {
      if (matchMedia("(hover: hover)").matches) return;
      if (event.target.closest("a, button")) return;
      const wasFocused = card.classList.contains("is-focused");
      eventGrid
        .querySelectorAll(".event-card.is-focused")
        .forEach((focusedCard) => focusedCard.classList.remove("is-focused"));
      if (!wasFocused) card.classList.add("is-focused");
    });
  });
  const dressSection = $("#wardrobe");
  dressSection.hidden = !data.dressCode.enabled;
  $(".nav a[href='#wardrobe']").hidden = !data.dressCode.enabled;
  $("#dressList").innerHTML = data.dressCode.items
    .map(
      (item) =>
        `<div class="dress"><div class="swatch ${escapeHTML(item.swatch)}"></div><div><b>${escapeHTML(item.name)}</b><span>${escapeHTML(item.palette)}</span></div><em>${escapeHTML(item.mood)}</em></div>`,
    )
    .join("");
  $("#dressList")
    .querySelectorAll(".swatch")
    .forEach((swatch) => {
      if (getComputedStyle(swatch).backgroundImage !== "none") {
        swatch.classList.add("has-image");
      }
    });
  $("#venueGrid").innerHTML = data.venues
    .map((venue) => {
      const map = venue.mapEmbedUrl
        ? `<iframe class="map" loading="lazy" title="${escapeHTML(venue.name)} map" src="${escapeHTML(venue.mapEmbedUrl)}"></iframe>`
        : "";
      const route =
        venue.type === "route"
          ? `<div class="venue-route"><span>${escapeHTML(venue.from)}</span><b aria-hidden="true">↓</b><strong>${escapeHTML(venue.to)}</strong></div>`
          : "";
      const directions = venue.mapUrl
        ? `<a class="direction" href="${escapeHTML(venue.mapUrl)}" target="_blank" rel="noopener">GET DIRECTIONS ↗</a>`
        : "";
      return `<article class="venue-card">${map}<div class="venue-info"><h4>${escapeHTML(venue.name)}</h4><p>${escapeHTML(venue.description)}${venue.address ? `<br>${escapeHTML(venue.address)}` : ""}</p>${route}${directions}</div></article>`;
    })
    .join("");
  const contactNumber = data.contact.phone.replace(/\D/g, "");
  $("#contactCall").href = `tel:+${contactNumber}`;
  $("#contactWhatsapp").href =
    `https://wa.me/${data.contact.whatsapp.replace(/\D/g, "")}`;
  $("#phoneLink").href = `tel:+${contactNumber}`;
  $("#countdown").dataset.targetDate = data.countdown.targetDate;
  $("#countdown").dataset.displayDate = data.countdown.displayDate;
  $("#countdown").dataset.displayTime = data.countdown.displayTime;
  $("#scratch .revealed strong").textContent = data.scratchCard.date;
  $("#scratch .revealed span").textContent = data.scratchCard.time;
  scratchNeedsReset = true;
  if (scratchReady) {
    setupScratch(true);
    scratchNeedsReset = false;
  }
  localStorage.setItem("invitationSide", side);
  if (new URLSearchParams(location.search).get("side") !== side) {
    const url = new URL(location.href);
    url.searchParams.set("side", side);
    history.replaceState(null, "", url);
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}
if (activeSide) renderInvitation(activeSide);
else showSidePicker();
sidePicker
  .querySelectorAll("[data-side]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      renderInvitation(button.dataset.side),
    ),
  );
document.querySelectorAll(".dress .swatch").forEach((swatch) => {
  const image = getComputedStyle(swatch).backgroundImage;
  if (image && image !== "none") swatch.classList.add("has-image");
});
const contactNumber = invitationData[
  activeSide || "bride"
].contact.phone.replace(/\D/g, "");
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
$("#switchInvitation").addEventListener("click", () => {
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
  renderInvitation(activeSide === "groom" ? "bride" : "groom");
});

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

if (document.readyState === "complete") {
  startAudio();
} else {
  window.addEventListener(
    "load",
    () => {
      startAudio();
    },
    { once: true },
  );
}

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

function updateCountdown() {
  if (!activeSide) return;
  const weddingDate = new Date($("#countdown").dataset.targetDate);
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
let scratching = false;
let lastPoint = null;
let lastProgressCheck = 0;
function setupScratch(reset = false) {
  if (reset) {
    cardCleared = false;
    scratching = false;
    lastPoint = null;
    lastProgressCheck = 0;
    scratchBox.classList.remove("is-cleared", "is-scratching");
  }
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
scratchReady = true;
setupScratch(scratchNeedsReset);
scratchNeedsReset = false;
document.fonts?.ready.then(() => {
  if (!scratchBox.classList.contains("is-scratching")) setupScratch();
});
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

observeRevealElements(document);

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
  const whatsappNumber = invitationData[activeSide].contact.whatsapp.replace(
    /\D/g,
    "",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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
