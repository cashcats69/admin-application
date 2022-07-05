import jpgIcon from "../../shared//icons/jpgIcon.svg"
import fileLoader from "../../shared/icons/fileLoader.svg"
import bucket from "../../shared/icons/bucket.svg"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"
const LoadedFile = styled.div`

display:flex;
flex-direction:row;
align-items:center;
width:268px;
height:56px;
background:#F5F5F5;
margin:12px 0 0 24px;
@media(max-width:768px){
    width:256px;
margin:16px 16px 0 16px;
}
`
const LoadedImg= styled.img`
width:28px;
height:28px;
margin: 0 0 0 12px;
`
const LoaderImg= styled.img`
width:18px;
height:18px;
margin: 0 12px 0 12px;
`
const BucketImg= styled.img`
width:20px;
height:20px;
margin: 0 12px 0 12px;
cursor:pointer;
`
const ProgressContainer = styled.div`
margin: 0 0 0 12px;
display:flex;
flex-direction:column;
`
const FileName = styled.p<{colorProp:string}>(({colorProp}) => `
font-family: Gilroy;
color:${colorProp};
font-size: 14px;
font-weight: 600;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
margin: 0 0 5px 0;
`)
const LoadingBar = styled.div`
display:flex;
width:168px;
height:5px;
border-radius:5px;
background:#C2C4FF;
`
const LoadingSpan = styled.span<{progress:string,colorProp:string}>(({progress,colorProp}) =>`
height:100%;
width:${progress}%;
border-radius:5px;
background:${colorProp};
`)
type TAvatarFile = {
    name:string,
    progress:number,
    toggleFunction:(e:React.SyntheticEvent<HTMLImageElement>) => void,
    isSize:boolean,
}
export const AvatarFile:React.FC<TAvatarFile> = ({name,progress,toggleFunction,isSize}) => {
    const [colorProp,setColorProp] = useState('#333333')
    const [colorSpan,setColorSpan] = useState('#585CC6')
    const [nameFile,setNameFile] = useState(name)
    const nameSplice = nameFile.slice(0,15) + '...'
    
    useEffect(() => {
        if(isSize === false && progress === 100){
            setColorProp('#EB5757');
            setColorSpan('#EB5757');
            setNameFile('Your file is too big!')
        } else{
            setColorProp('#333333'); 
            setColorSpan('#585CC6');
            setNameFile(name)
        }
    },[isSize,progress,name])
    
return(
    <LoadedFile>
                <LoadedImg src={jpgIcon}/>
                <ProgressContainer>
                    <FileName colorProp={colorProp}>{nameFile.length > 20 ? nameSplice : nameFile}</FileName>
                    <LoadingBar>
                        <LoadingSpan progress={progress.toString()} colorProp={colorSpan}></LoadingSpan>
                    </LoadingBar>
                </ProgressContainer>
                {progress === 100 ? <BucketImg src={bucket} onClick={toggleFunction}/> : <LoaderImg  src={fileLoader}/>}
            </LoadedFile>
)
}