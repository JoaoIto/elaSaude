"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const ExameDetalhes = () => {
  const router = useRouter();
  const [exame, setExame] = useState<any>(null); // Estado para armazenar os detalhes do exame
  const [novoDocumento, setNovoDocumento] = useState<File[]>([]); // Para novo documento

  useEffect(() => {
    const id = "0354"; // ID físico para teste
    const fetchExameDetails = async () => {
      const response = await fetch(`http://localhost:3001/checkupGeral/${id}`);
      if (response.ok) { // Verifica se a resposta foi bem-sucedida
        const data = await response.json();
        setExame(data);
      } else {
        console.error('Erro ao buscar detalhes do exame:', response.status);
      }
    };

    fetchExameDetails();
  }, []); // O ID fixo não é uma dependência

  const handleConfirmar = () => {
    // Lógica para confirmar a solicitação
    router.push('/'); // Redireciona para a tela inicial
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNovoDocumento((prev) => [...prev, e.target.files[0]]); // Adiciona o novo arquivo ao array
    }
  };  

  return (
    <div className="h-full flex justify-center items-center bg-gray-100">
      <Card variant="outlined" className="w-2/3 m-4">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Detalhes do Exame: 
          </Typography>
          {exame ? (
            <div>
              <Typography variant="h6">Informações do Paciente:</Typography>
              <Typography>Nome: {exame.nomePaciente}</Typography>
              <Typography>Data de Nascimento: {exame.dataNascimento}</Typography>
              <Typography>UF: {exame.uf}</Typography>
              <Typography>Nome da Mãe: {exame.nomeMae}</Typography>
              <Typography>Número do Cartão SUS: {exame.cartaoSus}</Typography>
              <Typography>Endereço: {exame.endereco}</Typography>

              <Typography variant="h6" className="mt-4">Informações do Exame:</Typography>
              <Typography>Nome do Exame: {exame.nomeExame}</Typography>
              <Typography>CID-10 Diagnóstico: {exame.cidDiagnostico}</Typography>
              <Typography>Motivo da Consulta: {exame.motivoConsulta}</Typography>
            </div>
          ) : (
            <Typography>Carregando...</Typography>
          )}

          <Grid className="mt-4">
            <Typography>Anexar Novo Documento:</Typography>
            <div className="flex items-center gap-4">
      <label htmlFor="upload-button">
        <Button
          variant="contained"
          component="span"
          color="primary"
          className="flex self-end bg-mediumPink"
        >
          Selecionar Arquivo
        </Button>
      </label>
      <input
        id="upload-button"
        type="file"
        onChange={handleFileChange}
        accept=".pdf, .doc, .docx"
        className="hidden"
      />
    </div>
    {novoDocumento && novoDocumento.length > 0 && ( // Verifica se não é null
  <div>
    <Typography variant="h6" className="mt-4 text-blue-400">Documento anexado!</Typography>
    <ul>
      <li>{novoDocumento.nome}</li> {/* Exibe o nome do único arquivo */}
    </ul>
  </div>
)}
          </Grid>

          <Grid className="mt-4">
            <Button variant="contained" className="bg-mediumPink" onClick={handleConfirmar}>
              Confirmar Solicitação
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExameDetalhes;
