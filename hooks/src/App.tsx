import {
  identifyCardBrand,
  useCVC,
  useCardHolder,
  useCardIssuer,
  useCardNumber,
  useCardNumberFormat,
  useExpiryDate,
  usePassword,
} from "choco-payments-validation-hooks";
import React from "react";
import "./App.css";

const cardNames = ["현대카드", "국민카드", "신한카드", "우리카드"];

function App() {
  const { cardCVC, handleCardCVCChange, cardCVCValidation } = useCVC();
  const { cardHolder, handleCardHolderChange, cardHolderValidation } = useCardHolder();
  const { cardIssuer, handleCardIssuerChange, cardIssuerValidation } = useCardIssuer();
  const { cardNumbers, handleCardNumbersChange, cardNumbersValidation } = useCardNumber();
  const { cardExpiryDate, handleCardExpiryDateChange, cardExpiryDateValidation } = useExpiryDate();
  const { cardPassword, handleCardPasswordChange, cardPasswordValidation } = usePassword();

  return (
    <>
      <h1>Hooks Modules</h1>
      <div>
        <label htmlFor="cardHolder">Card Holder:</label>
        <input
          type="text"
          id="cardHolder"
          value={cardHolder}
          onChange={(e) => handleCardHolderChange(e.target.value)}
        />
        {!cardHolderValidation.isValid && (
          <span style={{ color: "red" }}>{cardHolderValidation.errorMessage}</span>
        )}
      </div>

      <div>
        <label htmlFor="cardPassword">Card Password:</label>
        <input
          type="text"
          id="cardPassword"
          value={cardPassword}
          onChange={(e) => handleCardPasswordChange(e.target.value)}
        />
        {!cardPasswordValidation.isValid && (
          <span style={{ color: "red" }}>{cardPasswordValidation.errorMessage}</span>
        )}
      </div>

      <div>
        <label htmlFor="cardCVC">Card CVC:</label>
        <input
          type="text"
          id="cardCVC"
          value={cardCVC}
          onChange={(e) => handleCardCVCChange(e.target.value)}
        />
        {!cardCVCValidation.isValid && (
          <span style={{ color: "red" }}>{cardCVCValidation.errorMessage}</span>
        )}
      </div>

      <div>
        <label htmlFor="cardExpiryDate">Card Expiry Date:</label>
        <input
          type="text"
          id="cardExpiryDate"
          value={cardExpiryDate.month}
          onChange={(e) => handleCardExpiryDateChange("month", e.target.value)}
        />
        <input
          type="text"
          id="cardExpiryDate"
          value={cardExpiryDate.year}
          onChange={(e) => handleCardExpiryDateChange("year", e.target.value)}
        />
        {!cardExpiryDateValidation.isValid && (
          <span style={{ color: "red" }}>{cardExpiryDateValidation.errorMessage}</span>
        )}
      </div>

      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id={"cardNumber"}
          value={cardNumbers}
          onChange={(e) => handleCardNumbersChange(e.target.value)}
        />
        {!cardNumbersValidation.isValid && (
          <span style={{ color: "red" }}>{cardNumbersValidation.errorMessage}</span>
        )}
      </div>

      <div>
        <p>Card Brand Identification: {identifyCardBrand(cardNumbers)}</p>
        <p>Card Number Format: {useCardNumberFormat(cardNumbers)}</p>
      </div>

      <div>
        <label htmlFor="cardIssuer">Card Issuer:</label>
        <div>
          {cardNames.map((name) => (
            <div
              key={name}
              onClick={() => handleCardIssuerChange(cardIssuer === name ? "" : name)}
              style={{
                display: "inline-block",
                padding: "8px",
                border: `2px solid ${cardIssuer === name ? "blue" : "gray"}`,
                borderRadius: "4px",
                margin: "5px",
                cursor: "pointer",
              }}
            >
              {name}
            </div>
          ))}
        </div>
        {!cardIssuerValidation.isValid && (
          <span style={{ color: "red" }}>{cardIssuerValidation.errorMessage}</span>
        )}
      </div>
    </>
  );
}

export default App;
