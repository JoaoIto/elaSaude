import { Typography, Card, CardContent } from "@mui/material";

export default function AdolescenteVacinacao() {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Card centralizado */}
      <Card className="w-3/4 h-full shadow-lg shadow-mediumPink">
        <CardContent>
          {/* Título da página */}
          <Typography variant="h4" className="text-center text-mediumPink mb-4">
            Saúde do Adolescente - Vacinação
          </Typography>

          {/* Texto da página */}
          <Typography variant="body1" className="text-justify text-black">
            HPV - A vacina contra o HPV é recomendada para meninas de 9 a 14 anos. O esquema de vacinação consiste em duas doses, administradas com um intervalo de seis meses entre elas. A vacinação nessa faixa etária é mais eficaz, pois geralmente ocorre antes da exposição ao vírus e do início da atividade sexual, garantindo maior proteção contra os tipos de HPV que podem causar câncer, principalmente o câncer de colo do útero. Além disso, a vacina também pode prevenir lesões pré-cancerosas e verrugas genitais causadas pelo HPV.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
