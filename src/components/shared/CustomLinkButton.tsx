import Link from "next/link";
import styled from "styled-components";

interface CustomLinkButtonProps {
  link: string;
  text: string;
}

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 5px;
  border: none;
  background: #2980b9;
  color: #fff;
`;

export const CustomLinkButton = ({ link, text }: CustomLinkButtonProps) => {
  return <NavLink href={link}>{text}</NavLink>;
};

export default CustomLinkButton;
