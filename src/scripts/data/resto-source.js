import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurante(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async menuFoods(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant.menus.foods;
  }

  static async menuDrinks(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant.menus.drinks;
  }

  static async restoReview(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant.customerReviews;
  }

  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.ADDREVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default TheRestoDbSource;
