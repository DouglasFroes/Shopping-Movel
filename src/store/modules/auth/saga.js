import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';
import {singnInSucess, singnUpSucess, singnFailure} from './actions';

export function* singnIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, 'session/store', {email, password});

    const {token, user} = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(singnInSucess(token, user));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, Verifique seus dados e tente novamente',
    );
    yield put(singnFailure());
  }
}

export function* singnUp({payload}) {
  try {
    const {name, email, password} = payload;

    yield call(api.post, 'create/store', {
      storeName: name,
      email,
      password,
      roles: [1],
    });

    yield put(singnUpSucess());
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro, verifique seus dados e tente novamente',
    );
    yield put(singnFailure());
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function singnOut() {}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SINGN_IN_REQUEST', singnIn),
  takeLatest('@auth/SINGN_UP_REQUEST', singnUp),
  takeLatest('@auth/SINGN_OUT_REQUEST', singnOut),
]);
