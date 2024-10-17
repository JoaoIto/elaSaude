'use client'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

// Validação com Zod
const signupSchema = z.object({
  cpf: z.string().min(11, 'O CPF deve ter no mínimo 11 dígitos').max(14, 'CPF inválido'),
  name: z.string().min(2, 'O nome completo deve ter no mínimo 2 caracteres'),
  email: z.string().email('Insira um email válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type SignupFormInputs = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormInputs) => {
    console.log('Signup Form Data:', data);
  };

  return (
    <Container component="main" className='flex items-center justify-center w-full h-full'>
      <Box
        className="bg-lightGray p-8 mt-8 rounded-lg shadow-md" 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography component="h1" variant="h5" className="text-darkGray">
          Cadastro
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <TextField
            fullWidth
            label="CPF"
            variant="outlined"
            {...register('cpf')}
            error={!!errors.cpf}
            helperText={errors.cpf ? errors.cpf.message : ''}
            InputProps={{ style: { backgroundColor: '#ECECEC' } }}
          />
          <TextField
            fullWidth
            label="Nome Completo"
            variant="outlined"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
            InputProps={{ style: { backgroundColor: '#ECECEC' } }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
            InputProps={{ style: { backgroundColor: '#ECECEC' } }}
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
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
            Cadastrar
          </Button>
        </form>
      </Box>
    </Container>
  );
}
