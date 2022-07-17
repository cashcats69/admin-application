
import { TAddInput } from "../../shared/config";
import { memo } from "react";
import { Div, InputLabel, Input } from "./styles";
export const AddReviewInput: React.FC<TAddInput> = memo(
  ({ placeholderName, onChangeFunc }) => {
    return (
      <Div>
        <InputLabel>Как вас зовут?</InputLabel>
        <Input placeholder={placeholderName} onChange={onChangeFunc} />
      </Div>
    );
  }
);
