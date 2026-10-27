var imgBase = '../products/';

var products = [
  { id:1,  name:"Intel Core i5-11400F",           price:7539,   category:"CPU",         img:"PROCESSOR/1200/i5 11400F/i5-11400f.png" },
  { id:2,  name:"Intel Core i9-10900F",           price:10439,  category:"CPU",         img:"PROCESSOR/1200/i9 10900F/i9-10900f.png" },
  { id:3,  name:"Intel Core i9-14900K",           price:31899,  category:"CPU",         img:"PROCESSOR/1700/i9 14900K/i9-14900k.png" },
  { id:4,  name:"AMD Ryzen 5 5600G",              price:6959,   category:"CPU",         img:"PROCESSOR/AM4/R5 5600G/r5-5600g.png" },
  { id:5,  name:"AMD Ryzen 7 5700G",              price:9279,   category:"CPU",         img:"PROCESSOR/AM4/R7 5700G/r7-5700g.png" },
  { id:6,  name:"AMD Ryzen 9 5950X",              price:17399,  category:"CPU",         img:"PROCESSOR/AM4/R5 5950X/r9-5950x.png" },
  { id:7,  name:"AMD Ryzen 5 7600X3D",            price:14499,  category:"CPU",         img:"PROCESSOR/AM5/R5 7600X3D/r5-7600x3d.png" },
  { id:8,  name:"AMD Ryzen 5 9500F",              price:12759,  category:"CPU",         img:"PROCESSOR/AM5/R5 9500F/r5-9500f.png" },
  { id:9,  name:"AMD Ryzen 7 7800X3D",            price:20299,  category:"CPU",         img:"PROCESSOR/AM5/R7 7800X3D/r7-7800x3d.png" },
  { id:10, name:"AMD Ryzen 7 8700F",              price:13339,  category:"CPU",         img:"PROCESSOR/AM5/R7 8700F/r7-8700f.png" },
  { id:11, name:"AMD Ryzen 7 9800X3D",            price:27839,  category:"CPU",         img:"PROCESSOR/AM5/R7 9800X3D/r7-9800x3d.png" },
  { id:12, name:"AMD Ryzen 9 7950X3D",            price:34799,  category:"CPU",         img:"PROCESSOR/AM5/R9 7950X3D/r9-7950x3d.png" },
  { id:13, name:"AMD Ryzen 9 9900X3D",            price:31899,  category:"CPU",         img:"PROCESSOR/AM5/R9 9900X3D/r9-9900x3d.png" },
  { id:14, name:"AMD Ryzen 9 9950X3D",            price:43499,  category:"CPU",         img:"PROCESSOR/AM5/R9 9950X3D/r9-9950x3d.png" },
  { id:15, name:"NVIDIA GIGABYTE GTX 1070",       price:5219,   category:"GPU",         img:"GPU/1070/gtx-1070-front.png" },
  { id:16, name:"NVIDIA GIGABYTE GTX 1080",       price:6959,   category:"GPU",         img:"GPU/1080/gtx-1080-front.png" },
  { id:17, name:"NVIDIA ASUS ROG GTX 1660",       price:8119,   category:"GPU",         img:"GPU/1660/gtx-1660-front.png" },
  { id:18, name:"NVIDIA ASUS ROG GTX 1660 Super", price:9279,   category:"GPU",         img:"GPU/1660 Super/gtx-1660s-front.png" },
  { id:19, name:"NVIDIA ASUS ROG RTX 2070",       price:13339,  category:"GPU",         img:"GPU/2070/rtx-2070-front.png" },
  { id:20, name:"NVIDIA ASUS ROG RTX 2080",       price:17399,  category:"GPU",         img:"GPU/2080/rtx-2080-front.png" },
  { id:21, name:"NVIDIA ASUS ROG RTX 3070",       price:20299,  category:"GPU",         img:"GPU/3070/rtx-3070-front.png" },
  { id:22, name:"NVIDIA ASUS ROG RTX 3080",       price:28999,  category:"GPU",         img:"GPU/3080/rtx-3080-front.png" },
  { id:23, name:"NVIDIA ASUS ROG RTX 3090",       price:40599,  category:"GPU",         img:"GPU/3090/rtx-3090-front.png" },
  { id:24, name:"NVIDIA ASUS ROG RTX 4070",       price:31899,  category:"GPU",         img:"GPU/4070/rtx-4070-front.png" },
  { id:25, name:"NVIDIA ASUS ROG RTX 4080",       price:52199,  category:"GPU",         img:"GPU/4080/rtx-4080-front.png" },
  { id:26, name:"NVIDIA ASUS ROG RTX 4090",       price:86999,  category:"GPU",         img:"GPU/4090/rtx-4090-front.png" },
  { id:27, name:"NVIDIA ASUS ROG RTX 5070",       price:37699,  category:"GPU",         img:"GPU/5070/rtx-5070-front.png" },
  { id:28, name:"NVIDIA ASUS ROG RTX 5080",       price:57999,  category:"GPU",         img:"GPU/5080/rtx-5080-front.png" },
  { id:29, name:"NVIDIA ASUS ROG RTX 5090",       price:115999, category:"GPU",         img:"GPU/5090/rtx-5090-front.png" },
  { id:30, name:"ASUS TUF Gaming B560M",          price:6959,   category:"Motherboard", img:"MOTHERBOARD/1200/ASUS TUF GAMING B560M/b560m.png" },
  { id:31, name:"ASUS ROG STRIX Z590-A",          price:11599,  category:"Motherboard", img:"MOTHERBOARD/1200/ASUS ROG STRIX Z590/z590-a.png" },
  { id:32, name:"ASUS ROG STRIX Z690-A",          price:14499,  category:"Motherboard", img:"MOTHERBOARD/1700/ASUS ROG STRIX Z690/z690-a.png" },
  { id:33, name:"Asus Prime B550M",               price:5219,   category:"Motherboard", img:"MOTHERBOARD/AM4/Asus Prime B550M/b550m.png" },
  { id:34, name:"Asus TUF Gaming B550",           price:7539,   category:"Motherboard", img:"MOTHERBOARD/AM4/Asus TUF Gaming B550/b550.png" },
  { id:35, name:"ASUS ROG Strix X570",            price:10439,  category:"Motherboard", img:"MOTHERBOARD/AM4/ASUS ROG Strix X570/x570.png" },
  { id:36, name:"Asus Prime B650EM-A",            price:8699,   category:"Motherboard", img:"MOTHERBOARD/AM5/Asus Prime B650EM-A/b650em-a.png" },
  { id:37, name:"Asus TUF Gaming B850",           price:11019,  category:"Motherboard", img:"MOTHERBOARD/AM5/Asus Tuf Gaming B850/b850.png" },
  { id:38, name:"Asus ROG Crosshair X870E",       price:31899,  category:"Motherboard", img:"MOTHERBOARD/AM5/Asus ROG Crosshair X870E/x870e.png" }
];

