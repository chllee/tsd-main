const form = document.getElementById('contact-form');
const PUB_EMAIL = 'hello@threesparks.digital'; // set your public email

function encodeRFC3986(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const subject = `Project inquiry from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AProject details:%0D%0A${message}`;
  const mailto = `mailto:${PUB_EMAIL}?subject=${encodeRFC3986(subject)}&body=${body}`;

  // Open in the same tab for more reliable behavior on mobile
  window.location.href = mailto;
});