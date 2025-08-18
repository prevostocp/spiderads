import styled from "styled-components";
import { v, Title, InputText2, Btn1, Linea } from "../../index"
import { Device } from "../../styles/breakpoints";

type HomeTemplateProps = {
  children: React.ReactNode;
};

interface ContainerProps {
  imgFondo?: string;
}

export function LoginTemplate({ children }: HomeTemplateProps) {
  return (<Container>
    {children}
    <div className="card">
      {/* <span className="version">Versión 1.0.0</span> */}
      <ContentLogo>
        <img src={v.logo} alt="" />
        <span>VERSION - 1.0.0</span>
      </ContentLogo>
      {/* <ContentForm> */}
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
        <Btn1 titulo="Google" bgcolor="#fff" icono={<v.iconogoogle />} />
      {/* </ContentForm> */}
      

    </div>
  </Container>);
}
const Container =styled.div<ContainerProps>`
  //background-image: url(${(props) => props.imgFondo});
  /* background-repeat: no-repeat;
  background-size: cover;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.87);
  padding: 0 20px;
  text-align: center;
  overflow: hidden; 
  margin: 0; 
  box-sizing: border-box; 
  position: relative; 
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
  } */
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
  /* position: absolute; 
  top: 10px; 
  left: 10px; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  gap: 10px; 
  span {
    font-weight: 700;
    color: black;
  }
  img {
    width: 10%;
  } */
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

// const ContentForm = styled.section`
//   position:absolute;
//   top: 10%;
//   left: 60%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0.5%;
// `