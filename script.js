// Custom cursor
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Create and append the cursor element
const cursorElement = document.createElement('div');
cursorElement.classList.add('cursor');
document.body.appendChild(cursorElement);

// Project card click functionality
const cards = document.querySelectorAll('.card');
const detailBox = document.getElementById('project-detail');
const detailTitle = document.getElementById('detail-title');
const detailDesc = document.getElementById('detail-description');
const closeDetail = document.getElementById('close-detail');
const imageContainer = document.getElementById('detail-images');

cards.forEach(card => {
  card.addEventListener('click', () => {
    detailTitle.textContent = card.getAttribute('data-title');
    const hiddenDesc = card.querySelector('.card-description');
    detailDesc.innerHTML = hiddenDesc ? hiddenDesc.innerHTML : '';
    
    
    // Clear previous images
    imageContainer.innerHTML = '';

    // Get image URLs from data-images attribute
    const images = JSON.parse(card.getAttribute('data-images') || '[]');

    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.style.width = '100%';
      img.style.borderRadius = '10px';
      img.style.objectFit = 'cover';
      img.style.marginBottom = '10px';
      imageContainer.appendChild(img);
    });

    detailBox.style.display = 'block';
    detailBox.scrollIntoView({ behavior: 'smooth' });
  });
});

// Close detail view
closeDetail.addEventListener('click', () => {
  detailBox.style.display = 'none';
});

// Scroll-based background gradient effect
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const scrollPercent = scrollY / maxScroll;

  const startColor = [0, 0, 0];      // black
  const endColor = [38, 89, 79];     // teal

  const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollPercent);
  const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollPercent);
  const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollPercent);

  const newBg = `linear-gradient(to top, rgb(${r},${g},${b}), #000000)`;
  document.querySelector('.background').style.background = newBg;
});
