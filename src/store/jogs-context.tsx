import { createContext, useState } from 'react';

type JogsContextObj = {
  token: string | null;
  getToken: (token: string | null) => void;
};
type JogsContextProps = {
  children: React.ReactNode;
};

export const JogsContext = createContext<JogsContextObj>({
  token: null,
  getToken: (token: string | null) => {},
});

export const JogsContextProvider = ({ children }: JogsContextProps) => {
  //   const t = localStorage.getItem('token');
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token') || null
  );

  const getToken = (token: string | null) => {
    setToken(token);
  };

  const contextValue = {
    token: token,
    getToken,
  };

  return (
    <JogsContext.Provider value={contextValue}>{children}</JogsContext.Provider>
  );
};
