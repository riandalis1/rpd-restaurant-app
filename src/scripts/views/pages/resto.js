import TheRestoDbSource from '../../data/resto-source';
import { RestoItemTemplate } from '../templates/template-creator';

const Resto = {
  async render() {
    return `
      <section class="hero">
        <picture>
          <source type="image/jpeg" data-srcset="/images/heros/hero-image_2-small.jpg" media="(max-width: 600px)">
          <source type="image/jpeg" data-srcset="/images/heros/hero-image_2-large.jpg" media="(min-width: 601px)">
          <img class="lazyload" data-src="/images/heros/hero-image_2-large.jpg" alt="hero">
        </picture>
      </section>
      
      <section class="content" id="content">
        <h1 class="content__heading">Our Resto</h1>
        <div class="article-container" id="restaurants"></div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await TheRestoDbSource.listRestaurant();
    const restoContainer = document.querySelector('#restaurants');

    restaurants.slice(0, 18).forEach((resto) => {
      restoContainer.innerHTML += RestoItemTemplate(resto);
    });

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Resto;
