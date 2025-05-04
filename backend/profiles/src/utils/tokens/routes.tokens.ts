const updateRoute = '/update';
const favoritesRoute = '/favorites';
const historyRoute = '/history';
const deleteRoute = '/delete';
const addRoute = '/add';
const createRoute = '/create';

export const routes = {
  default: '/',
  profilesBasePath: '/api/profiles',
  internalProfilesBasePath: '/internal/profiles',
  createDefualt: createRoute + '-default',
  create: createRoute,
  updateName: updateRoute + '-name',
  updateMaturity: updateRoute + '-maturity',
  updateAvatar: updateRoute + '-avatar',
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
