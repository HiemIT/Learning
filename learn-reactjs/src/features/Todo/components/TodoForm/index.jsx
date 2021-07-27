import propTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../../components/form-controls/InputField/index';

TodoForm.propTypes = {
  onSubmit: propTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short!'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} autoComplete="off">
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
