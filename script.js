/* ==========================================================
   EDIT THIS SECTION FIRST: your cafe details and data
   ========================================================== */
const CONFIG = {
  cafeName: "Auro Cafe",
  whatsapp: "910000000000",        // country code + number, no + or spaces (91 = India)
  phoneDisplay: "+91 00000 00000",
  currency: "₹",
  timezone: "Asia/Kolkata",
  newsletterEndpoint: ""           // optional: your Formspree URL, e.g. https://formspree.io/f/xxxxxx
};

// Opening hours in 24h time. Index 0 = Sunday ... 6 = Saturday. Use null for closed.
const HOURS = [
  [9, 23],   // Sunday
  [8, 22],   // Monday
  [8, 22],   // Tuesday
  [8, 22],   // Wednesday
  [8, 22],   // Thursday
  [8, 22],   // Friday
  [8, 23]    // Saturday
];

// Photos. Sample photos from Unsplash (free to use). To use your OWN photos,
// put them in an "images" folder and replace a link with e.g. "images/latte.jpg".
const IMG = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const PHOTOS = {
  cappuccino: "photo-1673568438355-6136a2034d4b",
  latte:      "photo-1517701604599-bb29b565090c",
  iced:       "photo-1767471716700-2b3aa77b1ab6",
  croissant:  "photo-1702090888946-d330cd452f5e",
  cake:       "photo-1768260731727-275f15ed2556",
  interior:   "photo-1554118811-1e0d58224f24",
  barista:    "photo-1530798749-f62306374512",
  plants:     "photo-1709193114557-f63b46db48da"
};

// Menu. "fav: true" shows the item in Favourites. "img" adds a photo.
const MENU = {
  "Hot Coffee": [
    { id: "h1", name: "Espresso", desc: "Rich, bold single shot", price: 100 },
    { id: "h2", name: "Americano", desc: "Espresso with hot water", price: 120 },
    { id: "h3", name: "Cappuccino", desc: "Espresso, steamed milk, thick foam", price: 160 },
    { id: "h4", name: "Signature Latte", desc: "Smooth espresso with steamed milk and a touch of caramel", price: 180, img: PHOTOS.cappuccino, fav: true },
    { id: "h5", name: "Caffè Latte", desc: "Silky, milky and mellow", price: 170, img: PHOTOS.latte },
    { id: "h6", name: "Mocha", desc: "Espresso, chocolate and milk", price: 190 },
    { id: "h7", name: "Filter Coffee", desc: "Traditional South Indian style", price: 70 }
  ],
  "Cold Drinks": [
    { id: "c1", name: "Iced Latte", desc: "Espresso over ice with cold milk and cream", price: 190, img: PHOTOS.iced, fav: true },
    { id: "c2", name: "Iced Caramel Macchiato", desc: "Chilled, creamy and layered with caramel", price: 220 },
    { id: "c3", name: "Cold Brew", desc: "Slow steeped for 18 hours", price: 210 },
    { id: "c4", name: "Frappe", desc: "Blended, creamy and chilled", price: 230 },
    { id: "c5", name: "Fresh Lime Soda", desc: "Sweet, salt or mixed", price: 90 },
    { id: "c6", name: "Mango Smoothie", desc: "Fresh mango and yogurt", price: 170 }
  ],
  "Bakes & Bites": [
    { id: "b1", name: "Butter Croissant", desc: "Flaky, golden, baked fresh every morning", price: 120, img: PHOTOS.croissant, fav: true },
    { id: "b2", name: "Veg Sandwich", desc: "Grilled with cheese and veggies", price: 150 },
    { id: "b3", name: "Chicken Panini", desc: "Pressed with herbs and cheese", price: 210 },
    { id: "b4", name: "French Fries", desc: "Crispy and lightly salted", price: 110 },
    { id: "b5", name: "Veg Puff", desc: "Golden, flaky and warm", price: 60 },
    { id: "b6", name: "Garlic Bread", desc: "With cheese dip", price: 130 }
  ],
  "Desserts": [
    { id: "d1", name: "Chocolate Brownie", desc: "Warm, fudgy, with ice cream", price: 150 },
    { id: "d2", name: "Blueberry Muffin", desc: "Soft and fruity", price: 100 },
    { id: "d3", name: "Chocolate Cake Slice", desc: "Rich layers with whipped cream and a cherry", price: 200, img: PHOTOS.cake, fav: true },
    { id: "d4", name: "Choco Chip Cookie", desc: "Baked daily", price: 70 }
  ]
};

