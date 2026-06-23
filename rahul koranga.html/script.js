const cube = document.getElementById('cube');
let x = 0;
let y = 0;
let isDragging = false;
let startX, startY;
let autoRotateInterval = null;

// Stop automatic rotation
function stopAutoRotate() {
  if (autoRotateInterval) clearInterval(autoRotateInterval);
}

// Resume rotation
function startAutoRotate() {
  stopAutoRotate();
  autoRotateInterval = setInterval(() => {
    x += 0.3;
    y += 0.3;
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  }, 16); // ~60fps
}

// Start drag
cube.parentElement.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  stopAutoRotate();
});

// During drag
window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  x += dy * 0.5;
  y += dx * 0.5;
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  startX = e.clientX;
  startY = e.clientY;
});

// End drag
window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    startAutoRotate();
  }
});

// Start auto rotation on load
startAutoRotate();


// Disable CSS animation and use manual rotation
function stopAutoRotate() {
  cube.style.animation = 'none';
  if (autoRotateInterval) clearInterval(autoRotateInterval);
}

// Restart auto rotation from current position
function startAutoRotate() {
  stopAutoRotate(); // Ensure no duplicate intervals
  autoRotateInterval = setInterval(() => {
    x += 0.3;
    y += 0.3;
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  }, 16); // ~60fps
}

// Mouse drag start
cube.parentElement.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  stopAutoRotate();
});

// Mouse move drag
window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  x += dy * 0.5;
  y += dx * 0.5;
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  startX = e.clientX;
  startY = e.clientY;
});

// Mouse drag end
window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    startAutoRotate();
  }
});

// Start auto rotation on load
startAutoRotate();
