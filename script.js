const list = document.getElementById('quote-list');
const form = document.getElementById('quote-form');
const input = document.getElementById('quote-input');

function loadQuotes() {
  const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
  list.innerHTML = '';
  quotes.forEach((q, i) => {
    const li = document.createElement('li');
    li.textContent = q;
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
  quotes.push(input.value);
  localStorage.setItem('quotes', JSON.stringify(quotes));
  input.value = '';
  loadQuotes();
});

loadQuotes();