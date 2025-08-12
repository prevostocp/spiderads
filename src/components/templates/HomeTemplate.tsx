import styled from "styled-components";

type HomeTemplateProps = {
  children: React.ReactNode;
};

export function HomeTemplate({ children }: HomeTemplateProps) {
  return (<Container>
    {children}
    <h1>Home</h1>
  </Container>);
}
const Container =styled.div`
  height:100vh;
`