"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { Exame } from "@/app/interfaces/IExame";
import { BloodTestIcon, GeneralCheckupIcon, MammogramIcon } from "@/app/components/icons/HeathIcons";
import { FooterBar } from "@/app/components/footerBar";
import { useRouter } from "next/navigation";

export default function ExamesPacientes() {
  const [exams, setExams] = useState<Exame[]>([]); // Use a interface Exame
  const router = useRouter();
  
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const mamografiaResponse = await fetch("http://localhost:3001/mamografia");
        const examesSangueResponse = await fetch("http://localhost:3001/examesSangue");
        const checkupGeralResponse = await fetch("http://localhost:3001/checkupGeral");

        const mamografiaData: Exame[] = await mamografiaResponse.json(); // Define o tipo do dado recebido
        const examesSangueData: Exame[] = await examesSangueResponse.json(); // Define o tipo do dado recebido
        const checkupGeralData: Exame[] = await checkupGeralResponse.json(); // Define o tipo do dado recebido

        // Combina os dados de todas as requisições
        const allExams = [
          ...mamografiaData,
          ...examesSangueData,
          ...checkupGeralData,
        ];

        setExams(allExams);
      } catch (error) {
        console.error("Erro ao buscar os exames:", error);
      }
    };

    fetchExams();
  }, []);

  const handleProsseguir = (cartaoSus: string) => {
    router.push(`/laboratorio/exames-pacientes/${cartaoSus}`); // Redireciona para a nova página com o id do exame
  };

  return (
    <div className="flex flex-col items-center justify-center bg-lightGray p-4">
      <Container maxWidth="lg" className="py-6">
        <Typography variant="h4" className="mb-4 text-center">
          Meus Exames
        </Typography>
        <Grid container spacing={3}>
          {exams.map((exam) => (
            <Grid item xs={12} sm={6} md={4} key={exam.cartaoSus}>
              <Card className="rounded-lg shadow-md">
                <CardHeader
                  title={
                    <Typography variant="h5" className="text-white">
                      {exam.nomeExame}
                    </Typography>
                  }
                  className={`bg-mediumPink text-white`}
                />
                <CardActionArea>
                  <CardContent className="flex flex-col items-center p-4">
                    <div style={{ color: "#5A5E61" }}>
                      {exam.nomeExame === "Mamografia" && <MammogramIcon style={{ fontSize: 48 }} />}
                      {exam.nomeExame === "Exame de Sangue" && <BloodTestIcon style={{ fontSize: 48 }} />}
                      {exam.nomeExame === "Check-up Geral" && <GeneralCheckupIcon style={{ fontSize: 48 }} />}
                    </div>
                    <Typography variant="subtitle1" align="center" className="text-[#5A5E61]">
                      Paciente: {exam.nomePaciente}
                    </Typography>
                    <Typography variant="body2" align="center" className="text-[#5A5E61]">
                      Data de Nascimento: {exam.dataNascimento}
                    </Typography>
                    <Typography variant="body2" align="center" className="text-[#5A5E61]">
                      Motivo: {exam.motivoConsulta}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleProsseguir(exam.cartaoSus)} // Chama a função de prosseguir
                      className="mt-2 bg-mediumPink"
                    >
                      Prosseguir
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterBar />
    </div>
  );
}
