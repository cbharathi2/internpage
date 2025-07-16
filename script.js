document.getElementById('subscribeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for subscribing!');
  this.reset();
});
// Select all offer boxes
const offerBoxes = document.querySelectorAll('.offer-box');

// Loop through and attach hover + click effect
offerBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.05)';
    box.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
  });

  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
    box.style.boxShadow = 'none';
  });

  box.addEventListener('click', () => {
    alert(`You clicked: ${box.querySelector('h3').textContent}`);
  });
});
