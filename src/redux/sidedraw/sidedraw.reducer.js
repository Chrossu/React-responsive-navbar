import { TOGGLE_SIDEDRAW } from './sidedraw.types';

const initialState = {
  isSideDrawOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEDRAW:
      return {
        ...state,
        isSideDrawOpen: !state.isSideDrawOpen
      }
    default:
      return state
  }
}