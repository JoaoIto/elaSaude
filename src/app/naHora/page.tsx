"use client"
import { Typography, Card, CardContent, Button, Grid, CircularProgress, Alert } from "@mui/material";
import useUserFetch from "../hooks/users/useUsers";
import { getStorageItem } from "../functions/token/getStorageItem";

export default function PainelDeSaude() {
  const token = getStorageItem();
  const { user, loading, error } = useUserFetch(token);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Erro ao buscar o usuário: {error.message}</Alert>;

  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Apresentação do usuário */}
      <Typography variant="h4" className="text-center text-darkPink mb-4">
        Olá {user?.dados_gerais.nome}, você está no elaSaúde, seu sistema de exames, resultados e laudos.
      </Typography>

      {/* Grid para os botões */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} sm={4}>
          <Card className="shadow-lg shadow-darkPink">
            <CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Exames
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Card className="shadow-lg shadow-darkPink">
            <CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Laudos
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Card className="shadow-lg shadow-darkPink">
            <CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Agendamento
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Card className="shadow-lg shadow-darkPink">
            <CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Consultas
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sm={4}>
          <Card className="shadow-lg shadow-darkPink">
            <CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Vacinas
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
