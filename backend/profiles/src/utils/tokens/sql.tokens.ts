export const sql = {
  table: {
    profileWatchHistory: 'profile_watch_histories',
    profileFavorite: 'profile_favorites',
    profiles: 'profiles',
    media: 'media',
  },
  model: {
    profileWatchHistory: 'ProfileWatchHistory',
    profileFavorite: 'ProfileFavorite',
    profile: 'Profile',
    media: 'Media',
  },
  attributes: {
    favoriteMedia: 'favoriteMedia',
    mediaAttributes: ['mediaId', 'mediaType', 'title', 'posterPath', 'releaseYear', 'voteAverage'],
    createdAt: 'createdAt',
    ascending: 'ASC',
    descending: 'DESC',
  },
};
