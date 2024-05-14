import { ComponentProps } from "react";
import styles from "./CloseButton.module.css";

const SIZE_VALUES = {
  small: 10,
  medium: 15,
  large: 20,
};

interface CloseButtonProps extends ComponentProps<"svg"> {
  guidanceSize?: "small" | "medium" | "large";
}

function CloseButton({
  guidanceSize = "medium",
  ...restProps
}: CloseButtonProps) {
  return (
    <svg
      {...restProps}
      className={styles["button-close"]}
      width={SIZE_VALUES[guidanceSize]}
      height={SIZE_VALUES[guidanceSize]}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8167 1.41L13.4067 0L7.81665 5.59L2.22665 0L0.81665 1.41L6.40665 7L0.81665 12.59L2.22665 14L7.81665 8.41L13.4067 14L14.8167 12.59L9.22665 7L14.8167 1.41Z"
        fill="black"
      />
    </svg>
  );
}

export default CloseButton;
