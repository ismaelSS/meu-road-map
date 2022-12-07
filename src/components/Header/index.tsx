import { HeaderStyled } from "./styles";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import {SiGmail} from 'react-icons/si'
import { MidiaItem } from "../MidiaItem";


export const Header = () => {

  const linkedinIcon = <BsLinkedin/>
  const gitHubIcon = <BsGithub/>
  const whatsAppIcon = <RiWhatsappFill/>
  const gmailIcon =<SiGmail/>

    return(
    <HeaderStyled>
        <div className="divPadding">
          <h1 className="pageTitle">Meu Road Map</h1>
          <nav className="showMidias">
            <ul className="showMidias__midiasList">
              <MidiaItem icon={linkedinIcon} iconColor="var(--linkedin)" text="IsmaelSSantos" link="https://www.linkedin.com/in/ismaelssantos/"/>
              <MidiaItem icon={gitHubIcon} iconColor="var(--gitHub)" text="ismaelSS" link="https://github.com/ismaelSS"/>
              <MidiaItem icon={whatsAppIcon} iconColor="var(--whatsApp)" text="+55 (83)99637-7512" link="https://wa.me/qr/CSKVRNRZNNVJL1"/>
              <MidiaItem icon={gmailIcon} iconColor="var(--gMail)" text="ismael1337sn@gmail.com" />
            </ul>
          </nav>
        </div>
    </HeaderStyled>
  )
};
