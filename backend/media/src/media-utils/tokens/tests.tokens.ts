export const tests = {
  titles:{
    test: 'Test',
  },
  suites: {
    mediaController: {
      title: 'Tests For Media Controller',
      getAllMovies: {
        title: 'get all movies',
        cases: {
          success: 'Should return status code 200 if return all the movies in successfully',
          notFound: 'Should return status code 400 if it doesnt return all the movies',
        },
      },
      getAllTVs: {
        title: 'get all TVs',
        cases: {
          success: 'Should return status code 200 if return all the tvs in successfully',
          notFound: "Should return status code 400 if it doesnt return all the tvs",
        },
      },
      getAllMedia: {
        title: 'get all media',
        cases: {
          success: 'Should return status code 200 if return all the media in successfully',
          notFound: "Should return status code 400 if it doesnt return all the media",
        },
      },
      Search: {
        title: 'search',
        cases: {
          success: 'Should return status code 200 search successfully',
          notFound: "Should return status code 400 if search not found",
        },
        data: {
          existingMovieId: '42',
          existingTVId: '99',
          searchQuery: 'Matrix', 
        }
      },
      GetMovieById: {
        title: 'search',
        cases: {
          success: 'Should return status code 200 search successfully',
          notFound: "Should return status code 400 if search not found",
        },
        data: {
          existingMovieId: '42',
          searchQuery: 'Matrix', 
        }
      },
      GetTVById: {
        title: 'search',
        cases: {
          success: 'Should return status code 200 search successfully',
          notFound: "Should return status code 400 if search not found",
        },
        data: {
          existingTVId: '99',
          searchQuery: 'Matrix', 
        }
      }
    },
  },
};
