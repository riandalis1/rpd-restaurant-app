import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { RestoItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <section class="hero">
      </section>
      
      <section class="content" id="content">
        <h1 class="heading">Favorite <span>Resto</span></h1>
        <hr />
        <div class="article-container" id="restaurants"></div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      restoContainer.innerHTML += '<h4 class="resto-item__not__found">Tidak ada resto untuk ditampilkan</h4>';
    }

    restaurants.forEach((resto) => {
      restoContainer.innerHTML += RestoItemTemplate(resto);
    });

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Favorites;
