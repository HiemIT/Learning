import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
import { PropTypes } from 'prop-types';
import { useSnackbar } from 'notistack';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { closeDialog } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      // close dialog
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar('Register Successfully!!', { variant: 'success' });

      console.log('new user', user);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
