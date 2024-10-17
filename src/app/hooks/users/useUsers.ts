import { IUsuario } from "@/app/interfaces/IUser";
import { useState, useEffect } from "react";

const useUserFetch = (token: string) => {
  const [user, setUser] = useState<IUsuario | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/users`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Adiciona o token ao cabeçalho
          },
        });
        
        if (!response.ok) {
          throw new Error("Erro ao buscar o usuário");
        }
        
        const data = await response.json();
        setUser(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Erro desconhecido"));
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) { // Verifica se o token está disponível antes de buscar o usuário
      fetchUser();
    }
  }, [token]); // Usa 'token' como dependência para a busca

  return { user, loading, error };
};

export default useUserFetch;
