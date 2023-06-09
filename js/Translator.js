const button = document.getElementById('button');
const textsToChange = document.querySelectorAll('[data-section]');
let texts = {};

const changeLanguage = language => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `./languages/${language}.json`, false);
  xhr.send();

  if (xhr.status === 200) {
    texts = JSON.parse(xhr.responseText);
    updateTexts();
  }
};

const updateTexts = () => {
  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

button.addEventListener('click', e => {
  const language = e.target.dataset.language;
  if (language) {
    changeLanguage(language);
  }
});

// Call the initial translation when the page loads
changeLanguage('es');

// Listen for form navigation events and update texts accordingly
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  for (const form of forms) {
    form.addEventListener('submit', () => {
      updateTexts();
    });
  }
});
