import { Typography, Card, CardContent } from "@mui/material";

export default function MamografiaMaisDe40Anos() {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Card centralizado */}
      <Card className="w-3/4 h-full shadow-lg shadow-darkPink">
        <CardContent>
          {/* Título da página */}
          <Typography variant="h4" className="text-center text-mediumPink mb-4">
            Saúde da Mulher + 40 Anos
          </Typography>

          {/* Conteúdo sobre a mamografia */}
          <Typography variant="body1" className="text-justify text-black">
            O câncer é uma das principais causas de morte em mulheres, mas a detecção precoce pode aumentar significativamente as chances de cura e permitir tratamentos menos invasivos. A mamografia, recomendada a partir dos 50 anos, é o principal exame utilizado para identificar tumores em estágios iniciais, antes que sejam palpáveis.
          </Typography>

          <Typography variant="body1" className="text-justify text-black mt-4">
            A detecção precoce do câncer de mama envolve exames de rastreamento, como a mamografia, que pode identificar a doença antes do surgimento de sintomas. A realização regular desse exame aumenta as chances de cura e permite um tratamento mais eficaz.
          </Typography>

          {/* Recomendações para rastreamento */}
          <Typography variant="h6" className="text-darkPink mt-4 mb-2">
            Recomendações de Rastreamento:
          </Typography>

          {/* Mulheres abaixo dos 50 anos */}
          <Typography variant="body1" className="text-justify text-black">
            Para mulheres entre 40 e 49 anos, o rastreamento com mamografia pode ser realizado com base em uma decisão compartilhada entre a mulher e seu médico, considerando os benefícios e os riscos. Isso ocorre porque, nessa faixa etária, a densidade mamária pode reduzir a precisão dos resultados do exame.
          </Typography>

          <Typography variant="body1" className="text-justify text-black mt-4">
            A partir dos 50 anos, a mamografia é altamente recomendada, sendo uma ferramenta crucial para a detecção precoce de tumores e para a redução da mortalidade associada ao câncer de mama.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
