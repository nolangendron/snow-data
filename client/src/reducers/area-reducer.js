import { initialState } from '../data/initialState';
import { SET_CURRENT_AREA } from '../actions/area-action';
const { area } = initialState;

const areaReducer = (state = area, action) => {
  const { payload } = action
  switch (action.type) {
    case SET_CURRENT_AREA:
      return {
        ...state, name: payload.id
      }
    default:
      return state;
  }

}

export default areaReducer;