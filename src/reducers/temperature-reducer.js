import { initialState } from '../data/initialState';
const { temperature } = initialState;

const temperatureReducer = (state = temperature, action) => {
  return state;
}

export default temperatureReducer;