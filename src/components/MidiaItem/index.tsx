import { IconType } from "react-icons/lib"
import { MidiaItemStyled } from "./styles"

interface iMidiaItemProps {
    icon:JSX.Element,
    iconColor:string,
    text:string,
    link?:string, 
}

export const MidiaItem = ({icon, iconColor, text, link}:iMidiaItemProps) =>{
    return(
        <MidiaItemStyled iconColor={iconColor}>
            <div>
            {icon}
            <a href={link} target="_blank">{text}</a>
            </div>
        </MidiaItemStyled>
    )
}