import { useState } from "react";
import { ValidationResult } from "../../type";
import { ERROR_MESSAGE } from "../constants/errorMessage";

type UseCVCResult = {
  cardCVC: string;
  handleCardCVCChange: (value: string) => void;
  cardCVCValidation: ValidationResult;
};

export default function useCVC(): UseCVCResult {
  const [cardCVC, setCardCVC] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  function validateCVC(value: string): ValidationResult {
    // 인풋을 클릭했지만 아무런 입력이 없다면 에러 발생
    if (isTouched && value === "") {
      return { isValid: false, errorMessage: ERROR_MESSAGE.NO_INPUT };
    }

    // 입력된 문자열이 숫자가 아니라면 에러 발생
    if (!/^\d+$/.test(value) && isTouched) {
      return { isValid: false, errorMessage: ERROR_MESSAGE.CARD_CVC.INVALID_NUMBERS };
    }

    // 입력된 문자열이 1부터 999 사이의 3자리가 아니라면 에러 발생
    if (!/^\d{3}$/.test(value) && isTouched) {
      return { isValid: false, errorMessage: ERROR_MESSAGE.CARD_CVC.MAX_LENGTH_EXCEEDED };
    }

    return { isValid: true };
  }

  function handleCardCVCChange(value: string) {
    if (!isTouched) setIsTouched(true);
    setCardCVC(value);
  }

  return { cardCVC, handleCardCVCChange, cardCVCValidation: validateCVC(cardCVC) };
}
