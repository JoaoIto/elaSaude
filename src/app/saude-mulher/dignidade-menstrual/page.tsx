import { Typography, Card, CardContent } from "@mui/material";

export default function DignidadeMenstrual() {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      {/* Card centralizado */}
      <Card className="w-3/4 h-full shadow-lg shadow-mediumPink">
        <CardContent>
          {/* Título da página */}
          <Typography variant="h4" className="text-center text-mediumPink mb-4">
            Dignidade Menstrual
          </Typography>

          {/* Subtítulo */}
          <Typography variant="h5" className="text-mediumPink mt-2 mb-2">
            O que é e por que é importante?
          </Typography>

          {/* Texto principal */}
          <Typography variant="body1" className="text-justify text-black">
            A dignidade menstrual refere-se ao direito que as mulheres e pessoas que menstruam têm de cuidar adequadamente da sua saúde menstrual, de forma segura, higiênica e com acesso a produtos adequados, em um ambiente saudável e livre de discriminação ou constrangimento.
          </Typography>

          {/* Principais aspectos da dignidade menstrual */}
          <Typography variant="h6" className="text-mediumPink mt-4 mb-2">
            Principais Aspectos da Dignidade Menstrual:
          </Typography>

          {/* Aspecto 1 - Acesso a Produtos de Higiene Menstrual */}
          <Typography variant="h6" className="text-black">
            1. Acesso a Produtos de Higiene Menstrual
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Muitas mulheres enfrentam dificuldades para obter produtos de higiene menstrual como absorventes e coletores menstruais, principalmente por razões econômicas, o que caracteriza a pobreza menstrual. Sem esses produtos, algumas recorrem a materiais inadequados e inseguros, prejudicando a higiene e a saúde.
          </Typography>

          {/* Aspecto 2 - Educação Menstrual */}
          <Typography variant="h6" className="text-black mt-4">
            2. Educação Menstrual
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Educação sobre menstruação é essencial para desmistificar o processo e ajudar as meninas a entenderem seus corpos. É importante que essa educação comece cedo, nas escolas e em casa, para evitar tabus e promover o autocuidado.
          </Typography>

          {/* Aspecto 3 - Infraestrutura Adequada */}
          <Typography variant="h6" className="text-black mt-4">
            3. Infraestrutura Adequada
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Ter acesso a banheiros limpos, com água corrente e sabão, é essencial para uma boa higiene menstrual. Isso vale para ambientes públicos, escolas e locais de trabalho, garantindo que as mulheres possam manter sua higiene de forma segura e digna.
          </Typography>

          {/* Aspecto 4 - Combate ao Estigma e à Discriminação */}
          <Typography variant="h6" className="text-black mt-4">
            4. Combate ao Estigma e à Discriminação
          </Typography>
          <Typography variant="body1" className="text-justify text-black">
            Em muitas culturas, a menstruação ainda é cercada de preconceitos. Combater esses estigmas é fundamental para garantir que mulheres e meninas não se sintam envergonhadas durante seu período menstrual, promovendo assim o respeito ao ciclo natural do corpo feminino.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
