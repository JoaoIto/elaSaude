'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { tokenService } from '@/app/functions/token/token';

// Validação com Zod
const loginSchema = z.object({
  cpf: z.string().length(11, 'O CPF deve ter 11 dígitos'), // Atualizado para length
  password: z.string().min(1, 'A senha deve ter no mínimo 1 caracteres'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log('Login Form Data:', data);

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const responseData = await response.json();
      
      if (responseData.length > 0) {
        // Supondo que o token esteja no primeiro usuário retornado
        const user = responseData[0]; // Pega o primeiro usuário
        tokenService.save(user.token);
        console.log('Token salvo:', user.token);
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
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
            value={"12345678901"}
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
            value={"senha123"}
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
