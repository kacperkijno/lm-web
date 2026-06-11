/* =========================================================================
   lm.js — wspólny JS LM dla WebWave
   Hostuj obok lm.css (GitHub Pages / jsDelivr). Linkuj w <head> z atrybutem defer.
   Obsługuje hamburger menu mobilnego (#lmNav). Bezpieczny: nic nie robi,
   jeśli paska nawigacji nie ma na stronie.
   ========================================================================= */
(function(){
  function initNav(){
    var nav = document.getElementById('lmNav');
    if(!nav) return;
    var burger = nav.querySelector('.lm-nav__burger');
    if(!burger || burger.dataset.lmBound) return;
    burger.dataset.lmBound = '1';
    burger.addEventListener('click', function(){
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    });
    nav.querySelectorAll('.lm-nav__panel a').forEach(function(a){
      a.addEventListener('click', function(){
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded','false');
        burger.setAttribute('aria-label','Otwórz menu');
      });
    });
  }
  // Sticky-bar mobilny: WebWave trzyma go w sekcji (transform => zepsuty fixed/z-index).
  // Przenosimy go do <body>, żeby przykleił się do ekranu i był na wierzchu.
  function initStickyBar(){
    var bar = document.querySelector('.lm-sbar');
    if(bar && bar.parentElement !== document.body){ document.body.appendChild(bar); }
  }
  function init(){ initNav(); initStickyBar(); }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
