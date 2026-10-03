import { site, whatsappUrl } from '../config/site.js';
import { assets } from '../config/assets.js';

const setImage = (img, data) => {
  img.src = data.src;
  img.alt = data.alt;
  img.width = data.width;
  img.height = data.height;
  img.style.setProperty('--asset-position', data.position);
  img.style.setProperty('--asset-position-mobile', data.positionMobile);
  img.style.setProperty('--asset-scale', data.scale || 1);
  img.style.setProperty('--asset-inset', data.frameInset || '0%');
  img.decoding = 'async';
};
document.querySelectorAll('[data-asset]').forEach(img => setImage(img, assets[img.dataset.asset]));
document.querySelectorAll('[data-gallery]').forEach(img => setImage(img, assets.gallery[Number(img.dataset.gallery)]));
document.querySelectorAll('[data-project]').forEach(img => {
  const data = assets.projects[Number(img.dataset.project)];
  setImage(img, data);
  img.closest('figure').querySelector('figcaption strong').textContent = data.title;
  img.closest('figure').querySelector('figcaption span').textContent = 'Projeto Gêmeos · sob medida';
});
// A referência oficial de perfil não é um novo símbolo nem um arquivo vetorial.
// Dimensões reservadas no HTML evitam deslocamentos durante o carregamento.
if (site.logo) document.querySelectorAll('[data-logo-reference]').forEach(img => {
  img.src = site.logo; img.alt = site.logoAlt;
});
else document.querySelectorAll('[data-logo-reference]').forEach(img => img.src = site.logoReference);

const header = document.getElementById('header');
const floating = document.querySelector('.floating-wa');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const onScroll = () => {
  header.classList.toggle('scrolled', scrollY > 50);
  floating.classList.toggle('visible', scrollY > 580);
};
onScroll();
addEventListener('scroll', onScroll, { passive: true });
function setMenu(open, restoreFocus = false) {
  mobileMenu.classList.toggle('open', open);
  header.classList.toggle('menu-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  mobileMenu.inert = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  document.body.style.overflow = open ? 'hidden' : '';
  if (restoreFocus) menuBtn.focus();
}
menuBtn.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.classList.contains('open')) setMenu(false, true);
});

const dialog = document.getElementById('contactDialog');
function configureContact(link, message = site.message) {
  const url = whatsappUrl(message);
  link.href = url || '#contato';
  link.classList.toggle('pending-link', !url);
  if (url) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  else { link.removeAttribute('target'); link.removeAttribute('rel'); }
}
document.querySelectorAll('[data-contact]').forEach(link => {
  configureContact(link);
  link.addEventListener('click', event => {
    if (!whatsappUrl()) { event.preventDefault(); setMenu(false); dialog.showModal(); }
  });
});
document.querySelector('.contact-pending').hidden = !!whatsappUrl();
if (whatsappUrl()) document.querySelector('.footer-top [data-contact]').textContent = 'Conversar no WhatsApp ↗';
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const r = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close();
});

const preview = document.getElementById('environmentPreview');
const previewWrap = document.querySelector('.environment-preview');
const environmentButtons = [...document.querySelectorAll('.environment-item')];
let switchTimer;
setImage(preview, assets.environments[0]);
environmentButtons.forEach((button, i) => {
  button.querySelector('strong').textContent = assets.environments[i].title;
  const activate = () => {
    environmentButtons.forEach(other => {
      other.classList.toggle('active', other === button);
      other.setAttribute('aria-pressed', String(other === button));
    });
    clearTimeout(switchTimer);
    previewWrap.classList.add('switching');
    switchTimer = setTimeout(() => {
      const data = assets.environments[i];
      setImage(preview, data);
      previewWrap.querySelector('span').textContent = `${data.title} · Gêmeos Móveis Planejados`;
      previewWrap.classList.remove('switching');
    }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180);
  };
  button.addEventListener('mouseenter', activate);
  button.addEventListener('focus', activate);
  button.addEventListener('click', activate);
});