function loadCart() {
  try { return JSON.parse(localStorage.getItem('ribotech_cart')) || []; }
  catch(e) { return []; }
}
function saveCart(c) { localStorage.setItem('ribotech_cart', JSON.stringify(c)); }

function updateCartCount() {
  var c = loadCart(); var total = 0;
  for (var i = 0; i < c.length; i++) total += c[i].qty;
  var el = document.getElementById('cartCount');
  if (el) el.textContent = total;
}

function addToCart(id, btn) {
  var p = getProductById(id); if (!p) return;
  var c = loadCart(); var found = false;
  for (var i = 0; i < c.length; i++) {
    if (c[i].id === id) { c[i].qty++; found = true; break; }
  }
  if (!found) c.push({ id:p.id, name:p.name, price:p.price, category:p.category, img:p.img, qty:1 });
  saveCart(c); updateCartCount();
  showToast(p.name + ' added to cart!');
  if (btn) { btn.innerHTML = ' Added'; btn.className = 'add-btn added'; }
}

function removeFromCart(id) {
  saveCart(loadCart().filter(function(x){ return x.id !== id; }));
  updateCartCount(); renderCart();
}

function changeCartQty(id, delta) {
  var c = loadCart();
  for (var i = 0; i < c.length; i++) {
    if (c[i].id === id) {
      c[i].qty += delta;
      if (c[i].qty < 1) { saveCart(c.filter(function(x){ return x.id !== id; })); updateCartCount(); renderCart(); return; }
      break;
    }
  }
  saveCart(c); updateCartCount(); renderCart();
}

function getCartSubtotal() {
  var c = loadCart(); var sub = 0;
  for (var i = 0; i < c.length; i++) sub += c[i].price * c[i].qty;
  return sub;
}

function placeOrder() {
  if (loadCart().length === 0) { showToast('Your cart is empty!'); return; }
  var orderNum = 'RBT-' + Math.floor(Math.random() * 900000 + 100000);
  saveCart([]); updateCartCount();
  window.location.href = 'success.html?order=' + orderNum;
}

