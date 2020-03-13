import produce from 'immer';

const INITE_STATE = {
  token: null,
  singned: false,
  loading: false,
};

export default function auth(state = INITE_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SINGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SINGN_IN_SUCESS': {
        (draft.token = action.payload.token),
          (draft.singned = true),
          (draft.loading = false);
        break;
      }
      case '@auth/SINGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SINGN_UP_SUCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/SINGN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
