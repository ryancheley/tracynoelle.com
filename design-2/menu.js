// Mobile menu toggle. ponytail: one listener, nothing more.
document.querySelector('.nav-toggle')?.addEventListener('click', function () {
  var links = document.querySelector('.nav-links');
  var open = links.classList.toggle('open');
  this.setAttribute('aria-expanded', open);
});
