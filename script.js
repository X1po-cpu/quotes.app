const list = document.getElementById('quote-list');
const form = document.getElementById('quote-form');
const input = document.getElementById('quote-input');

function loadQuotes() {
  const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
  list.innerHTML = '';
  quotes.forEach((q, i) => {
    const li = document.createElement('li');
    li.textContent = q;

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.addEventListener('click', () => {
      const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
      quotes.splice(i, 1);
      localStorage.setItem('quotes', JSON.stringify(quotes));
      loadQuotes();
    });

    li.appendChild(deleteBtn);
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