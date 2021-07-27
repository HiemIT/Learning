import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import propTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField/index';
import { makeStyles } from '@material-ui/core/styles';
import PasswordField from '../../../../components/form-controls/PasswordFiled';

const useStyles = makeStyles((theme) => ({
  root: { paddingTop: theme.spacing(4) },
  avatar: { margin: 'auto', backgroundColor: theme.palette.secondary.main },
  title: { textAlign: 'center', margin: theme.spacing(2, 0, 3, 0) },
  submit: { margin: theme.spacing(3, 0, 2, 0) },
  progress: { position: 'absolute', top: 0, left: 0, right: 0 },
}));

RegisterForm.propTypes = {
  onSubmit: propTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test('Should has at least two words.', 'Please enter at least two words.', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('Please enter your email.').email('Please enter an valid email address.'),
    password: yup.string().required('Please enter your password.').min(6, 'Please enter at least six characters.'),
    retypePassword: yup
      .string()
      .required('Please enter your password')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      await onSubmit(values);
    }
    // form.reset();
  };
  const classes = useStyles();

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create a account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)} autoComplete="off">
        <InputField name="fullName" label="Full name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Create a account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
