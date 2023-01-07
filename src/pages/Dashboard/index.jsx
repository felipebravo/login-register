import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button/style";
import { Loading } from "../../components/Loading/style";
import { Typing } from "../../components/Typing/style";

export const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <Background variant="dashboard">
      <div>
        <Typing>
          <h1>Obrigado!</h1>
        </Typing>
        <Button onClick={() => handleLogout()}>
          {loading ? <Loading /> : "Sair"}
        </Button>
      </div>
    </Background>
  );
};
