import { Typography, Card, CardContent } from "@mui/material";

export default function SaudeMulherMaisDe40Anos() {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Card centralizado */}
      <Card className="w-3/4 h-full shadow-lg shadow-darkPink">
        <CardContent>
          {/* Título da página */}
          <Typography variant="h4" className="text-center text-mediumPink mb-4">
            Saúde da Mulher + 40 Anos
          </Typography>

          {/* Subtítulo da seção */}
          <Typography variant="h5" className="text-mediumPink mb-4 text-center">
            Cuidados Essenciais
          </Typography>

          {/* Conteúdo sobre cuidados essenciais para mulheres a partir dos 40 anos */}
          <Typography variant="body1" className="text-justify text-black mb-4">
            A saúde das mulheres aos 40 anos passa por mudanças importantes devido às alterações hormonais que se aproximam da menopausa. Manter um estilo de vida saudável é essencial para prevenir doenças e manter o bem-estar nessa fase da vida.
          </Typography>

          {/* Avaliação Hormonal */}
          <Typography variant="h6" className="text-darkPink mt-4 mb-2">
            1. Avaliação Hormonal:
          </Typography>
          <Typography variant="body1" className="text-justify text-black mb-4">
            A partir dos 40, as mulheres começam a experimentar oscilações hormonais que podem levar a sintomas como irregularidades menstruais, mudanças no humor, ondas de calor e alterações no sono. Consultar um médico para avaliar os níveis hormonais pode ajudar a monitorar e, se necessário, tratar essas mudanças.
          </Typography>

          {/* Exames Cardiovasculares */}
          <Typography variant="h6" className="text-darkPink mt-4 mb-2">
            2. Exames Cardiovasculares:
          </Typography>
          <Typography variant="body1" className="text-justify text-black mb-4">
            A saúde do coração se torna uma preocupação maior a partir dessa idade. Exames regulares de pressão arterial, colesterol e glicemia são essenciais para prevenir problemas cardíacos e doenças como hipertensão e diabetes.
          </Typography>

          {/* Saúde Óssea */}
          <Typography variant="h6" className="text-darkPink mt-4 mb-2">
            3. Saúde Óssea:
          </Typography>
          <Typography variant="body1" className="text-justify text-black mb-4">
            Com a queda nos níveis de estrogênio, o risco de osteoporose aumenta. A avaliação da densidade óssea é um exame importante para garantir a saúde dos ossos e prevenir fraturas.
          </Typography>

          {/* Saúde Mental */}
          <Typography variant="h6" className="text-darkPink mt-4 mb-2">
            4. Saúde Mental:
          </Typography>
          <Typography variant="body1" className="text-justify text-black mb-4">
            Mudanças hormonais, somadas a fatores como estresse e envelhecimento, podem afetar a saúde mental. Cuidar do bem-estar psicológico e emocional é fundamental, incluindo práticas de relaxamento, atividades físicas e, se necessário, acompanhamento profissional.
          </Typography>

          {/* Check-ups de Rotina */}
          <Typography variant="h6" className="text-darkPink mt-4 mb-2">
            5. Check-ups de Rotina:
          </Typography>
          <Typography variant="body1" className="text-justify text-black mb-4">
            Além da mamografia, outros exames de rotina, como o papanicolau (preventivo) e ultrassonografia transvaginal, são importantes para a detecção precoce de problemas de saúde, como câncer de colo de útero e ovários.
          </Typography>

          {/* Conclusão */}
          <Typography variant="body1" className="text-justify text-black">
            Manter um acompanhamento médico regular, praticar exercícios físicos e manter uma dieta equilibrada são hábitos fundamentais para uma vida saudável após os 40.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
