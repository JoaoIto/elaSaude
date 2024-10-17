import { Typography, Card, CardContent } from "@mui/material";

export default function MamografiaMaisDe50Anos() {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Card centralizado */}
      <Card className="w-3/4 h-full shadow-lg shadow-darkPink">
        <CardContent>
          {/* Título da página */}
          <Typography variant="h4" className="text-center text-mediumPink mb-4">
            Saúde da Mulher + 50 Anos
          </Typography>

          {/* Conteúdo sobre a mamografia para mulheres de 50 a 69 anos */}
          <Typography variant="body1" className="text-justify text-black">
            Para mulheres de 50 a 69 anos, é recomendado realizar a mamografia a cada dois anos. Este exame é fundamental para a detecção precoce do câncer de mama, possibilitando iniciar o tratamento antes que a doença se espalhe e aumentando significativamente as chances de cura.
          </Typography>

          {/* Mulheres com alto risco */}
          <Typography variant="h6" className="text-darkPink mt-4 mb-2">
            Mulheres com Alto Risco:
          </Typography>

          <Typography variant="body1" className="text-justify text-black">
            Mulheres com fatores de risco mais elevados, como histórico familiar de câncer de mama, mutações nos genes BRCA1 ou BRCA2, ou exposição à radiação no tórax, podem precisar iniciar o rastreamento mais cedo, a partir dos 30 ou 35 anos. Além da mamografia, pode ser recomendada a ressonância magnética como exame complementar.
          </Typography>

          {/* Alerta sobre o diagnóstico precoce */}
          <Typography variant="h6" className="text-darkPink mt-4 mb-2">
            Importância do Diagnóstico Precoce:
          </Typography>

          <Typography variant="body1" className="text-justify text-black">
            O diagnóstico precoce do câncer de mama permite iniciar o tratamento rapidamente, aumentando as chances de cura e permitindo terapias menos invasivas. Os sinais de alerta incluem nódulo endurecido, alterações no tamanho ou na pele da mama, mudanças no formato do mamilo, secreção anormal, dor persistente e inchaço nos linfonodos.
          </Typography>

          {/* Fatores de risco */}
          <Typography variant="h6" className="text-darkPink mt-4 mb-2">
            Fatores de Risco:
          </Typography>

          <Typography variant="body1" className="text-justify text-black">
            Idade acima de 50 anos, histórico familiar de câncer de mama, mutações genéticas (BRCA1/BRCA2), estilo de vida inadequado (sedentarismo, consumo excessivo de álcool, tabagismo) e exposição prolongada a hormônios são fatores que aumentam o risco de desenvolver a doença. Menstruação precoce e menopausa tardia também são fatores que elevam esse risco.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
