export const APP_ROUTES = {
    private: {
        //naHora: '/naHora', // Rota privada adicional
    },
    public: {
        naHora: '/naHora',
        login: '/auth/login',
        cadastro: '/auth/cadastro', 
        pacientes: '/',
        gestante: {
            consultas: '/gestante/consultas',
            alimentacao: '/gestante/alimentacao',
            atividadeFisica: '/gestante/atividade-fisica',
            aleitamento: '/gestante/aleitamento',
        },
        saudeMulher: {
            contraceptivos: '/saude-mulher/constraceptivos',
            dignidadeMenstrual: '/saude-mulher/dignidade-menstrual',
        },
        saudeMulheres: {
            mamografiaMaisDe40: '/mulheres/mamografia/40+',
            mamografiaMaisDe50: '/mulheres/mamografia/50+',
        },
        saudeMulheresMaisDe40: {
            cuidadosEssenciais: '/mulheres/40+/essencial',
        },
    },
};