// Gallery (class "wide" or "tall" makes a bigger tile)
const GALLERY = [
  { img: PHOTOS.interior,   label: "Our cozy corner",       cls: "wide" },
  { img: PHOTOS.cappuccino, label: "Latte art, made fresh", cls: "" },
  { img: PHOTOS.croissant,  label: "Baked every morning",   cls: "tall" },
  { img: PHOTOS.barista,    label: "Crafted by hand",       cls: "" },
  { img: PHOTOS.iced,       label: "Chilled favourites",    cls: "" },
  { img: PHOTOS.plants,     label: "Green and calm",        cls: "wide" },
  { img: PHOTOS.cake,       label: "Sweet endings",         cls: "" },
  { img: PHOTOS.latte,      label: "Your daily cup",        cls: "" }
];

// Reviews (replace with real ones from your customers)
const REVIEWS = [
  { name: "Priya S.", stars: 5, text: "The best latte in town and such a calm place to study. I come here every week." },
  { name: "Arjun K.", stars: 5, text: "Loved the cold brew and the brownie. Friendly staff and a lovely atmosphere." },
  { name: "Meera R.", stars: 4, text: "Great spot to catch up with friends. The croissants are always fresh." },
  { name: "Karthik V.", stars: 5, text: "Booked a table for my friend's birthday and they made it really special." }
];

