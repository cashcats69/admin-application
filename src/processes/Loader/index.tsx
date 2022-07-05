import styled from "@emotion/styled"
import loader from '../../shared/icons/loader.gif'
const Container = styled.div`
backdrop-filter: blur(2px);

position:fixed;
z-index: 600;
width: 100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
`
const ContainerGlobal = styled.div`
height: calc(100vh - 91px);
width: 100%;
background:white;
display:flex;
justify-content:center;
align-items:center;
`
const Img = styled.img`
width: 130px;
height: 130px;
`
export const Loader:React.FC = () => {
    return(
        <Container>
        <Img src={loader}/>
        </Container>
    )
}
export const LoaderGlobal:React.FC = () => {
    return(
        <ContainerGlobal>
        <Img src={loader}/>
        </ContainerGlobal>
    )
}