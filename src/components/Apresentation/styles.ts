import styled from "styled-components";

export const ApresentationStyled = styled.section`
    display:flex;
    flex-direction:column;

  .infoArea {
    height: 25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    .infoArea__textArea {
      h1 {
        width: 37.9rem;
        display: inline-block;
        position: relative;

        font-size: 3.5rem;
        font-weight: 900;

        background: linear-gradient(
          90deg,
          rgba(252, 98, 0, 1) 0%,
          rgba(212, 27, 27, 1) 50%,
          rgba(179, 0, 255, 1) 100%
        );
        color: transparent;

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
      }

      h1::after {
        position: absolute;
        content: "";
        left: 0;
        width: 100%;
        height: 3.5rem;
        background: white;
        border-left: 5px solid black;
        animation: loadingTitle 2.5s steps(20) forwards,
          barFlashing 1.2s 2.5s ease-in-out infinite;
      }

      p {
        line-height: 1.3rem;
        margin-left: 0.1rem;
      }
    }

    .infoArea__imageArea {
      img {
        width: 15rem;
        padding-left: 6px;
        background: linear-gradient(
          180deg,
          rgba(179, 0, 255, 1) 0%,
          rgba(252, 98, 0, 1) 36%,
          rgba(212, 27, 27, 1) 66%,
          rgba(179, 0, 255, 1) 100%
        );
        animation: gradient 4s ease infinite;
      }
      img::after {
        transform: translateX(400px);
      }
    }
  }

  .scrollInfo{

  }

  @keyframes loadingTitle {
    to {
      left: 100%;
      width: 5px;
    }
  }
  @keyframes barFlashing {
    to {
      border: none;
    }
  }
  @keyframes gradient {
    100% {
      background-position-y: 15rem;
    }
  }
`;
