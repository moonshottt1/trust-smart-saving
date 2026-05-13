// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
})();

// Category pill active state (visual only)
(function () {
  var pills = document.querySelectorAll('.pill');
  if (!pills.length) return;
  pills.forEach(function (pill) {
    pill.addEventListener('click', function (e) {
      e.preventDefault();
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
    });
  });
})();

// Contact form fake submit
(function () {
  var form = document.getElementById('contact-form');
  var success = document.getElementById('form-success');
  if (!form || !success) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    success.style.display = 'block';
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
