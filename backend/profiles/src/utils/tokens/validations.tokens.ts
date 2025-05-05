import 'dotenv/config';

const { INTERNAL_ROUTE_SECRET } = process.env;
const secretLength = INTERNAL_ROUTE_SECRET!.length;

const required = 'is required';
export const validations = {
  userId: {
    required: `User Id ` + required,
    message: 'Invalid user id',
  },
  profileId: {
    required: `Profile Id ` + required,
    message: 'Invalid profile id',
  },
  mediaId: {
    required: `Media Id ` + required,
  },
  mediaType: {
    required: `Media Type ` + required,
  },
  secret: {
    required: 'Secret ' + required,
    min: {
      value: 1,
      message: 'Secret is required',
    },
    max: {
      value: secretLength,
      message: 'Invalid secret',
    },
  },
  title: {
    required: 'Media title ' + required,
    min: {
      value: 1,
      message: 'Invalid media title',
    },
    max: {
      value: 255,
      message: 'Invalid media title',
    },
  },
  posterPath: {
    required: 'Media poster path ' + required,
    min: {
      value: 3,
      message: 'Invalid media poster path',
    },
    max: {
      value: 255,
      message: 'Invalid media poster path',
    },
  },
  releaseYear: {
    required: 'Media release year ' + required,
    min: {
      value: 1800,
      message: 'Invalid media release year',
    },
    max: {
      value: 2040,
      message: 'Invalid media release year',
    },
  },
  voteAverage: {
    required: 'Media vote average ' + required,
    min: {
      value: 0,
      message: 'Invalid media vote average',
    },
    max: {
      value: 10,
      message: 'Invalid media vote average',
    },
  },
};
