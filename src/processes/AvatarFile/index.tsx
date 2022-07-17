import jpgIcon from "../../shared//icons/jpgIcon.svg";
import fileLoader from "../../shared/icons/fileLoader.svg";
import bucket from "../../shared/icons/bucket.svg";
import { useEffect, useState } from "react";
import { LoadedFile, LoadedImg, ProgressContainer, FileName, LoadingBar, LoadingSpan, BucketImg, LoaderImg } from "./styles";
import { TAvatarFile } from "../../shared/config";

export const AvatarFile: React.FC<TAvatarFile> = ({
  name,
  progress,
  toggleFunction,
  isSize,
}) => {
  const [colorProp, setColorProp] = useState("#333333");
  const [colorSpan, setColorSpan] = useState("#585CC6");
  const [nameFile, setNameFile] = useState(name);
  const nameSplice = nameFile.slice(0, 15) + "...";
  useEffect(() => {
    if (isSize === false && progress === 100) {
      setColorProp("#EB5757");
      setColorSpan("#EB5757");
      setNameFile("Your file is too big!");
    } else {
      setColorProp("#333333");
      setColorSpan("#585CC6");
      setNameFile(name);
    }
  }, [isSize, progress, name]);
  return (
    <LoadedFile>
      <LoadedImg src={jpgIcon} />
      <ProgressContainer>
        <FileName colorProp={colorProp}>
          {nameFile.length > 20 ? nameSplice : nameFile}
        </FileName>
        <LoadingBar>
          <LoadingSpan
            progress={progress.toString()}
            colorProp={colorSpan}
          ></LoadingSpan>
        </LoadingBar>
      </ProgressContainer>
      {progress === 100 ? (
        <BucketImg src={bucket} onClick={toggleFunction} />
      ) : (
        <LoaderImg src={fileLoader} />
      )}
    </LoadedFile>
  );
};
