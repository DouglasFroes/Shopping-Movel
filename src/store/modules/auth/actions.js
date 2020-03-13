export function singnInRequest(email, password) {
  return {
    type: '@auth/SINGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function singnInSucess(token, user) {
  return {
    type: '@auth/SINGN_IN_SUCESS',
    payload: {token, user},
  };
}

export function singnUpRequest(name, email, password) {
  return {
    type: '@auth/SINGN_UP_REQUEST',
    payload: {name, email, password},
  };
}

export function singnUpSucess() {
  return {
    type: '@auth/SINGN_UP_SUCESS',
  };
}

export function singnFailure() {
  return {
    type: '@auth/SINGN_FAILURE',
  };
}
