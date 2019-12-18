import { TOGGLE_SIDEDRAW } from './sidedraw.types';

const initialState = {
  sideDrawOpen: false
}

export default (state = initialState, action) => {
  switch (action) {
    case TOGGLE_SIDEDRAW:
      return {
        ...state,
        sideDrawOpen: !state.sideDrawOpen
      }
    default:
      return state
  }
}