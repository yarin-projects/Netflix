const updateRoute = '/update';
const favoritesRoute = '/favorites';
const historyRoute = '/history';
const deleteRoute = '/delete';
const addRoute = '/add';

export const routes = {
  default: '/',
  profilesBasePath: '/api/profiles',
  create: '/create',
  updateName: `${updateRoute}-name`,
  updateMaturity: `${updateRoute}-maturity`,
  updateAvatar: `${updateRoute}-avatar`,
  delete: deleteRoute,
  favorites: {
    get: favoritesRoute,
    add: favoritesRoute + addRoute,
    remove: favoritesRoute + deleteRoute,
  },
  history: {
    get: historyRoute,
    add: historyRoute + addRoute,
  },
  me: '/me',
};