/* ==========================================================
   CODE BELOW: you usually do not need to change anything
   ========================================================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = n => CONFIG.currency + n.toLocaleString("en-IN");
const waLink = text => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

function store(key, value) {
  try { if (value === undefined) return JSON.parse(localStorage.getItem(key)); localStorage.setItem(key, JSON.stringify(value)); } catch (e) { return null; }
}
function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = msg; t.setAttribute("role", "status");
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1600);
}

// Hide any image that fails to load (the soft background shows instead)
document.addEventListener("error", e => {
  if (e.target.tagName === "IMG") e.target.classList.add("broken");
}, true);

/* ---------- Header: solid after scrolling ---------- */
const header = $("#header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Theme ---------- */
const themeBtn = $("#themeToggle");
function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
setTheme(document.documentElement.getAttribute("data-theme") || "light");
themeBtn.addEventListener("click", () => {
  setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/* ---------- Mobile menu ---------- */
const links = $("#links");
function toggleMenu(open) {
  links.classList.toggle("open", open);
  header.classList.toggle("open", open);
}
$("#menuToggle").addEventListener("click", () => toggleMenu(!links.classList.contains("open")));
$$("a", links).forEach(a => a.addEventListener("click", () => toggleMenu(false)));

/* ---------- Opening hours + "open now" ---------- */
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function fmt(h) {
  const hh = Math.floor(h), mm = Math.round((h - hh) * 60);
  const ap = hh >= 12 && hh < 24 ? "PM" : "AM";
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${h12}${mm ? ":" + String(mm).padStart(2, "0") : ":00"} ${ap}`;
}
function nowInCafe() {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: CONFIG.timezone, weekday: "long", hour: "numeric", minute: "numeric", hour12: false
    }).formatToParts(new Date());
    const get = t => parts.find(p => p.type === t).value;
    return { day: DAYS.indexOf(get("weekday")), hour: (+get("hour") % 24) + (+get("minute")) / 60 };
  } catch (e) {
    const d = new Date(); return { day: d.getDay(), hour: d.getHours() + d.getMinutes() / 60 };
  }
}
function renderHours() {
  const { day, hour } = nowInCafe();
  const today = HOURS[day];
  const open = today && hour >= today[0] && hour < today[1];
  const status = $("#openStatus");
  status.textContent = open ? "Open now" : "Closed now";
  status.className = open ? "status-open" : "status-closed";
  $("#todayHours").textContent = today ? `Today ${fmt(today[0])} – ${fmt(today[1])}` : "Closed today";
  // Monday-first list
  const order = [1, 2, 3, 4, 5, 6, 0];
  $("#hoursList").innerHTML = order.map(d => {
    const h = HOURS[d];
    return `<li class="${d === day ? "today" : ""}"><span>${DAYS[d]}</span><span>${h ? fmt(h[0]) + " – " + fmt(h[1]) : "Closed"}</span></li>`;
  }).join("");
}

/* ---------- Menu + favourites ---------- */
const ALL_ITEMS = Object.values(MENU).flat();

function itemHTML(i) {
  return `<div class="item">
    ${i.img ? `<img class="thumb" src="${IMG(i.img, 200)}" alt="${i.name}" loading="lazy">` : ""}
    <div class="info-text"><h4>${i.name}</h4><p>${i.desc}</p></div>
    <div class="right"><span class="price">${money(i.price)}</span>
    <button class="add-btn" data-add="${i.id}" aria-label="Add ${i.name} to order">+</button></div>
  </div>`;
}

function renderMenu() {
  const cats = Object.keys(MENU);
  $("#tabs").innerHTML = cats.map((c, n) =>
    `<button class="tab${n === 0 ? " active" : ""}" role="tab" data-cat="${n}">${c}</button>`).join("");
  $("#menuLists").innerHTML = cats.map((c, n) =>
    `<div class="menu-list${n === 0 ? " active" : ""}" id="cat${n}">${MENU[c].map(itemHTML).join("")}</div>`).join("");

  $$(".tab").forEach(tab => tab.addEventListener("click", () => {
    $$(".tab").forEach(t => t.classList.remove("active"));
    $$(".menu-list").forEach(l => l.classList.remove("active"));
    tab.classList.add("active");
    $("#cat" + tab.dataset.cat).classList.add("active");
  }));

  $("#featuredCards").innerHTML = ALL_ITEMS.filter(i => i.fav).map(i =>
    `<article class="pcard">
      <div class="pimg"><img src="${IMG(i.img, 700)}" alt="${i.name}" loading="lazy"></div>
      <div class="pbody"><h3>${i.name}</h3><p>${i.desc}</p>
        <div class="pfoot"><span class="price">${money(i.price)}</span>
        <button class="btn small" data-add="${i.id}">Add to order</button></div>
      </div></article>`).join("");
}

/* ---------- Cart ---------- */
let cart = store("cart") || {};   // { id: qty }
const drawer = $("#drawer"), overlay = $("#overlay");

function cartTotals() {
  let count = 0, total = 0;
  for (const id in cart) {
    const item = ALL_ITEMS.find(i => i.id === id);
    if (!item) { delete cart[id]; continue; }
    count += cart[id]; total += cart[id] * item.price;
  }
  return { count, total };
}

function renderCart() {
  const { count, total } = cartTotals();
  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = money(total);
  const ids = Object.keys(cart);
  $("#cartItems").innerHTML = ids.length
    ? ids.map(id => {
        const i = ALL_ITEMS.find(x => x.id === id);
        return `<div class="line">
          <div><h4>${i.name}</h4><small>${money(i.price)} each</small></div>
          <div class="qty">
            <button data-dec="${id}" aria-label="Remove one ${i.name}">−</button>
            <span>${cart[id]}</span>
            <button data-inc="${id}" aria-label="Add one ${i.name}">+</button>
          </div></div>`;
      }).join("")
    : `<p class="empty">Your cart is empty.<br>Add something tasty from the menu.</p>`;
  store("cart", cart);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  toast(ALL_ITEMS.find(i => i.id === id).name + " added");
}
function openCart() {
  drawer.classList.add("open"); overlay.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}
function closeCart() {
  drawer.classList.remove("open"); overlay.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) return addToCart(add.dataset.add);
  const inc = e.target.closest("[data-inc]");
  if (inc) { cart[inc.dataset.inc]++; return renderCart(); }
  const dec = e.target.closest("[data-dec]");
  if (dec) {
    const id = dec.dataset.dec;
    if (--cart[id] <= 0) delete cart[id];
    return renderCart();
  }
});
$("#cartOpen").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
$("#clearCart").addEventListener("click", () => { cart = {}; renderCart(); });

$("#checkout").addEventListener("click", () => {
  const msg = $("#orderMsg");
  const { count, total } = cartTotals();
  const name = $("#orderName").value.trim();
  msg.className = "form-msg";
  if (!count) { msg.textContent = "Please add at least one item."; return; }
  if (!name) { msg.textContent = "Please enter your name."; return; }
  const lines = Object.keys(cart).map(id => {
    const i = ALL_ITEMS.find(x => x.id === id);
    return `• ${cart[id]} x ${i.name} = ${money(cart[id] * i.price)}`;
  });
  const text = `Hello ${CONFIG.cafeName}! New order\n\nName: ${name}\nType: ${$("#orderType").value}\n\n${lines.join("\n")}\n\nTotal: ${money(total)}`;
  msg.textContent = "";
  window.open(waLink(text), "_blank", "noopener");
});

/* ---------- Gallery + lightbox ---------- */
$("#galleryGrid").innerHTML = GALLERY.map((g, n) =>
  `<button class="shot ${g.cls}" data-shot="${n}" data-label="${g.label}" aria-label="View: ${g.label}">
    <img src="${IMG(g.img, g.cls ? 1000 : 600)}" alt="${g.label}" loading="lazy"></button>`).join("");

const lb = $("#lightbox");
let lbIndex = 0;
function showLightbox(n) {
  lbIndex = (n + GALLERY.length) % GALLERY.length;
  const g = GALLERY[lbIndex];
  $("#lbImg").src = IMG(g.img, 1600);
  $("#lbImg").alt = g.label;
  $("#lbCaption").textContent = g.label;
  lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
}
function closeLightbox() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); }
$("#galleryGrid").addEventListener("click", e => {
  const s = e.target.closest("[data-shot]");
  if (s) showLightbox(+s.dataset.shot);
});
$("#lbClose").addEventListener("click", closeLightbox);
$("#lbPrev").addEventListener("click", () => showLightbox(lbIndex - 1));
$("#lbNext").addEventListener("click", () => showLightbox(lbIndex + 1));
lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });

/* ---------- Reviews carousel ---------- */
let rev = 0;
function showReview(n) {
  rev = (n + REVIEWS.length) % REVIEWS.length;
  const r = REVIEWS[rev];
  $("#reviewBox").innerHTML =
    `<div class="stars" aria-label="${r.stars} out of 5 stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
     <p>“${r.text}”</p><strong>${r.name}</strong>`;
  $$(".dot").forEach((d, i) => d.classList.toggle("active", i === rev));
}
$("#dots").innerHTML = REVIEWS.map((_, i) => `<button class="dot" data-dot="${i}" aria-label="Review ${i + 1}"></button>`).join("");
$("#dots").addEventListener("click", e => { const d = e.target.closest("[data-dot]"); if (d) showReview(+d.dataset.dot); });
$("#prevReview").addEventListener("click", () => showReview(rev - 1));
$("#nextReview").addEventListener("click", () => showReview(rev + 1));
showReview(0);

/* ---------- Table booking ---------- */
const dateInput = $("#bookDate");
const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.min = iso(new Date());
dateInput.value = iso(new Date());

$("#bookForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, msg = $("#bookMsg");
  const name = f.name.value.trim(), phone = f.phone.value.trim();
  msg.className = "form-msg";
  if (!name || !phone) { msg.textContent = "Please enter your name and phone number."; return; }
  if (!f.date.value || !f.time.value) { msg.textContent = "Please choose a date and time."; return; }
  const text = `Hello ${CONFIG.cafeName}! I would like to book a table.\n\nName: ${name}\nPhone: ${phone}\nDate: ${f.date.value}\nTime: ${f.time.value}\nGuests: ${f.guests.value}` +
    (f.notes.value.trim() ? `\nNotes: ${f.notes.value.trim()}` : "");
  msg.textContent = "Opening WhatsApp to send your request...";
  msg.classList.add("ok");
  window.open(waLink(text), "_blank", "noopener");
});

/* ---------- Newsletter ---------- */
$("#newsForm").addEventListener("submit", async e => {
  e.preventDefault();
  const email = $("#newsEmail").value.trim(), msg = $("#newsMsg");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = "Please enter a valid email address."; return; }
  if (CONFIG.newsletterEndpoint) {
    try {
      const res = await fetch(CONFIG.newsletterEndpoint, {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email })
      });
      if (!res.ok) throw new Error();
    } catch (err) { msg.textContent = "Sorry, something went wrong. Please try again."; return; }
  }
  msg.textContent = "Thank you for subscribing!";
  e.target.reset();
});

/* ---------- Misc ---------- */
const phone = $("#phoneLink");
phone.textContent = CONFIG.phoneDisplay;
phone.href = waLink(`Hello ${CONFIG.cafeName}!`);
phone.target = "_blank"; phone.rel = "noopener";
const wa = $("#waFloat");
wa.href = waLink(`Hello ${CONFIG.cafeName}!`); wa.target = "_blank"; wa.rel = "noopener";
$("#year").textContent = new Date().getFullYear();

document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeCart(); closeLightbox(); toggleMenu(false); }
  if (lb.classList.contains("open")) {
    if (e.key === "ArrowLeft") showLightbox(lbIndex - 1);
    if (e.key === "ArrowRight") showLightbox(lbIndex + 1);
  }
});

renderHours();
renderMenu();
renderCart();
