import { Typography, Card, CardContent } from "@mui/material";

export default function MetodosContraceptivos() {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Card centralizado */}
      <Card className="w-3/4 h-full shadow-lg shadow-mediumPink">
        <CardContent>
          {/* Título da página */}
          <Typography variant="h4" className="text-center text-mediumPink mb-4">
            Métodos Contraceptivos
          </Typography>

          {/* Lista dos métodos contraceptivos */}
          <Typography variant="body1" className="text-justify text-black">
            Aqui estão alguns dos principais métodos contraceptivos disponíveis:
          </Typography>

          {/* Método 1 - Pílula Anticoncepcional */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            1. Pílula Anticoncepcional
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Contém hormônios que impedem a ovulação. Pode ser combinada (com estrogênio e progesterona) ou apenas de progesterona. Deve ser tomada diariamente, e sua eficácia depende do uso correto.
          </Typography>

          {/* Método 2 - DIU (Dispositivo Intrauterino) */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            2. DIU (Dispositivo Intrauterino)
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Um pequeno dispositivo inserido no útero. Pode ser de cobre (impede a fecundação) ou hormonal (libera progesterona, inibindo a ovulação). Dura de 3 a 10 anos, dependendo do tipo.
          </Typography>

          {/* Método 3 - Implante Subdérmico */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            3. Implante Subdérmico
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Pequeno bastão inserido sob a pele do braço, libera hormônios e dura cerca de 3 anos, sendo uma opção prática e de longa duração.
          </Typography>

          {/* Método 4 - Injeção Contraceptiva */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            4. Injeção Contraceptiva
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Consiste em uma injeção de hormônios aplicada mensalmente ou trimestralmente, inibindo a ovulação. Requer regularidade para ser eficaz.
          </Typography>

          {/* Método 5 - Preservativo (Camisinha) */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            5. Preservativo (Camisinha)
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Além de prevenir a gravidez, protege contra infecções sexualmente transmissíveis (ISTs). Disponível em versões masculina e feminina.
          </Typography>

          {/* Método 6 - Anel Vaginal */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            6. Anel Vaginal
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Dispositivo flexível que libera hormônios. É inserido na vagina e permanece por 3 semanas, seguido de uma pausa de uma semana.
          </Typography>

          {/* Método 7 - Adesivo Contraceptivo */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            7. Adesivo Contraceptivo
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Libera hormônios diretamente na corrente sanguínea e deve ser trocado semanalmente por três semanas consecutivas, com uma pausa na quarta semana.
          </Typography>

          {/* Método 8 - Pílula do Dia Seguinte */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            8. Pílula do Dia Seguinte
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Método de emergência para casos de falha contraceptiva, como rompimento da camisinha, ou em situações de violência sexual. Não deve ser utilizado como método regular devido à alta concentração de hormônios.
          </Typography>

          {/* Método 9 - Laqueadura */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            9. Laqueadura
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Método permanente, indicado para mulheres que não desejam mais ter filhos. Envolve uma cirurgia que bloqueia as trompas de Falópio.
          </Typography>

          {/* Método 10 - Métodos Naturais */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            10. Métodos Naturais
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Métodos baseados na observação do ciclo menstrual, como a temperatura basal ou o controle de muco cervical. Requerem conhecimento detalhado do corpo e disciplina rigorosa.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
