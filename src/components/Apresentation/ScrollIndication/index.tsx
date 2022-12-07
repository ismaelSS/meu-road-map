import { ScrollIndicationStyled } from "./styles"
import {RiArrowDropDownFill} from "react-icons/ri"

export const ScrollIndication = () =>{

    return(
        <ScrollIndicationStyled>
            <span>Role a página</span>
            <div><RiArrowDropDownFill/></div> 
        </ScrollIndicationStyled>
    )
}