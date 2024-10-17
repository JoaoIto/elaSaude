'use client'

import { useForm } from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import { TextField, Button, Box, Typography, Container } from '@mui/material';

// Validação com Zod
const loginSchema = z.object({
  cpf: z.string().min(11, 'O CPF deve ter no mínimo 11 dígitos').max(14, 'CPF inválido'),
  password: z.string().min(1, 'A senha deve ter no mínimo 1 caracteres'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>(
    {
      resolver: zodResolver(loginSchema),
    }
  );

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login Form Data:', data);
  };

  return (
    <Container component="main" className='w-full h-full flex items-center justify-center'>
      <Box
        className="p-8 mt-8 rounded-lg shadow-md"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography component="h1" variant="h5" className="text-darkGray">
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <TextField
            fullWidth
            label="CPF"
            variant="outlined"
            placeholder='CPF: 12345678901'
            {...register('cpf')}
            error={!!errors.cpf}
            helperText={errors.cpf ? errors.cpf.message : ''}
            InputProps={{ style: { backgroundColor: '#ECECEC' } }}
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
            placeholder='Senha: *********'
            variant="outlined"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
            InputProps={{ style: { backgroundColor: '#ECECEC' } }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-primary text-white hover:bg-mediumPink"
          >
            Entrar
          </Button>
        </form>
      </Box>
    </Container>
  );
}
