document.addEventListener('DOMContentLoaded', function () {
  var splash = document.getElementById('splash-screen');
  if (!splash) return;
  setTimeout(function () {
    splash.classList.add('hidden');
    splash.addEventListener('transitionend', function () {
      splash.remove();
    });
    var title = document.querySelector('h1');
    if (title) {
      title.scrollIntoView({ behavior: 'smooth' });
    }
  }, 2000);
});