function getProductById(id) {
  for (var i = 0; i < products.length; i++) { if (products[i].id === id) return products[i]; }
  return null;
}


function renderCart() {
  var wrap = document.getElementById('cartContent'); if (!wrap) return;
  var c = loadCart();
  if (c.length === 0) {
    wrap.innerHTML = '<div class="empty-cart"><div class="big-icon"></div><p>Your cart is empty. Start building your dream PC!</p><a class="btn-primary" href="catalog.html">Shop Components</a></div>';
    return;
  }
  var itemsHtml = '';
  for (var i = 0; i < c.length; i++) {
    var item = c[i];
    var imgTag = item.img ? '<img src="' + imgBase + item.img + '" alt="' + item.name + '" style="width:100%;height:100%;object-fit:contain;padding:4px;">' : '';
    itemsHtml += '<div class="cart-item"><div class="cart-item-img">' + imgTag + '</div><div><div class="cart-item-name">' + item.name + '</div><div class="cart-item-cat">' + item.category + '</div></div><div class="cart-item-right"><div class="cart-item-price">₱' + (item.price * item.qty).toLocaleString() + '</div><div class="cart-qty-row"><button class="ci-qty-btn" onclick="changeCartQty(' + item.id + ', -1)">-</button><span class="ci-qty">' + item.qty + '</span><button class="ci-qty-btn" onclick="changeCartQty(' + item.id + ', 1)">+</button></div><button class="remove-btn" onclick="removeFromCart(' + item.id + ')">Remove</button></div></div>';
  }
  var sub = getCartSubtotal(); var total = sub;
  wrap.innerHTML = '<div class="cart-layout"><div class="cart-items">' + itemsHtml + '</div><aside class="order-summary"><div class="summary-title">Order Summary</div><div class="summary-row"><span>Subtotal (' + c.length + ' item' + (c.length !== 1 ? 's' : '') + ')</span><span>₱' + sub.toLocaleString() + '</span></div><div class="summary-row"><span>Shipping</span><span style="color:var(--green)">FREE</span></div><hr class="summary-divider"><div class="summary-total"><span>Total</span><span>₱' + Math.round(total).toLocaleString() + '</span></div><a class="checkout-btn" href="checkout.html">Proceed to Checkout </a><a class="continue-btn" href="catalog.html">Continue Shopping</a></aside></div>';
}

function renderCheckout() {
  var c = loadCart(); var itemsEl = document.getElementById('checkoutItems'); if (!itemsEl) return;
  var itemsHtml = '';
  for (var i = 0; i < c.length; i++) { var item = c[i]; itemsHtml += '<div class="cs-item"><span class="cs-item-name">' + item.name + '</span><span class="cs-item-qty">x' + item.qty + '</span><span class="cs-item-price">₱' + (item.price * item.qty).toLocaleString() + '</span></div>'; }
  var sub = getCartSubtotal(); var total = sub;
  itemsEl.innerHTML = itemsHtml;
  document.getElementById('co-subtotal').innerHTML = '₱' + sub.toLocaleString();
  
  document.getElementById('co-total').innerHTML    = '₱' + Math.round(total).toLocaleString();
}

function showToast(msg) {
  var toast = document.getElementById('toast'); var msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg; toast.classList.add('show');
  setTimeout(function(){ toast.classList.remove('show'); }, 2500);
}

// ════════════════════════════════════════════════════════════
//  AUTH SYSTEM
// ════════════════════════════════════════════════════════════

function getLoggedInUser() {
  return localStorage.getItem('ribotech_user') || null;
}

function setLoggedInUser(email) {
  localStorage.setItem('ribotech_user', email);
}

function logoutUser() {
  localStorage.removeItem('ribotech_user');
  updateNavAuth();
  showToast('Logged out.');
}

// Call this on every page to sync the nav Login/Logout button
function updateNavAuth() {
  var btn = document.getElementById('navAuthBtn');
  var emailEl = document.getElementById('navUserEmail');
  var user = getLoggedInUser();
  if (!btn) return;
  if (user) {
    if (emailEl) emailEl.textContent = user;
    btn.textContent = 'Logout';
    btn.onclick = logoutUser;
  } else {
    if (emailEl) emailEl.textContent = '';
    btn.textContent = 'Login';
    btn.onclick = function() {
      window.location.href = _resolveLoginUrl();
    };
  }
}

// ── Modal open/close ─────────────────────────────────────────
var _loginCallback = null;  // function to run after successful login

