"use client";

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import {
  BloodTestIcon,
  GeneralCheckupIcon,
  MammogramIcon,
} from "./components/icons/HeathIcons";
import { FooterBar } from "./components/footerBar";
import Link from 'next/link';

export default function Home() {

  const notices = [
    {
      title: "Exame de Câncer de Mama",
      date: "15 de Out",
      color: "bg-[#D9A3AC]",
    },
    { title: "Webinar de Bem-Estar", date: "5 de Nov", color: "bg-[#CF8C95]" },
    { title: "Feira de Saúde", date: "1 de Dez", color: "bg-[#CF97A0]" },
  ];

  const healthTips = [
    {
      title: "Autoexame de Mama",
      content: "Realize mensalmente para detecção precoce.",
    },
    {
      title: "Dieta Balanceada",
      content: "Inclua frutas, vegetais e grãos integrais.",
    },
    {
      title: "Exercício Regular",
      content: "Aposte em 150 minutos por semana.",
    },
    {
      title: "Gerenciamento de Estresse",
      content: "Pratique mindfulness e técnicas de relaxamento.",
    },
  ];

  const newsItems = [
    {
      title: "Novo Estudo sobre Saúde do Coração da Mulher",
      content: "Pesquisadores encontram relação entre...",
    },
    {
      title: "Diretrizes de Triagem para Câncer Cervical Atualizadas",
      content: "Novas recomendações sugerem...",
    },
    {
      title: "Menopausa e Saúde Mental",
      content: "Entendendo a conexão entre...",
    },
  ];

  const examCards = [
    { title: "Mamografia", icon: MammogramIcon, color: "#FF69B4", link: "/solicitacao/mamografia" },
    { title: "Exames de Sangue", icon: BloodTestIcon, color: "#DC143C", link: "/solicitacao/exames-sangue" },
    { title: "Check-up Geral", icon: GeneralCheckupIcon, color: "#FF4500", link: "/solicitacao/checkup-geral" },
  ];

  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <Container maxWidth="lg" className="flex-grow py-6">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card className="bg-mediumPink text-white p-6 rounded-lg">
              <Typography variant="h4" className="mb-2">
                Olá! Maria
              </Typography>
              <Typography variant="body1" className="mb-4">
                Acesse todo o seu histórico de resultados de exames em um só
                lugar.
              </Typography>
              <Button href="/meusExames" variant="contained" className="bg-white text-mediumPink">
                Ver meus exames
              </Button>
            </Card>
          </Grid>

         
            <Grid item xs={12}>
              <Typography variant="h5" className="mb-3 text-[#5A5E61]">
                Exames Recomendados
              </Typography>
              <Grid container spacing={2}  className="w-full flex items-center justify-evenly">
                {examCards.map((card, index) => (
                  <Grid item xs={9} sm={3} key={index}>
                    <Card className="h-full shadow-md transition-transform hover:scale-105">
                      <CardActionArea className="h-full">
                        <CardContent className="flex flex-col items-center justify-center h-full p-4">
                          <div style={{ color: card.color }}>
                            <card.icon style={{ fontSize: 48 }} />
                          </div>
                          <Button component={Link} href={card.link}>
                          <Typography
                            variant="subtitle1"
                            align="center"
                            className="text-[#5A5E61]"
                          >
                            {card.title}
                          </Typography>
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          

          <Grid item xs={12}>
            <Typography variant="h5" className="mb-3 text-[#5A5E61]">
              Próximos Eventos
            </Typography>
            <Grid container spacing={2}>
              {notices.map((notice, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card
                    className={`${notice.color} rounded-lg shadow-md h-full`}
                  >
                    <CardContent className="text-white p-4">
                      <Typography variant="h6" className="font-bold mb-2">
                        {notice.title}
                      </Typography>
                      <Typography variant="body2">{notice.date}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Card className="bg-white rounded-lg shadow-md mb-6">
              <CardHeader
                title={
                  <Typography variant="h5" className="text-[#5A5E61]">
                    Dicas de Saúde
                  </Typography>
                }
              />
              <CardContent>
                <Carousel
                  NextIcon={<NavigateNext />}
                  PrevIcon={<NavigateBefore />}
                  navButtonsProps={{
                    style: {
                      backgroundColor: "#0000FF",
                      borderRadius: "50%",
                    },
                  }}
                >
                  {healthTips.map((tip, index) => (
                    <Card
                      key={index}
                      className="bg-[#F5F5F5] p-4 rounded-lg shadow-sm"
                    >
                      <Typography variant="h6" className="text-[#5A5E61] mb-2">
                        {tip.title}
                      </Typography>
                      <Typography variant="body2" className="text-[#5A5E61]">
                        {tip.content}
                      </Typography>
                    </Card>
                  ))}
                </Carousel>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className="bg-white rounded-lg shadow-md">
              <CardHeader
                title={
                  <Typography variant="h5" className="text-[#5A5E61]">
                    Últimas Notícias
                  </Typography>
                }
              />
              <CardContent>
                {newsItems.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-[#F5F5F5] p-4 mb-3 rounded-lg shadow-sm"
                  >
                    <Typography variant="h6" className="text-[#5A5E61] mb-2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" className="text-[#5A5E61]">
                      {item.content}
                    </Typography>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <FooterBar/>
    </div>
  );
}
