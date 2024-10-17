export interface IEndereco {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  }
  
  export interface IDadosGerais {
    cns: string;
    data_nascimento: string; 
    telefone: string;
    endereco: IEndereco;
    cpf: string;
    nome: string;
    idade: number;
    sexo: 'masculino' | 'feminino' | 'outro'; 
    email: string;
    senha: string; 
  }
  
  export interface IUsuario {
    id: number;
    type: 'paciente'; 
    createdAt: string; 
    updatedAt: string; 
    status: 'ativo' | 'inativo'; 
    dados_gerais: IDadosGerais;
  }
  
  export interface IUsersResponse {
    users: IUsuario;
  }
  