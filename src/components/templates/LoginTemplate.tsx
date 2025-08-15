import styled from "styled-components";
import { v, Title } from "../../index"
import { Device } from "../../styles/breakpoints";
import { Form } from "react-router-dom";

type HomeTemplateProps = {
  children: React.ReactNode;
};

interface ContainerProps {
  imgFondo: string;
}

export function LoginTemplate({ children }: HomeTemplateProps) {
  return (<Container imgFondo={v.imagenfondo} >
    {children}
    <div className="card">
      {/* <span className="version">Versión 1.0.0</span> */}
      <ContentLogo>
        <img src={v.logo} alt="" />
        <span>VERSION - 1.0.0</span>
      </ContentLogo>
      <ContentForm>
        <Title $padding-bottom="20px" $color="black" >Ingresar</Title>
        <Form>
          
        </Form>
      </ContentForm>
      

    </div>
  </Container>);
}
const Container =styled.div<ContainerProps>`
  background-image: url(${(props) => props.imgFondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%; /* Cambiado de 100vh a 100% */
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.87);
  padding: 0 20px;
  text-align: center;
  overflow: hidden; // Evita scroll indeseado
  margin: 0; // Elimina márgenes externos
  box-sizing: border-box; // Incluye padding en el ancho/alto
  position: relative; /* Necesario para posicionar hijos absolutos */
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 20px;
    @Media ${Device.tablet} {
      width: 400px;
    }
  }
`;

const ContentLogo = styled.section`
  position: absolute; /* Posicionamiento absoluto */
  top: 10px; /* Distancia desde la parte superior */
  left: 10px; /* Distancia desde la izquierda */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  gap: 10px; /* Espacio entre el logo y el texto */
  span {
    font-weight: 700;
    color: black;
  }
  img {
    width: 10%;
  }
`;

const ContentForm = styled.section`
  position:absolute;
  top: 10%;
  left: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5%;
`