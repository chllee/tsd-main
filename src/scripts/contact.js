// /src/scripts/contact.js
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method || 'POST',
        body: data,
        headers: { 'Accept': 'application/json' } // DO NOT set Content-Type with FormData
      });

      if (res.ok) {
        form.reset();
        alert("Thanks! We'll be in touch shortly.");
      } else {
        const text = await res.text();
        console.error('Formspree error:', res.status, text);
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  });
}
