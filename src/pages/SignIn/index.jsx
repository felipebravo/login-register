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
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(/(?=.*[A-Z])/, "Ao menos uma letra maiúscula")
    .matches(/(?=.*[a-z])/, "Ao menos uma letra minúscula")
    .matches(/\d/g, "Ao menos um número")
    .matches(/(?=.*[@$!%*#?&])/, "Ao menos um caracter especial")
    .matches(/[A-Za-z\d@$!%*#?&]{8,}/g, "Ao menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null], "As senham devem ser iguais"),
  github: yup
    .string()
    .required("Campo obrigatório")
    .url(`Link inválido ("https://...")`),
});

export const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [seePass, setSeePass] = useState(false);
  const [seeConfirmPass, setSeeConfirmPass] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <Background variant="sign">
      <Form variant="sign" onSubmit={handleSubmit(handleSignIn)}>
        <h1 className="title">Cadastre-se</h1>
        <StyledFormDiv>
          <StyledInputDiv>
            <Input
              type="string"
              placeholder="Nome completo"
              {...register("name")}
            />
            <StyledInputLabel className="text">Nome completo</StyledInputLabel>
            <Message>{errors.name?.message}</Message>
          </StyledInputDiv>
          <StyledInputDiv>
            <Input type="email" placeholder="E-mail" {...register("email")} />
            <StyledInputLabel className="text">E-mail</StyledInputLabel>
            <Message>{errors.email?.message}</Message>
          </StyledInputDiv>
          <StyledInputDiv>
            <Input
              type={seePass ? "text" : "password"}
              placeholder="Senha"
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
          <StyledInputDiv>
            <Input
              type={seeConfirmPass ? "text" : "password"}
              placeholder="Confirmação de senha"
              {...register("confirmPassword")}
            />
            <StyledInputLabel className="text">
              Confirmação de senha
            </StyledInputLabel>
            {seeConfirmPass ? (
              <RxEyeOpen onClick={() => setSeeConfirmPass(false)} />
            ) : (
              <RxEyeClosed onClick={() => setSeeConfirmPass(true)} />
            )}
            <Message>{errors.confirmPassword?.message}</Message>
          </StyledInputDiv>
          <StyledInputDiv>
            <Input type="string" placeholder="Github" {...register("github")} />
            <StyledInputLabel className="text">Github</StyledInputLabel>
            <Message>{errors.github?.message}</Message>
          </StyledInputDiv>
        </StyledFormDiv>
        <StyledFormDiv>
          <Button type="submit">{loading ? <Loading /> : "Cadastrar"}</Button>
          <Link to={"/"}>Voltar para o login</Link>
        </StyledFormDiv>
      </Form>
    </Background>
  );
};
