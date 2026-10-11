/**
 * ==========================================================================
 * H K PRANJAN — DIGITAL ENGINEERING UNIVERSE PORTFOLIO
 * Interactive JavaScript Logic:
 *  1. Navigation & Mobile Drawer
 *  2. Specialization Typewriter Animation
 *  3. Electronic Signal Waveform & Circuit Canvas
 *  4. Desktop Cursor Glow Tracker
 *  5. Interactive Portrait 3D Micro-Tilt
 *  6. Scroll Spy Navigation Highlight
 *  7. Scroll Reveal Observer
 *  8. Scroll to Top
 *  9. Copy Email Quick Action
 * 10. Contact Message Dispatcher
 * 11. Dynamic Year
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavbar();
  initTypewriter();
  initSignalCanvas();
  initCursorGlow();
  initPersistentBgHover();
  initScrollSpy();
  initScrollReveal();
  initScrollToTop();
  initCopyEmail();
  initContactForm();
  initDynamicYear();
});

/**
 * Scroll Progress Indicator
 */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
}

/**
 * 1. Mobile Navigation & Sticky Header
 */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header class on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}

/**
 * 2. Animated Specialization Cycling (Typewriter Effect)
 * Exact requested specializations:
 * - Embedded Systems
 * - Internet of Things
 * - Artificial Intelligence & Machine Learning
 * - Electronics and Communication
 */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) return;

  const roles = [
    'Embedded Systems',
    'Internet of Things',
    'Artificial Intelligence & Machine Learning',
    'Electronics and Communication'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 75;
  const deletingSpeed = 38;
  const delayBetweenWords = 1900;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let nextTimeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      nextTimeout = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      nextTimeout = 400;
    }

    setTimeout(type, nextTimeout);
  }

  type();
}

/**
 * 3. Digital Engineering Universe: Signal Waveform & Circuit Canvas
 * Draws subtle oscilloscope sine waves and orthogonal circuit nodes
 */
function initSignalCanvas() {
  const canvas = document.getElementById('signal-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let time = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  // Floating circuit trace nodes
  const nodes = [];
  const nodeCount = 28;
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 1
    });
  }

  function drawWave(amplitude, frequency, phase, color, lineWidth, verticalOffset) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;

    for (let x = 0; x <= width; x += 4) {
      const y = verticalOffset + Math.sin(x * frequency + phase) * amplitude;
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Oscilloscope Signal Waves (Very subtle, cinematic)
    const centerY = height * 0.45;
    time += 0.015;

    // Primary cyan carrier wave
    drawWave(28, 0.0035, time, 'rgba(0, 229, 255, 0.18)', 1.2, centerY);
    
    // Modulated secondary wave
    drawWave(42, 0.002, -time * 0.8, 'rgba(139, 92, 246, 0.14)', 1.0, centerY + 25);
    
    // High-frequency subtle telemetry harmonic
    drawWave(14, 0.008, time * 1.5, 'rgba(0, 229, 255, 0.10)', 0.8, centerY - 20);

    // Connect close circuit nodes with orthogonal traces
    const maxDist = 130;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.16;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Update & draw nodes
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 229, 255, 0.35)';
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    animate();
  }
}

/**
 * 4. Desktop Cursor Glow Tracker
 */
function initCursorGlow() {
  const cursorGlow = document.getElementById('cursor-glow');
  if (!cursorGlow) return;

  if (window.matchMedia('(max-width: 1024px)').matches || window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function followCursor() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    cursorGlow.style.left = `${currentX}px`;
    cursorGlow.style.top = `${currentY}px`;

    requestAnimationFrame(followCursor);
  }

  followCursor();
}

/**
 * 5. Persistent Background Subtle Parallax & Hover Interaction
 * Keeps the portrait stationary during scroll while adding subtle depth on desktop pointermove
 */
function initPersistentBgHover() {
  const bgImage = document.querySelector('.persistent-bg-image');
  if (!bgImage) return;

  if (window.matchMedia('(max-width: 1024px)').matches || window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    // Very subtle, stable 3D parallax that does not jump or flicker during scroll
    bgImage.style.transform = `scale(1.015) translate(${x * -6}px, ${y * -4}px)`;
  }, { passive: true });
}

/**
 * 6. Scroll Spy Navigation Highlight
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollY = window.pageYOffset + 160;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

/**
 * 7. Scroll-Reveal Observer
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('in-view'));
  }
}

/**
 * 8. Scroll to Top Button
 */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 420) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 9. Copy Email Quick Action
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailDisplay = document.getElementById('email-display');
  const copyBtnText = document.getElementById('copy-btn-text');

  if (!copyBtn || !emailDisplay) return;

  copyBtn.addEventListener('click', async () => {
    const email = emailDisplay.textContent.trim();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      if (copyBtnText) copyBtnText.textContent = 'Copied!';
      copyBtn.style.color = '#34D399';
      copyBtn.style.borderColor = '#34D399';

      setTimeout(() => {
        if (copyBtnText) copyBtnText.textContent = 'Copy Email';
        copyBtn.style.color = '';
        copyBtn.style.borderColor = '';
      }, 2200);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  });
}

