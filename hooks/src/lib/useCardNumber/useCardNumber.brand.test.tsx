import { fireEvent, render, screen } from "@testing-library/react";
import { useCardNumber } from ".";
import { CARD_BRAND } from "./constants/cardBrand";

function UseCardNumberBrandTestComponent() {
  const { value, errorStatus, cardBrand, onChange, onBlur } = useCardNumber();

  return (
    <div>
      <input
        data-testid={"card-number-input"}
        value={value.raw}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div data-testid={"card-brand"}>{cardBrand}</div>
      <div data-testid={"formatted-card-number"}>{value.formatted.join(" ")}</div>
      {errorStatus.isError && <div data-testid={"is-error"}>is error: true</div>}
      {errorStatus.errorMessage && (
        <div data-testid={"error-message"}>{errorStatus.errorMessage}</div>
      )}
    </div>
  );
}

const setup = () => {
  render(<UseCardNumberBrandTestComponent />);
  const input = screen.getByTestId<HTMLInputElement>("card-number-input");
  const cardBrandDiv = screen.getByTestId<HTMLDivElement>("card-brand");
  const formattedCardNumberDiv = screen.getByTestId<HTMLDivElement>("formatted-card-number");

  const getCardBrand = () => cardBrandDiv.textContent;
  const getFormattedCardNumber = () => formattedCardNumberDiv.textContent;

  const getErrorStatus = () => {
    const isError = screen.queryByTestId("is-error");
    const errorMessage = screen.queryByTestId("error-message");

    return {
      isError: Boolean(isError),
      errorMessage: errorMessage ? errorMessage.textContent : null,
    };
  };

  return { input, getCardBrand, getFormattedCardNumber, getErrorStatus };
};

const TESTING_CARD_NUMBERS = {
  Diners: "36" + "1".repeat(12),
  AMEX: "34" + "1".repeat(13),
  UnionPay: "622126" + "1".repeat(10),
  MasterCard: "51" + "1".repeat(14),
  Visa: "4" + "1".repeat(15),
  UNKNOWN: "9999".repeat(4),
} as const;

describe("useCardNumber (brand 관련 기능)", () => {
  describe("카드 브랜드 식별", () => {
    test.each([
      {
        cardNumber: TESTING_CARD_NUMBERS.Diners,
        expectedCardBrand: CARD_BRAND.Diners,
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.AMEX,
        expectedCardBrand: CARD_BRAND.AMEX,
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.UnionPay,
        expectedCardBrand: CARD_BRAND.UnionPay,
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.MasterCard,
        expectedCardBrand: CARD_BRAND.MasterCard,
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.Visa,
        expectedCardBrand: CARD_BRAND.Visa,
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.UNKNOWN,
        expectedCardBrand: "UNKNOWN",
      },
    ])(
      "카드번호가 $cardNumber일 경우, $expectedCardBrand(으)로 식별한다.",
      ({ cardNumber, expectedCardBrand }) => {
        const { input, getCardBrand } = setup();

        fireEvent.change(input, { target: { value: cardNumber } });

        expect(getCardBrand()).toBe(expectedCardBrand);
      }
    );
  });

  describe("브랜드 별 카드번호 포맷팅", () => {
    test.each([
      {
        cardNumber: TESTING_CARD_NUMBERS.Diners,
        cardBrand: CARD_BRAND.Diners,
        expectedFormattedCardNumber: "3611 111111 1111",
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.AMEX,
        cardBrand: CARD_BRAND.AMEX,
        expectedFormattedCardNumber: "3411 111111 11111",
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.UnionPay,
        cardBrand: CARD_BRAND.UnionPay,
        expectedFormattedCardNumber: "6221 2611 1111 1111",
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.MasterCard,
        cardBrand: CARD_BRAND.MasterCard,
        expectedFormattedCardNumber: "5111 1111 1111 1111",
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.Visa,
        cardBrand: CARD_BRAND.Visa,
        expectedFormattedCardNumber: "4111 1111 1111 1111",
      },
      {
        cardNumber: TESTING_CARD_NUMBERS.UNKNOWN,
        cardBrand: "UNKNOWN",
        expectedFormattedCardNumber: "9999 9999 9999 9999",
      },
    ])(
      "카드번호가 $cardBrand 경우, $expectedFormattedCardNumber(으)로 포맷팅한다.",
      ({ cardNumber, expectedFormattedCardNumber }) => {
        const { input, getFormattedCardNumber } = setup();

        fireEvent.change(input, { target: { value: cardNumber } });

        expect(getFormattedCardNumber()).toBe(expectedFormattedCardNumber);
      }
    );
  });

  describe("카드 번호 유효성 검증 (브랜드에 따른 예외적 케이스)", () => {
    describe("16자리가 아니지만 브랜드가 존재하는 경우 에러 처리하지 않는다.", () => {
      test.each([
        { cardNumber: TESTING_CARD_NUMBERS.Diners, desc: "Diners - 14자리" },
        { cardNumber: TESTING_CARD_NUMBERS.AMEX, desc: "AMEX - 15자리" },
      ])("$desc($cardNumber)는 16자리가 아님에도 예외처리하지 않는다.", ({ cardNumber }) => {
        const { input, getErrorStatus } = setup();

        fireEvent.change(input, { target: { value: cardNumber } });
        fireEvent.blur(input);

        const { isError, errorMessage } = getErrorStatus();

        expect(isError).toBe(false);
        expect(errorMessage).toBeNull();
      });
    });
    test("카드번호가 16자리가 아니고, 카드 브랜드가 없는 경우 유효하지 않은 값으로 판단한다.", () => {
      const { input, getErrorStatus } = setup();

      fireEvent.change(input, { target: { value: "1".repeat(15) } });
      fireEvent.blur(input);

      const { isError, errorMessage } = getErrorStatus();

      expect(isError).toBe(true);
      expect(errorMessage).not.toBeNull();
    });
  });
});
