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
  },
  posterPath: {
    required: 'Media poster path ' + required,
  },
  releaseYear: {
    required: 'Media release year ' + required,
  },
  voteAverage: {
    required: 'Media vote average ' + required,
  },
};
