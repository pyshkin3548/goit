const key = '18873778-f39304832de2102fcf5072037';
let perPage = 12;
export default {
  searchQuery: '',
  pageNumber: 1,
  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.pageNumber}&per_page=${perPage}&key=${key}`;

    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    };
    return fetch(url, options)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(Error => {
        console.log(Error);
      });
  },
  resetPageNumber() {
    this.pageNumber = 1;
  },

  incrementPage() {
    this.pageNumber += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
