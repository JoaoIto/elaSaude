import { Typography, Card, CardContent } from "@mui/material";

export default function AlimentacaoSaudavel() {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Card centralizado */}
      <Card className="w-3/4 h-full shadow-lg shadow-mediumPink">
        <CardContent>
          {/* Título da página */}
          <Typography variant="h4" className="text-center text-mediumPink mb-4">
            Saúde da Gestante - Alimentação Saudável
          </Typography>

          {/* Texto da página */}
          <Typography variant="body1" className="text-justify text-black">
            Manter uma alimentação equilibrada durante a gestação é fundamental para a saúde da mãe e o desenvolvimento do bebê. Priorize alimentos naturais e ricos em nutrientes, como frutas, legumes, verduras e proteínas magras, evitando alimentos ultraprocessados.
          </Typography>
          <ul className="list-disc ml-5 text-black">
            <li>
              <Typography variant="body1">
                <strong>Alimentos recomendados:</strong> Frutas, legumes, proteínas magras (como frango e peixe) e cereais integrais devem fazer parte da sua dieta diária.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Evite ultraprocessados:</strong> Alimentos ricos em açúcares e gorduras ruins podem contribuir para o ganho de peso excessivo.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Hidratação constante:</strong> Manter-se bem hidratada é essencial para a saúde da mãe e do bebê.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Porções controladas:</strong> Opte por pequenas refeições ao longo do dia, garantindo que todos os nutrientes sejam absorvidos de forma eficiente.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" className="text-justify text-black mt-4">
            O acompanhamento médico é essencial para ajustar a dieta de acordo com as necessidades da gestante, garantindo um ganho de peso saudável durante a gravidez.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
