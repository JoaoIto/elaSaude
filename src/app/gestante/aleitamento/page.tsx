import { Typography, Card, CardContent } from "@mui/material";

export default function AleitamentoMaterno() {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Card centralizado */}
      <Card className="w-3/4 h-full shadow-lg shadow-mediumPink">
        <CardContent>
          {/* Título da página */}
          <Typography variant="h4" className="text-center text-mediumPink mb-4">
            Saúde da Gestante - Aleitamento Materno
          </Typography>

          {/* Texto da página */}
          <Typography variant="body1" className="text-justify text-black">
            O aleitamento materno exclusivo até os 6 meses é um dos melhores presentes que você pode oferecer ao seu bebê. O leite materno contém todos os nutrientes que ele precisa para crescer de maneira saudável, além de fortalecer o sistema imunológico, protegendo-o de infecções e doenças, como diarreias e infecções respiratórias.
          </Typography>
          <ul className="list-disc ml-5 text-black">
            <li>
              <Typography variant="body1">
                <strong>Benefícios para o bebê:</strong> O leite materno supre todas as necessidades nutricionais do bebê, promovendo um desenvolvimento saudável e prevenindo alergias e obesidade futura.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Fortalecimento do vínculo mãe e filho:</strong> O ato de amamentar cria um vínculo especial, proporcionando conforto e segurança ao bebê.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Benefícios para a mãe:</strong> A amamentação ajuda a mãe a recuperar o peso pré-gestacional mais rapidamente e reduz o risco de desenvolver câncer de mama e ovário.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Praticidade e disponibilidade:</strong> O leite materno é um alimento natural, completo e sempre disponível, eliminando a necessidade de outros alimentos ou água até os 6 meses de vida.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" className="text-justify text-black mt-4">
            Portanto, o aleitamento materno exclusivo é uma escolha que traz benefícios para toda a vida do seu bebê e para você também.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
