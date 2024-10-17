'use client'

import { useState } from "react"
import Link from "next/link"
import { AppBar, Button, Card, CardContent, CardHeader, Container, Grid, Toolbar, Typography } from "@mui/material"
import { NavbarDrawer } from "./components/navbar"
import { CalendarToday, NavigateBefore, NavigateNext } from "@mui/icons-material"
import Carousel from 'react-material-ui-carousel'

export default function Component() {
  const [activeTab, setActiveTab] = useState("home")

  const notices = [
    { title: "Exame de Câncer de Mama", date: "15 de Out", color: "bg-[#D9A3AC]" },
    { title: "Webinar de Bem-Estar", date: "5 de Nov", color: "bg-[#CF8C95]" },
    { title: "Feira de Saúde", date: "1 de Dez", color: "bg-[#CF97A0]" },
  ]

  const healthTips = [
    { title: "Autoexame de Mama", content: "Realize mensalmente para detecção precoce." },
    { title: "Dieta Balanceada", content: "Inclua frutas, vegetais e grãos integrais." },
    { title: "Exercício Regular", content: "Aposte em 150 minutos por semana." },
    { title: "Gerenciamento de Estresse", content: "Pratique mindfulness e técnicas de relaxamento." },
  ]

  const newsItems = [
    { title: "Novo Estudo sobre Saúde do Coração da Mulher", content: "Pesquisadores encontram relação entre..." },
    { title: "Diretrizes de Triagem para Câncer Cervical Atualizadas", content: "Novas recomendações sugerem..." },
    { title: "Menopausa e Saúde Mental", content: "Entendendo a conexão entre..." },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#ECECEC]">
      <NavbarDrawer />

      <Container maxWidth="sm" className="flex-grow py-4">
        <Grid container spacing={2} className="mb-6">
          {notices.map((notice, index) => (
            <Grid item xs={4} key={index}>
              <Card className={`${notice.color} rounded-2xl aspect-square flex flex-col justify-center items-center text-white`}>
                <CardContent className="text-center">
                  <Typography variant="h6" className="font-bold">
                    {notice.title}
                  </Typography>
                  <Typography variant="body2">
                    {notice.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card className="bg-white mb-6">
          <CardHeader
            title={<Typography variant="h5" className="text-[#5A5E61]">Bem-vindo ao seu Centro de Saúde</Typography>}
            subheader={<Typography variant="body2">Mantenha-se informado, mantenha-se saudável</Typography>}
          />
          <CardContent>
            <div className="aspect-video mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wgFOfw5MdKs?si=zyaCTrhvF-nd3_aB"
                title="Visão Geral da Saúde da Mulher"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <Button
              component={Link}
              href="/schedule"
              variant="contained"
              fullWidth
              className="bg-[#CF97A0] hover:bg-[#CF8C95] text-white"
            >
              Agende uma Consulta
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white mb-6">
          <CardHeader title={<Typography variant="h5" className="text-[#5A5E61]">Dicas de Saúde</Typography>} />
          <CardContent>
            <Carousel
              NextIcon={<NavigateNext />}
              PrevIcon={<NavigateBefore />}
              navButtonsProps={{
                style: {
                  backgroundColor: '#CF97A0',
                  borderRadius: 0
                }
              }}
            >
              {healthTips.map((tip, index) => (
                <Card key={index} className="bg-[#ECECEC] p-4">
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

        <Card className="bg-white mb-6">
          <CardHeader title={<Typography variant="h5" className="text-[#5A5E61]">Últimas Notícias</Typography>} />
          <CardContent>
            <Carousel
              NextIcon={<NavigateNext />}
              PrevIcon={<NavigateBefore />}
              navButtonsProps={{
                style: {
                  backgroundColor: '#CF97A0',
                  borderRadius: 0
                }
              }}
            >
              {newsItems.map((item, index) => (
                <Card key={index} className="bg-[#ECECEC] p-4">
                  <Typography variant="h6" className="text-[#5A5E61] mb-2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="text-[#5A5E61]">
                    {item.content}
                  </Typography>
                </Card>
              ))}
            </Carousel>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader title={<Typography variant="h5" className="text-[#5A5E61]">Datas Importantes</Typography>} />
          <CardContent>
            <div className="flex items-center space-x-2 text-[#5A5E61]">
              <CalendarToday fontSize="small" />
              <Typography variant="body2">
                Mês de Conscientização sobre o Câncer de Mama: 1 a 31 de Outubro
              </Typography>
            </div>
            <div className="flex items-center space-x-2 text-[#5A5E61] mt-2">
              <CalendarToday fontSize="small" />
              <Typography variant="body2">
                Dia Mundial da Saúde: 7 de Abril
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Container>

      <AppBar position="fixed" color="default" className="top-auto bottom-0">
        <Toolbar className="justify-around">
          {["home", "calendário", "perfil", "configurações"].map((tab) => (
            <Button
              key={tab}
              color={activeTab === tab ? "primary" : "inherit"}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "bg-[#CF97A0] text-white" : "text-[#5A5E61]"}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  )
}
