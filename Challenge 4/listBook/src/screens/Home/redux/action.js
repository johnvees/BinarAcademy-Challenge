export const setRecommendedBook = payload => {
  return {
    type: 'SET_RECOMMENDED_BOOK',
    dataRecommended: payload,
  };
};
