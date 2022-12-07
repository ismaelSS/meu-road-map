import styled from "styled-components";

interface iMidiaItemStyledProps {
  iconColor: string;
}

export const MidiaItemStyled = styled.li<iMidiaItemStyledProps>`
  div {
    display: flex;
    svg,
    path,
    i {
      color: ${({ iconColor }) => iconColor};
      font-size: 2rem;
    }

    a {
      text-decoration: none;
      margin-left: 0.3rem;
      display: none;
      position: relative;
      font-size: 2rem;
    }
  }

  div:hover a {
    display: flex;
  }

  div:hover a::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 106%;
    background: white;
    border-left: 4px solid black;
    animation: loadingText 1s ease-out forwards, borderMinimization 300ms 1s forwards;
  }

  @keyframes loadingText {
    to {
      left: 100%;
      width: 0%;
    }
  }

  @keyframes borderMinimization {
    to {
      height: 0px;
    }
  }
`;
