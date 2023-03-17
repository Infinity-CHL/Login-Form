import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SubmitHandler, useForm, Controller, useFormState } from 'react-hook-form';
import { loginValidation, passwordValidation } from './validation';
import './auth-form.css';

interface ISignInForm {
  login: string;
  password: string;
}

export const AuthForm = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({ control })

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <div className='auth-form'>
        <h2 className='title'>
          Войдите
        </h2>
        <p className='subtitle'>
          Чтобы получить доступ
        </p>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={ control }
            name="login"
            rules={loginValidation}
            render={({ field }) => (
              <TextField
                label="Логин"
                size='small'
                margin='normal'
                className='input'
                fullWidth={ true }
                onChange={(e) => field.onChange(e)}
                value={ field.value }
                error={ !!errors.login?.message }
                helperText={ errors.login?.message }
              />
            )}
          />
          <Controller
            control={ control }
            name="password"
            rules={ passwordValidation } 
            render={({ field }) => (
              <TextField
                label="Пароль"
                type="password"
                size='small'
                margin='normal'
                className='input'
                fullWidth={ true }
                onChange={(e) => field.onChange(e)}
                value={ field.value }
                error={ !!errors.password?.message }
                helperText={ errors.password?.message }
              />
            )}
          />
          <Button 
            type="submit"
            variant="contained"
            fullWidth={ true }
            disableElevation={ true }
            sx={{
              marginTop: 2
            }}
          >
            Войти
          </Button>
        </form>
    </div>
  )
}
