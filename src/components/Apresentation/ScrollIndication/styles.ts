import styled from "styled-components";


export const ScrollIndicationStyled = styled.div`
    align-self:center;

    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;

    span{
        font-size:1rem;
    }

    div{
        border: 1px solid #00000090;
        border-radius:50%;
        width:40px;
        height:40px;
        text-align:center;
        /* line-height:10px; */

        svg{
            font-size: 40px;
            animation: downMoviment 2s ease-in-out infinite;
        }
    }

    @keyframes downMoviment {
        0%{
            transform:translateY(-10px)
        }

        60%{
            transform:translateY(15px)
        }

        80%{
            transform:translateY(5px)
        }

        100%{
            transform:translateY(15px)
        }

    }
`