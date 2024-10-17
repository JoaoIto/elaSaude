import { Card, CardContent, Typography } from "@mui/material";

export default function AtividadeFisica(){
    return (
        <div className="flex flex-col items-center justify-center bg-lightGray p-4">
          {/* Card centralizado */}
          <Card className="w-3/4 h-full shadow-lg shadow-mediumPink">
            <CardContent>
              {/* Título da página */}
              <Typography variant="h4" className="text-center text-mediumPink mb-4">
                Saúde da Gestante - Atividade Física
              </Typography>
    
              {/* Texto da página */}
              <Typography variant="body1" className="text-justify text-black">
                A atividade física durante a gravidez traz inúmeros benefícios tanto para a mãe quanto para o bebê. Entre as principais vantagens estão:
              </Typography>
              <ul className="list-disc ml-5 text-black">
                <li>
                  <Typography variant="body1">
                    <strong>Melhora da Circulação e Redução de Inchaços:</strong> Exercícios ajudam a melhorar a circulação sanguínea, reduzindo o inchaço nas pernas e pés, comum durante a gestação.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Controle de Peso:</strong> Manter-se ativa ajuda a controlar o ganho de peso de maneira saudável, prevenindo complicações como diabetes gestacional e hipertensão.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Melhora do Humor e Redução do Estresse:</strong> A atividade física libera endorfinas, que melhoram o humor e ajudam a reduzir o estresse e a ansiedade, comuns durante a gravidez.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Fortalecimento Muscular e Preparo para o Parto:</strong> Exercícios fortalecem os músculos, especialmente os abdominais e da região pélvica, facilitando o trabalho de parto e ajudando na recuperação pós-parto.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Melhora da Postura e Redução de Dores:</strong> Exercícios, como alongamento e yoga, ajudam a melhorar a postura e a reduzir dores nas costas, comuns devido às mudanças no corpo da gestante.
                  </Typography>
                </li>
              </ul>
              <Typography variant="body1" className="text-justify text-black mt-4">
                Antes de iniciar qualquer atividade física, é fundamental que a gestante consulte o médico para garantir que está tudo bem com sua saúde e a do bebê.
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
}