// Geometria e gesto do carrossel aprovados na base V2.3.
const stage = document.getElementById('carouselStage');
const cards = [...document.querySelectorAll('.spatial-card')];
const prev = document.getElementById('prevCard');
const next = document.getElementById('nextCard');
const progress = document.getElementById('carouselProgress');
const activeTitle = document.getElementById('activeTitle');
const activeSub = document.getElementById('activeSub');
const activeBudget = document.getElementById('activeBudget');
let active = 0, startX = null;
cards.forEach((card, i) => {
  const data = assets.gallery[i];
  card.dataset.title = data.title;
  card.dataset.sub = data.sub;
  card.querySelector('strong').textContent = data.title;
  card.querySelector('small').textContent = 'Gêmeos · sob medida';
});
activeTitle.parentElement.setAttribute('aria-live', 'polite');
function cyclicDiff(i, a, n) {
  let d = i - a;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}
function cardGap() {
  if (innerWidth < 560) return 138;
  if (innerWidth < 900) return 185;
  if (innerWidth < 1180) return 235;
  return 274;
}
function cardAngle(distance) {
  if (innerWidth < 900) return Math.min(distance * 16, 24);
  return distance === 1 ? 16 : Math.min(22 + (distance - 2) * 3, 25);
}
function layoutCarousel() {
  cards.forEach((card, i) => {
    const d = cyclicDiff(i, active, cards.length), ad = Math.abs(d);
    const z = innerWidth < 900 ? -ad * (innerWidth < 560 ? 95 : 135) : (ad === 0 ? 120 : (ad === 1 ? 20 : -80));
    const ry = d === 0 ? 0 : Math.sign(d) * -cardAngle(ad);
    const scale = 1 - Math.min(ad, 3) * (innerWidth < 900 ? .055 : .06);
    card.style.transform = `translate3d(${d * cardGap()}px, ${ad * (innerWidth < 900 ? 8 : 11)}px, ${z}px) rotateY(${ry}deg) scale(${scale})`;
    card.style.opacity = ad > 3 ? '0' : String(1 - ad * .17);
    card.style.zIndex = String(20 - ad);
    card.style.pointerEvents = ad > 3 ? 'none' : 'auto';
    card.classList.toggle('is-active', d === 0);
    card.setAttribute('aria-hidden', String(d !== 0));
    card.setAttribute('aria-current', String(d === 0));
  });
  const card = cards[active];
  activeTitle.textContent = card.dataset.title;
  activeSub.textContent = card.dataset.sub;
  configureContact(activeBudget, `Olá, Gêmeos! Gostaria de conversar sobre ${card.dataset.title.toLowerCase()} sob medida.`);
  progress.querySelector('b').textContent = String(active + 1).padStart(2, '0');
  progress.querySelector('em').textContent = String(cards.length).padStart(2, '0');
  progress.style.setProperty('--progress', (active + 1) / cards.length);
}
function go(delta) { active = (active + delta + cards.length) % cards.length; layoutCarousel(); }
prev.addEventListener('click', () => go(-1));
next.addEventListener('click', () => go(1));
cards.forEach((card, i) => card.addEventListener('click', () => { active = i; layoutCarousel(); }));
stage.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); go(1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); go(-1); }
});
stage.addEventListener('pointerdown', event => { startX = event.clientX; stage.classList.add('dragging'); stage.setPointerCapture?.(event.pointerId); });
stage.addEventListener('pointerup', event => {
  if (startX !== null && Math.abs(event.clientX - startX) > 45) go(event.clientX < startX ? 1 : -1);
  startX = null; stage.classList.remove('dragging');
});
stage.addEventListener('pointercancel', () => { startX = null; stage.classList.remove('dragging'); });
addEventListener('resize', () => { layoutCarousel(); if (innerWidth > 900) setMenu(false); }, { passive: true });
layoutCarousel();
