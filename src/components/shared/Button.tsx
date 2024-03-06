import styled from "styled-components";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  disabledText?: string;
  handleClick: () => void;
}

const CustomButton = styled.button`
  padding: 10px 25px;
  border-radius: 5px;
  border: none;
  background: #2980b9;
  color: #fff;
`;

const Loader = styled.span`
  width: 10px;
  height: 10px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Button = ({
  title,
  disabled,
  disabledText,
  handleClick,
}: ButtonProps) => {
  return (
    <>
      <CustomButton
        className="custom-button"
        disabled={disabled}
        onClick={handleClick}
      >
        {disabled ? (
          <>
            {disabledText}... <Loader />
          </>
        ) : (
          title
        )}
      </CustomButton>
    </>
  );
};

export default Button;
