import styled from "styled-components";

export const HeaderStyled = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;

    height:50px;
    width:100vw;

    border-bottom:2px solid;

    .pageTitle{
        font-size:2rem;
        font-weight:900;
        /* background-image:linear-gradient(90deg, red, blue);
        background-clip: text;
        color:transparent; */
    }
    .divPadding{
        display:flex;
        justify-content:space-between;
        width:80vw;
    }

    .showMidias__midiasList{
        display:flex;
        gap: 8px;
    }
`