/**
 * 10. Contact Message Console with EmailJS Integration
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (!form || !statusDiv || !submitBtn) return;

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_h1e40qm';
  const EMAILJS_TEMPLATE_ID = 'template_ntaj1sy';
  const EMAILJS_PUBLIC_KEY = 'VPqwkXIRnnd_LFsSj';

  // Initialize EmailJS if library loaded
  if (window.emailjs && typeof window.emailjs.init === 'function') {
    try {
      window.emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
      });
    } catch (e) {
      console.warn('EmailJS initialization warning:', e);
    }
  }

  let isSubmitting = false;
  let lastSubmitTimestamp = 0;
  const SUBMISSION_COOLDOWN_MS = 6000; // 6 seconds spam throttle

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions while in flight
    if (isSubmitting) return;

    // Basic spam bot protection: Honeypot trap check
    const honeypot = document.getElementById('contact-hp');
    if (honeypot && honeypot.value.trim() !== '') {
      // Bot detected - simulate silent success without calling EmailJS
      statusDiv.textContent = 'Transmission received. Signal logged.';
      statusDiv.className = 'form-status success';
      form.reset();
      return;
    }

    // Rate limiting cooldown
    const now = Date.now();
    if (now - lastSubmitTimestamp < SUBMISSION_COOLDOWN_MS) {
      const waitSec = Math.ceil((SUBMISSION_COOLDOWN_MS - (now - lastSubmitTimestamp)) / 1000);
      statusDiv.textContent = `Transmission rate limited. Please wait ${waitSec}s before sending another signal.`;
      statusDiv.className = 'form-status error';
      return;
    }

    // Capture and trim field inputs
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const title = subjectInput ? subjectInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // Field Validation
    if (!name || name.length < 2) {
      statusDiv.textContent = 'Please provide your full name (minimum 2 characters).';
      statusDiv.className = 'form-status error';
      if (nameInput) nameInput.focus();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      statusDiv.textContent = 'Please provide a valid email address for delivery confirmation.';
      statusDiv.className = 'form-status error';
      if (emailInput) emailInput.focus();
      return;
    }

    if (!title || title.length < 2) {
      statusDiv.textContent = 'Please enter a transmission subject (minimum 2 characters).';
      statusDiv.className = 'form-status error';
      if (subjectInput) subjectInput.focus();
      return;
    }

    if (!message || message.length < 5) {
      statusDiv.textContent = 'Please enter a message payload (minimum 5 characters).';
      statusDiv.className = 'form-status error';
      if (messageInput) messageInput.focus();
      return;
    }

    // Ensure EmailJS SDK is available
    if (!window.emailjs || typeof window.emailjs.send !== 'function') {
      statusDiv.textContent = 'Email dispatch library is currently loading or blocked. Please email directly at pranjanpranjan052@gmail.com.';
      statusDiv.className = 'form-status error';
      return;
    }

    // Save button state and show loading
    const originalBtnHTML = submitBtn.innerHTML;
    isSubmitting = true;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Transmitting...</span><span class="btn-spinner" aria-hidden="true"></span>`;
    statusDiv.textContent = 'Establishing secure link & dispatching transmission...';
    statusDiv.className = 'form-status info';

    // Match template variables exactly: name, email, title, message
    const templateParams = {
      name: name,
      email: email,
      title: title,
      message: message
    };

    try {
      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response && (response.status === 200 || response.text === 'OK')) {
        statusDiv.textContent = `Transmission confirmed! Thank you, ${name}. Your message has been routed to Pranjan (pranjanpranjan052@gmail.com).`;
        statusDiv.className = 'form-status success';
        form.reset();
        lastSubmitTimestamp = Date.now();

        setTimeout(() => {
          if (statusDiv.classList.contains('success')) {
            statusDiv.textContent = '';
            statusDiv.className = 'form-status';
          }
        }, 10000);
      } else {
        throw new Error(response ? response.text : 'Unexpected response status');
      }
    } catch (error) {
      console.error('EmailJS transmission error:', error);
      const detail = error && (error.text || error.message) ? ` (${error.text || error.message})` : '';
      statusDiv.textContent = `Transmission failed${detail}. Your message has been preserved. Please retry or contact directly at pranjanpranjan052@gmail.com.`;
      statusDiv.className = 'form-status error';
      // Form values are preserved so the user can easily retry
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
      isSubmitting = false;
    }
  });
}

/**
 * 11. Dynamic Year in Footer
 */
function initDynamicYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}
