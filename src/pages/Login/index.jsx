import { Background } from "../../components/Background";
import { Form } from "../../components/Form/style";
import { Link } from "../../components/Link";
import { Input } from "../../components/Input/style";
import { Button } from "../../components/Button/style";
import { StyledFormDiv } from "../../components/Form/style";
import { Message } from "../../components/MessageErrors/style";
import { StyledInputDiv, StyledInputLabel } from "../../components/Input/style";
import { Loading } from "../../components/Loading/style";

import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [seePass, setSeePass] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <Background variant="login">
      <Form variant="login" onSubmit={handleSubmit(handleLogin)}>
        <h1 className="title">Faça seu login</h1>
        <StyledFormDiv>
          <StyledInputDiv>
            <Input
              type="email"
              placeholder="E-mail"
              label="E-mail"
              // autoComplete="off"
              {...register("email")}
            />
            <StyledInputLabel className="text">E-mail</StyledInputLabel>
            <Message>{errors.email?.message}</Message>
          </StyledInputDiv>
          <StyledInputDiv>
            <Input
              type={seePass ? "text" : "password"}
              placeholder="Senha"
              label="Senha"
              {...register("password")}
            />
            <StyledInputLabel className="text">Senha</StyledInputLabel>
            {seePass ? (
              <RxEyeOpen onClick={() => setSeePass(false)} />
            ) : (
              <RxEyeClosed onClick={() => setSeePass(true)} />
            )}
            <Message>{errors.password?.message}</Message>
          </StyledInputDiv>
        </StyledFormDiv>
        <StyledFormDiv>
          <Button type="submit">{loading ? <Loading /> : "Continuar"}</Button>
          <Link to={"/signin"}>Ainda não é cadastrado?</Link>
        </StyledFormDiv>
      </Form>
    </Background>
  );
};
