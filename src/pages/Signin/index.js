import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';

import {singnInRequest} from '../../store/modules/auth/actions';

import {
  Conteiner,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingText,
} from './styles';

export default function Signin({navigation}) {
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, sendEmail] = useState('');
  const [password, sendPassword] = useState('');

  function handleSubmit() {
    dispatch(singnInRequest(email, password));
  }

  return (
    <Background>
      <Conteiner>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={sendEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={sendPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar
          </SubmitButton>
        </Form>
        <SingLink onPress={() => navigation.navigate('Create')}>
          <SingText>Criar Loja</SingText>
        </SingLink>
      </Conteiner>
    </Background>
  );
}
