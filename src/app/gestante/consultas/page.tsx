import { Typography, Card, CardContent } from "@mui/material";

export default function ConsultasExames() {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Card centralizado */}
      <Card className="w-3/4 h-full shadow-lg shadow-mediumPink">
        <CardContent>
          {/* Título da página */}
          <Typography variant="h4" className="text-center text-mediumPink mb-4">
            Consultas e Exames - Pré-Natal
          </Typography>

          {/* Texto da página */}
          <Typography variant="body1" className="text-justify text-black">
            As consultas de pré-natal são essenciais para acompanhar a saúde da mãe e do bebê. Elas podem ser realizadas na unidade de saúde ou durante visitas domiciliares, dependendo das necessidades da gestante.
          </Typography>

          <Typography variant="body1" className="text-justify text-black mt-4">
            No mínimo, 6 consultas devem ser realizadas ao longo da gravidez, e alguns exames complementares são solicitados logo na primeira consulta para garantir um acompanhamento adequado. Esses exames incluem:
          </Typography>

          <ul className="list-disc ml-5 text-black">
            <li>
              <Typography variant="body1">
                Hemograma completo
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Tipagem sanguínea e fator Rh
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Coombs indireto (para gestantes Rh negativo)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Glicemia de jejum
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Testes rápidos de triagem para sífilis (VDRL/RPR) e HIV
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Sorologia para toxoplasmose (IgM e IgG) e hepatite B (HbsAg)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Exame de urina e urocultura
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Ultrassonografia obstétrica (não obrigatória)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Citopatológico de colo de útero (se necessário)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Exame da secreção vaginal (se houver indicação clínica)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Parasitológico de fezes (se houver indicação clínica)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Eletroforese de hemoglobina (para gestantes negras ou com antecedentes de anemia)
              </Typography>
            </li>
          </ul>

          <Typography variant="body1" className="text-justify text-black mt-4">
            Seguir o calendário de consultas e realizar os exames indicados são passos importantes para garantir uma gravidez segura e tranquila, protegendo a saúde da mãe e do bebê.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
