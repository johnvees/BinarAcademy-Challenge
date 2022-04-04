const initialState = {
  recommendedBook: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECOMMENDED_BOOK':
      return {
        ...state,
        recommendedBook: action.dataRecommended,
      };

    default:
      return {
        ...state,
      };
  }
};

export default HomeReducer;
