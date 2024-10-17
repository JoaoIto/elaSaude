"use client";
import React, { useState } from "react";
import { TextField, Button, Grid, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { z } from "zod";

export default function SolicitacaoCheckupGeral() {
  // Estado para armazenar os valores do formulário
  const [formValues, setFormValues] = useState({
    nomePaciente: "Joana da Silva",
    dataNascimento: "1980-06-15",
    uf: "SP",
    nomeMae: "Maria da Silva",
    cartaoSus: "123456789",
    endereco: "Rua das Flores, 123, Apto 4B",
    cidDiagnostico: "Z12.31",
    nomeExame: "Checkup Geral",
    motivoConsulta: "Exame de rotina",
    tipoConsulta: "consulta", // Novo campo para tipo de consulta
    documentoExame: null, // Novo campo para o documento de exame
  });

  // Estado para erros de validação
  const [formErrors, setFormErrors] = useState<any>({});
  const [codigoFonte, setCodigoFonte] = useState<any>(null); // Para o campo de arquivo

  // Definindo o schema de validação com Zod
  const solicitacaoSchema = z.object({
    nomePaciente: z.string().min(1, "O nome do paciente é obrigatório."),
    dataNascimento: z.string().min(1, "A data de nascimento é obrigatória."),
    uf: z.string().min(2, "UF é obrigatória."),
    nomeMae: z.string().min(1, "O nome da mãe é obrigatório."),
    cartaoSus: z.string().min(1, "O número do Cartão SUS é obrigatório."),
    endereco: z.string().min(1, "O endereço é obrigatório."),
    cidDiagnostico: z.string().min(1, "O diagnóstico CID-10 é obrigatório."),
    nomeExame: z.string().min(1, "O nome do exame deve vir obrigatório!"),
    motivoConsulta: z.string().min(1, "O motivo da consulta é obrigatório."),
    tipoConsulta: z.enum(["consulta", "retorno"]).optional(), // Novo campo para tipo de consulta
    documentoExame: z.instanceof(File).optional(), // Novo campo para o documento de exame
  });

  // Função de submissão do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar os valores do formulário
    const validation = solicitacaoSchema.safeParse(formValues);

    if (!validation.success) {
      // Exibir erros de validação
      const errors: any = {};
      validation.error.errors.forEach((err) => {
        errors[err.path[0]] = err.message;
      });
      setFormErrors(errors);
      console.error("Erros de validação", errors);
    } else {
      // Limpar erros
      setFormErrors({});
      
      // Enviar dados do formulário para a API
      fetch("http://localhost:3001/checkupGeral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro na requisição: " + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Resposta da API:", data);
        })
        .catch((error) => {
          console.error("Erro ao enviar dados:", error);
        });
    }
  };

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Função para lidar com mudanças no tipo de consulta
  const handleTipoConsultaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, tipoConsulta: e.target.value });
  };

  // Função para lidar com mudanças no arquivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormValues({ ...formValues, documentoExame: e.target.files[0] });
      setCodigoFonte(e.target.files[0]);
    }
  };

  return (
    <div className="h-full flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/3 m-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Solicitação de Checkup Geral
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Grid>
            <Typography className="text-black py-4 text-2xl">
              Informações do Paciente:
            </Typography>
            <Grid className="flex flex-col lg:flex-row gap-4">
              {/* Nome do paciente */}
              <TextField
                label="Nome do Paciente"
                name="nomePaciente"
                value={formValues.nomePaciente}
                onChange={handleChange}
                error={!!formErrors.nomePaciente}
                helperText={formErrors.nomePaciente}
                fullWidth
                variant="outlined"
                className="mb-4"
              />

              {/* Data de Nascimento */}
              <TextField
                label="Data de Nascimento"
                name="dataNascimento"
                value={formValues.dataNascimento}
                onChange={handleChange}
                error={!!formErrors.dataNascimento}
                helperText={formErrors.dataNascimento}
                fullWidth
                variant="outlined"
                className="mb-4"
              />

              {/* UF */}
              <TextField
                label="UF"
                name="uf"
                value={formValues.uf}
                onChange={handleChange}
                error={!!formErrors.uf}
                helperText={formErrors.uf}
                fullWidth
                variant="outlined"
                className="mb-4"
              />
            </Grid>

            {/* Nome da Mãe */}
            <TextField
              label="Nome da Mãe"
              name="nomeMae"
              value={formValues.nomeMae}
              onChange={handleChange}
              error={!!formErrors.nomeMae}
              helperText={formErrors.nomeMae}
              fullWidth
              variant="outlined"
              placeholder="Ex: Maria da Silva"
              className="mb-4"
            />

            {/* Cartão SUS */}
            <TextField
              label="Número do Cartão SUS"
              name="cartaoSus"
              type="number"
              value={formValues.cartaoSus}
              onChange={handleChange}
              error={!!formErrors.cartaoSus}
              helperText={formErrors.cartaoSus}
              fullWidth
              variant="outlined"
              placeholder="Ex: 123456789"
              className="mb-4"
              InputProps={{ inputProps: { min: 0 } }}
            />

            {/* Endereço */}
            <TextField
              label="Endereço"
              name="endereco"
              value={formValues.endereco}
              onChange={handleChange}
              error={!!formErrors.endereco}
              helperText={formErrors.endereco}
              multiline
              rows={5}
              fullWidth
              variant="outlined"
              placeholder="Ex: Rua das Flores, 123, Apto 4B"
              className="mb-4"
            />
          </Grid>

          <Grid>
            <Typography className="text-black py-4 text-2xl">
              Informações do Exame:
            </Typography>

            {/* Nome do Exame */}
            <TextField
              value={formValues.nomeExame}
              onChange={handleChange}
              error={!!formErrors.nomeExame}
              helperText={formErrors.nomeExame}
              name="nomeExame"
              label="Nome do Exame"
              type="text"
              fullWidth
              variant="outlined"
              defaultValue="Checkup Geral"
              disabled
              className="mb-4"
            />

            {/* CID 10 Diagnóstico */}
            <TextField
              label="CID-10 Diagnóstico"
              name="cidDiagnostico"
              type="number"
              value={formValues.cidDiagnostico}
              onChange={handleChange}
              error={!!formErrors.cidDiagnostico}
              helperText={formErrors.cidDiagnostico}
              fullWidth
              variant="outlined"
              placeholder="Ex: 12345"
              className="mb-4"
              InputProps={{ inputProps: { min: 0 } }}
            />

            {/* Motivo da Consulta */}
            <TextField
              label="Motivo da Consulta"
              name="motivoConsulta"
              value={formValues.motivoConsulta}
              onChange={handleChange}
              error={!!formErrors.motivoConsulta}
              helperText={formErrors.motivoConsulta}
              fullWidth
              variant="outlined"
              placeholder="Ex: Exame de rotina"
              className="mb-4"
            />
          </Grid>

          <Grid>
            {/* Tipo de Consulta */}
            <Typography className="text-black py-4 text-xl">
              Tipo de Consulta:
            </Typography>
            <RadioGroup
              name="tipoConsulta"
              value={formValues.tipoConsulta}
              onChange={handleTipoConsultaChange}
            >
              <FormControlLabel className="text-black" value="consulta" control={<Radio />} label="Consulta" />
              <FormControlLabel className="text-black" value="retorno" control={<Radio />} label="Retorno" />
            </RadioGroup>
          </Grid>

          {formValues.tipoConsulta === "retorno" && (
  <Grid>
    {/* Campo para anexar o documento do exame */}
    <Typography className="text-black py-4 text-xl">
      Anexar Documento do Exame:
    </Typography>
    
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
      {codigoFonte && (
        <Typography className="text-gray-700">
          {codigoFonte.name}
        </Typography>
      )}
    </div>

    {formErrors.documentoExame && (
      <p className="text-red-500">{formErrors.documentoExame}</p>
    )}
  </Grid>
)}


          {/* Botão de Submissão */}
          <Grid className="w-full flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4 flex self-end bg-mediumPink"
          >
            Solicitar Exame
          </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
}
