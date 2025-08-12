import styled from "styled-components";

type HomeTemplateProps = {
  children: React.ReactNode;
};

export function LoginTemplate({ children }: HomeTemplateProps) {
  return (<Container>
    {children}
    <h1>Login</h1>
  </Container>);
}
const Container =styled.div`
  
`