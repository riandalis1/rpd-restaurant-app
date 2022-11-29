import Resto from '../views/pages/resto';
import Favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
  '/': Resto, // default page
  '/resto': Resto,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
