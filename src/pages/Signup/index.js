import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';
import {singnUpRequest} from '../../store/modules/auth/actions';

import {
  Conteiner,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingText,
} from './styles';

export default function Signup({navigation}) {
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  const [name, sendName] = useState('');
  const [email, sendEmail] = useState('');
  const [password, sendPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordlRef = useRef();

  function henderSubmit() {
    dispatch(singnUpRequest(name, email, password));
  }

  return (
    <Background>
      <Conteiner>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu Nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={sendName}
          />
          <FormInput
            icon="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            ref={emailRef}
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
            returnKeyType="next"
            onSubmitEditing={() => confPasswordlRef.current.focus()}
            value={password}
            onChangeText={sendPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua senha"
            ref={confPasswordlRef}
            returnKeyType="send"
            onSubmitEditing={henderSubmit}
          />
          <SubmitButton loading={loading} onPress={henderSubmit}>
            Criar Conta
          </SubmitButton>
        </Form>
        <SingLink onPress={() => navigation.navigate('Singnin')}>
          <SingText>Ja possui uma conta</SingText>
        </SingLink>
      </Conteiner>
    </Background>
  );
}
