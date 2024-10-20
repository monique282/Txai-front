import { Box2} from "../assets/Styles/HomeStyled";
import { BsSortUp } from "react-icons/bs";
import { BsSortAlphaDown } from "react-icons/bs";
import PasitionHome from "./Pagination";

export default function Box2Home({currentPage, setCurrentPage}) {
    
    return (
            <Box2>
                <div style={{ display: "flex" }}>
                    <p>Mais recente Primeiro</p>
                    <BsSortUp style={{ marginLeft: "5px" }} />
                    <p style={{ marginLeft: "20px" }}>De A a Z</p>
                    <BsSortAlphaDown style={{ marginLeft: "5px" }} />
                </div>
                <PasitionHome currentPage={currentPage} setCurrentPage={setCurrentPage}/>
       </Box2>   
    );
}