function openLoginModal(callback) {
  _loginCallback = callback || null;
  var overlay = document.getElementById('loginOverlay');
  if (overlay) {
    overlay.classList.add('show');
    // reset to login tab
    switchTab('login');
    document.getElementById('loginError').textContent = '';
    document.getElementById('registerError').textContent = '';
    document.getElementById('registerSuccess').textContent = '';
  }
}

function closeLoginModal() {
  var overlay = document.getElementById('loginOverlay');
  if (overlay) overlay.classList.remove('show');
}

function switchTab(tab) {
  document.querySelectorAll('.login-tab').forEach(function(t) {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  document.querySelectorAll('.login-form').forEach(function(f) {
    f.classList.toggle('active', f.id === tab + 'Form');
  });
}

// ── Register ─────────────────────────────────────────────────
async function submitRegister() {
  var email    = document.getElementById('regEmail').value.trim();
  var password = document.getElementById('regPassword').value;
  var btn      = document.getElementById('regBtn');
  var errEl    = document.getElementById('registerError');
  var sucEl    = document.getElementById('registerSuccess');

  errEl.textContent = '';
  sucEl.textContent = '';

  if (!email || !password) { errEl.textContent = 'Please fill in all fields.'; return; }
  if (password.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; return; }

  btn.disabled = true;
  btn.textContent = 'Creating account...';

  try {
    var res  = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    var data = await res.json();
    if (!res.ok) { errEl.textContent = data.error; return; }
    sucEl.textContent = 'Account created! Switching to login...';
    setTimeout(function() { switchTab('login'); sucEl.textContent = ''; }, 1500);
  } catch (e) {
    errEl.textContent = 'Server error. Make sure the server is running.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Create Account';
  }
}

// ── Login ─────────────────────────────────────────────────────
async function submitLogin() {
  var email    = document.getElementById('loginEmail').value.trim();
  var password = document.getElementById('loginPassword').value;
  var btn      = document.getElementById('loginBtn');
  var errEl    = document.getElementById('loginError');

  errEl.textContent = '';

  if (!email || !password) { errEl.textContent = 'Please fill in all fields.'; return; }

  btn.disabled = true;
  btn.textContent = 'Logging in...';

  try {
    var res  = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    var data = await res.json();
    if (!res.ok) { errEl.textContent = data.error; return; }

    setLoggedInUser(data.email);
    updateNavAuth();
    closeLoginModal();
    showToast('Welcome back, ' + data.email + '!');

    if (typeof _loginCallback === 'function') {
      _loginCallback();
      _loginCallback = null;
    }
  } catch (e) {
    errEl.textContent = 'Server error. Make sure the server is running.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Login';
  }
}

// ── Cart guard: redirect to login if not signed in ───────────
function cartGuard(event) {
  if (!getLoggedInUser()) {
    event.preventDefault();
    var loginUrl = _resolveLoginUrl();
    var cartUrl  = _resolveCartUrl();
    window.location.href = loginUrl + '?return=' + encodeURIComponent(cartUrl);
  }
}

function _resolveCartUrl() {
  var path = window.location.pathname;
  if (path.indexOf('/pages/products/') !== -1) {
    return window.location.origin + '/pages/cart.html';
  } else if (path.indexOf('/pages/') !== -1) {
    return window.location.origin + '/pages/cart.html';
  } else {
    return window.location.origin + '/pages/cart.html';
  }
}

// ── Guard: require login before an action ─────────────────────
function requireLogin(action) {
  if (getLoggedInUser()) {
    action();
  } else {
    // Save current page so login.html can redirect back
    var returnUrl = window.location.href;
    // Find the relative path to login.html from the current page
    var loginUrl = _resolveLoginUrl();
    window.location.href = loginUrl + '?return=' + encodeURIComponent(returnUrl);
  }
}

function _resolveLoginUrl() {
  var path = window.location.pathname;
  // Count depth relative to root to find correct relative path
  // pages/products/GPU/xxx.html  => depth 3 from root => ../../../pages/login.html
  // pages/xxx.html               => depth 1 from root => ../pages/login.html  (same folder: login.html)
  // index.html                   => depth 0            => pages/login.html
  var parts = path.split('/').filter(Boolean);
  var filename = parts[parts.length - 1] || '';
  // Determine directory depth
  // We look for known path segments
  if (path.indexOf('/pages/products/') !== -1) {
    return '../../../pages/login.html';
  } else if (path.indexOf('/pages/') !== -1) {
    return 'login.html';
  } else {
    return 'pages/login.html';
  }
}
