import CONFIG from '../../globals/config';

const RestoItemTemplate = (restaurants) => `
  <article class="article-item">
    <picture>
      <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_SMALL + restaurants.pictureId}" media="all and (max-width: 600px)">
      <source type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_LARGE + restaurants.pictureId}" media="all and (min-width: 601px)">
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_LARGE + restaurants.pictureId}" alt="${restaurants.name}">
    </picture>
    <div class="article-content">
      <div class="article-detail">
        <span>Kota : ${restaurants.city}</span>
        <span>Rating : ${restaurants.rating}</span>
      </div>
      <a href="/#/detail/${restaurants.id}" id="resto-link" class="link-restaurant">
        <h3>${restaurants.name}</h3>
      </a>
      <p class="line-clamp">${restaurants.description}</p>
    </div>
  </article>
`;

const RestoDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <picture>
      <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_SMALL + restaurant.pictureId}" media="all and (max-width: 600px)">
      <source type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_LARGE + restaurant.pictureId}" media="all and (min-width: 601px)">
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_LARGE + restaurant.pictureId}" alt="${restaurant.name}" style="width: 100%;background-size: cover;object-fit: cover;display: block;margin: 0 auto;" />
    </picture>

    <h3>${restaurant.name}</h3>
    <span>${restaurant.address} - ${restaurant.city}</span>
    <p>${restaurant.description}</p>
  </div>
`;

const RestoFoodsTemplate = (food) => `
  <li><span>${food.name}</span></li>
`;

const RestoDrinksTemplate = (drink) => `
  <li><span>${drink.name}</span></li>
`;

const RestoReviewTemplate = (review) => `
  <div class="section">
    <div class="review-pic">
      <picture>
        <source type="image/webp" data-srcset="https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg" media="all and (max-width: 600px)">
        <source type="image/jpeg" data-srcset="https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg" media="all and (min-width: 601px)">
        <img class="lazyload" src="https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg" alt="avatar img" />
      </picture>
    </div>

    <div class="review-text">
      <h6>${review.name} - ${review.date}</h6>
      <p>${review.review}</p>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line max-len, object-curly-newline
export { RestoItemTemplate, RestoDetailTemplate, createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate, RestoFoodsTemplate, RestoReviewTemplate, RestoDrinksTemplate };
