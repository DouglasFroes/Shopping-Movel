import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Conteiner, TInput} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Input({style, icon, ...rest}, ref) {
  return (
    <Conteiner style={style}>
      {icon && <Icon name={icon} size={30} color="rgba(255,255,255, 0.6)" />}
      <TInput {...rest} ref={ref} />
    </Conteiner>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaltProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
