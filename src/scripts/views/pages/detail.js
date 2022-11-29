/* eslint-disable object-curly-newline */
import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/resto-source';
import { RestoDetailTemplate, RestoDrinksTemplate, RestoFoodsTemplate, RestoReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <section class="hero">
    </section>

    <section class="content__heading" id="content-restaurant">
      <h1 class="heading">Detail Resto</h1>
      <hr />
      <div class="restaurant-box">
      <div id="likeButtonContainer"></div>
        <div id="restaurant" class="cover"></div>
        <div class="section-containerr">
          <div class="makanan">
            <div class="content-title">
              <h5>Makanan</h5>
            </div>
            <div class="section">
              <ul id="food"></ul>
            </div>
          </div>
          <div class="minuman">
            <div class="content-title">
              <h5>Minuman</h5>
            </div>
            <div class="section">
              <ul id="drink"></ul>
            </div>
          </div>
        <div>
        </div>
      <div class="content-title">
        <h5>Reviews</h5>
      </div>
      <div id="review" class="section"></div>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailRestaurante(url.id);

    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = RestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating,
      },
    });

    const foods = await TheRestoDbSource.menuFoods(url.id);
    const foodContainer = document.querySelector('#food');
    foods.forEach((food) => {
      foodContainer.innerHTML += RestoFoodsTemplate(food);
    });

    const drinks = await TheRestoDbSource.menuDrinks(url.id);
    const drinkContainer = document.querySelector('#drink');
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += RestoDrinksTemplate(drink);
    });

    const reviews = await TheRestoDbSource.restoReview(url.id);
    const reviewContainer = document.querySelector('#review');
    reviews.forEach((review) => {
      reviewContainer.innerHTML += RestoReviewTemplate(review);
    });
  },
};

export default Detail;
