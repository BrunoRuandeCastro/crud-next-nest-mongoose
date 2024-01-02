import { useState } from "react";

const Login = () => {
//   const [username, setUsername] = useFormState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implementar lógica de login aqui
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

  return (
  
      <form className="flex flex-col items-center">
        {/* <div>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 m-2"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 m-2"
          />
        </div>
        <button type="button" onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded-md">
          Entrar
        </button> */}
      </form> 
  );
};

export default Login;
