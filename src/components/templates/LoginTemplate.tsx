import styled from "styled-components";
import { v, Title, InputText2, Btn1, Linea, Footer, useAuthStore } from "../../index"
import { Device } from "../../styles/breakpoints";

type HomeTemplateProps = {
  children: React.ReactNode;
};

interface ContainerProps {
  imgFondo?: string;
}

export function LoginTemplate({ children }: HomeTemplateProps) {

  const { loginGoogle  } = useAuthStore();

  return (<Container>
    {children}
    <div className="card">
      <ContentLogo>
        <img src={v.logo} alt="" />
        <span>VERSION - 1.0.0</span>
      </ContentLogo>
      <Title $paddingBottom="20px" $color="black" >Ingresar</Title>
      <form>
        <InputText2>
          <input className="form__field" placeholder="email" type="text" />
          <input className="form__field" placeholder="password" type="password" />
        </InputText2>
        <Btn1 titulo="INGRESAR" bgcolor="#1CB0F6" color="255, 255, 255" width="100%" />
      </form>
      <Linea>
        <span>0</span>
      </Linea>
      <Btn1 funcion={loginGoogle} titulo="Google" bgcolor="#fff" icono={<v.iconogoogle />} />
    </div>
    <Footer />
  </Container>);
}
const Container =styled.div<ContainerProps>`
  //background-image: url(${(props) => props.imgFondo});
  
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0 10px;
  color: ${({theme}) => theme.text};
  .card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 20px;
    @media ${Device.tablet} {
      width: 400px;
    }
  }  
`;

const ContentLogo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 10px; 

  span {
    font-weight: 700;
    color: black;
  }

  img {
    width: 10%;
  }
`;