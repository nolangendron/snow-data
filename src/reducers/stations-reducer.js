import { initialState } from '../data/initialState';
const { stations } = initialState;

const stationsReducer = (state = stations, action) => {
  return state;
}

export default stationsReducer;