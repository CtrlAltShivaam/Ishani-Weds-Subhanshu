const $ = (selector) => document.querySelector(selector);
const RSVP_WHATSAPP_NUMBER = '917797179770';
const cover = $('#cover');
const menu = $('#nav');
const menuButton = $('#menuButton');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

$('#openInvite').addEventListener('click', () => {
  cover.classList.add('hide-cover');
  $('#invite').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => cover.remove(), 900);
  startAudio();
});

for (let i = 0; i < 20; i += 1) {
  const petal = document.createElement('i');
  petal.className = 'petal';
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${7 + Math.random() * 9}s`;
  petal.style.animationDelay = `${-Math.random() * 12}s`;
  petal.style.setProperty('--drift', `${Math.random() * 160 - 80}px`);
  $('#petals').appendChild(petal);
}

addEventListener('scroll', () => {
  const progress = scrollY / (document.documentElement.scrollHeight - innerHeight) * 100;
  $('#progress').style.width = `${progress}%`;
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
  document.querySelectorAll('.time b').forEach((element, index) => {
    element.textContent = String(values[index]).padStart(2, '0');
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const canvas = $('#scratchCanvas');
const scratchBox = $('#scratch');
const context = canvas.getContext('2d');
function setupScratch() {
  const bounds = scratchBox.getBoundingClientRect();
  const scale = devicePixelRatio || 1;
  context.setTransform(1, 0, 0, 1, 0, 0);
  canvas.width = bounds.width * scale;
  canvas.height = bounds.height * scale;
  context.scale(scale, scale);
  context.fillStyle = '#b9a98f';
  context.fillRect(0, 0, bounds.width, bounds.height);
  context.fillStyle = '#efe4c6';
  context.font = 'bold 12px Marcellus';
  context.textAlign = 'center';
  context.fillText('✦  SCRATCH TO REVEAL  ✦', bounds.width / 2, bounds.height / 2);
  context.globalCompositeOperation = 'destination-out';
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.lineWidth = 46;
}
setupScratch();
let scratching = false;
let lastPoint = null;
function scratch(event) {
  if (!scratching) return;
  const bounds = canvas.getBoundingClientRect();
  const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
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
canvas.addEventListener('pointerdown', (event) => { event.preventDefault(); scratching = true; scratchBox.classList.add('is-scratching'); lastPoint = null; canvas.setPointerCapture(event.pointerId); scratch(event); });
canvas.addEventListener('pointermove', (event) => { if (scratching) event.preventDefault(); scratch(event); });
canvas.addEventListener('pointerup', () => { scratching = false; lastPoint = null; });
canvas.addEventListener('pointercancel', () => { scratching = false; lastPoint = null; });
addEventListener('resize', setupScratch);

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const calendar = [
  'BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT',
  'DTSTART:20261126T193000', 'DTEND:20261126T233000',
  'SUMMARY:Ishani weds Subhanshu',
  'LOCATION:Kalyan Mandap, Mahanagar, Lucknow',
  'DESCRIPTION:শুভ বিবাহ', 'END:VEVENT', 'END:VCALENDAR',
].join('\r\n');
$('#calendar').href = `data:text/calendar;charset=utf8,${encodeURIComponent(calendar)}`;

$('#rsvpForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const status = $('#formStatus');
  const name = $('#guest').value.trim();
  const people = $('#count').value;
  if (!name) {
    status.className = 'status error';
    status.textContent = 'অনুগ্রহ করে আপনার নাম লিখুন।';
    return;
  }
  status.className = 'status success';
  status.textContent = `ধন্যবাদ, ${name}। আপনার RSVP প্রস্তুত হয়েছে।`;
  const message = `নমস্কার, আমি ${name}। Ishani ও Subhanshu-র বিবাহে ${people} উপস্থিত থাকব।`;
  const whatsappUrl = `https://wa.me/${RSVP_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener');
});

$('#phoneLink').addEventListener('click', (event) => {
  event.preventDefault();
  const status = $('#formStatus');
  status.className = 'status error';
  status.textContent = 'ফোন নম্বর যোগ করা হলে এই বোতামটি সরাসরি কল করবে।';
});

if (location.hash === '#not-found' || location.hash === '#empty-state') {
  document.querySelectorAll('main > *').forEach((element) => { element.hidden = true; });
  $(location.hash).hidden = false;
}

let audio;
let playing = false;
function startAudio() {
  if (playing) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  audio = audio || new AudioContext();
  const gain = audio.createGain();
  gain.gain.value = 0.035;
  gain.connect(audio.destination);
  [146.83, 220, 293.66].forEach((frequency) => {
    const oscillator = audio.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(gain);
    oscillator.start();
  });
  playing = true;
  $('#music').classList.add('on');
}
$('#music').addEventListener('click', () => {
  if (!audio) { startAudio(); return; }
  if (playing) { audio.suspend(); playing = false; $('#music').classList.remove('on'); }
  else { audio.resume(); playing = true; $('#music').classList.add('on'); }
});
