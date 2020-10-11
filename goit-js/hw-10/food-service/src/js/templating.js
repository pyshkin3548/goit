import articlesTemplate from '../templates/article-items.hbs';
import articles from '../menu.json';
import '../sass/styles.scss';
// console.log(articles);

const markup = articlesTemplate(articles);

// console.log(markup);

const articleRef = document.querySelector('.js-menu');

articleRef.insertAdjacentHTML('beforeend', markup);
