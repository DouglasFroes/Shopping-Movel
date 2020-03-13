import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Conteiner, Text} from './styles';

export default function Button({children, loading, ...rest}) {
  return (
    <Conteiner {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Conteiner>
  );
}

Button.propType = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaltProp = {
  loading: false,
};
