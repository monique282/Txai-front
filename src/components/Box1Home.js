import {
    Box1, LogoMenu, SupportCalendarNotificationProfile, Support,
    Calendar, Profile
} from "../assets/Styles/HomeStyled";
import Logo from "../assets/images/logo_bleck.svg"
import { IoMdMenu } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCaretDownFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../contex/authContex";


export default function Box1Home() {
    const { name,  } = useContext(AuthContext);
    
    return (
        <Box1>
            <LogoMenu >
                <IoMdMenu style={{ height: '30px', width: '30px', marginRight: '20px' }} />
                <img src={Logo} alt="Logo da Txai" />
            </LogoMenu >
            <SupportCalendarNotificationProfile>
                <Support>
                    <MdOutlineContactSupport />
                    <p>Suporte</p>
                </Support>
                <Calendar>
                    <FaRegCalendarCheck />
                    <p>Calendário</p>
                </Calendar>
                <IoMdNotificationsOutline style={{ height: '20px', width: '30px', marginRight: '10px' }} />
                <Profile>
                    <BsPersonCircle />
                    <p>{name}</p>
                    <BsCaretDownFill />
                </Profile>
            </SupportCalendarNotificationProfile>
        </Box1>
    );
}
