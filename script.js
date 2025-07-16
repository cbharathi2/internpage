document.getElementById('subscribeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for subscribing!');
  this.reset();
});
