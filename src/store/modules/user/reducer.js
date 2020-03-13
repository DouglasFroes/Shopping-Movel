import produce from 'immer';

const INITE_STATE = {
  user: null,
};

export default function user(state = INITE_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SINGN_IN_SUCESS': {
        draft.user = action.payload.user;
        break;
      }
      default:
    }
  });
}
