import { MediaType } from '../../enums/media-type.enum';
import { routes } from './routes.tokens';
import 'dotenv/config';

const validUUID1 = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
const validUUID2 = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';
const validSecret = process.env.INTERNAL_ROUTE_SECRET!;
const validMediaId = 123;
const validMovieType = MediaType.MOVIE;
const validTitle = 'valid title';
const validPosterPath = '/validpath.jpg';
const validReleaseYear = 1999;
const validVoteAverage = 8.5;

const invalidUUID = 'invalid-uuid';
const invalidSecret = 'invalid-secret';
const invalidMediaId = 'invalid-media-id';
const invalidMediaType = 'invalid-media-type';

const profileBasePath: string = routes.profilesBasePath;
const internalProfileBasePath: string = routes.internalProfilesBasePath;
const createDefaultProfileRoute = internalProfileBasePath + routes.createDefualt;
const meProfileRoute = profileBasePath + routes.me;
const favoritesRoute = profileBasePath + routes.favorites.get;
const addFavoriteRoute = profileBasePath + routes.favorites.add;
const removeFavoriteRoute = profileBasePath + routes.favorites.remove;

export const tests = {
  data: {
    valid: {
      internalProfile: {
        createDefaultProfileRequest: {
          userId: validUUID1,
          secret: validSecret,
        },
      },
      profile: {
        meProfileRequest: {
          userId: validUUID1,
        },
        getFavoritesRequest: {
          userId: validUUID1,
          profileId: validUUID1,
        },
        addFavoriteRequest: {
          userId: validUUID1,
          profileId: validUUID1,
          mediaId: validMediaId,
          mediaType: validMovieType,
          title: validTitle,
          posterPath: validPosterPath,
          releaseYear: validReleaseYear,
          voteAverage: validVoteAverage,
        },
        removeFavoriteRequest: {
          userId: validUUID1,
          profileId: validUUID1,
          mediaId: validMediaId,
          mediaType: validMovieType,
        },
      },
    },
    invalid: {
      internalProfile: {
        createDefaultProfileRequest_MissingUser: {
          secret: validSecret,
        },
        createDefaultProfileRequest_InvalidUser: {
          userId: invalidUUID,
          secret: validSecret,
        },
        createDefaultProfileRequest_InvalidSecret: {
          userId: validUUID1,
          secret: invalidSecret,
        },
      },
      profile: {
        meProfile_MissingProfile: {
          userId: validUUID1,
          profileId: validUUID1,
        },
        getFavorites_MissingProfileId: {},
        getFavorites_InvalidProfileId: {
          userId: validUUID1,
          profileId: invalidUUID,
        },
        getFavorites_DifferentUserId: {
          userId: validUUID2,
          profileId: validUUID1,
        },
        addFavorite_InvalidMediaId: {
          userId: validUUID1,
          profileId: validUUID1,
          mediaId: invalidMediaId,
          mediaType: validMovieType,
          title: validTitle,
          posterPath: validPosterPath,
          releaseYear: validReleaseYear,
          voteAverage: validVoteAverage,
        },
        addFavorite_InvalidMediaType: {
          profileId: validUUID1,
          mediaId: validMediaId,
          mediaType: invalidMediaType,
          title: validTitle,
          posterPath: validPosterPath,
          releaseYear: validReleaseYear,
          voteAverage: validVoteAverage,
        },
        removeFavorite_MissingMediaId: {
          profileId: validUUID1,
          mediaType: validMovieType,
        },
      },
    },
  },
  routes: {
    createDefaultProfileRoute,
    meProfileRoute,
    favoritesRoute,
    addFavoriteRoute,
    removeFavoriteRoute,
  },
  suites: {
    profileController: {
      title: 'Tests For Profile Controller (Public Routes)',
      me: {
        title: `Get User Profile (GET ${meProfileRoute})`,
        cases: {
          success: 'Should return 200 and profile data for authenticated user',
          notFound: 'Should return 400 if no profile exists for the user',
        },
      },
      favoritesGet: {
        title: `Get Favorites (GET ${favoritesRoute})`,
        cases: {
          successEmpty: 'Should return 200 and empty array if profile has no favorites',
          successWithData: 'Should return 200 and favorites list if profile has favorites',
          invalidBody: 'Should return 400 if profileId is missing or invalid in body',
          authFail:
            'Should return 400 if requested profileId does not belong to authenticated user',
        },
      },
      favoritesAdd: {
        title: `Add Favorite (POST ${addFavoriteRoute})`,
        cases: {
          successNew: 'Should return 201 if favorite added successfully',
          successExisting: 'Should return 200 if favorite already exists',
          invalidBody: 'Should return 400 if body is invalid (missing fields, bad types)',
        },
      },
      favoritesRemove: {
        title: `Remove Favorite (DELETE ${removeFavoriteRoute})`,
        cases: {
          success: 'Should return 200 if favorite removed successfully',
          notFound: 'Should return 404 if favorite does not exist',
          invalidBody: 'Should return 400 if body is invalid',
        },
      },
    },
    internalProfileController: {
      title: 'Tests For Internal Profile Controller',
      createDefault: {
        title: `Create Default Profile (POST ${createDefaultProfileRoute})`,
        cases: {
          success: 'Should return 201 and profile data on successful creation',
          alreadyExists: 'Should return 201/OK and profile data if profile already exists',
          invalidBody: 'Should return 400 if userId is missing or invalid',
          secretFail: 'Should return 400 if internal secret middleware fails',
        },
      },
    },
  },
};
