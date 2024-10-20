import { Box2, Result, NumberPages, Pagination} from "../assets/Styles/HomeStyled";
import { useContext } from "react";
import { AuthContext } from "../contex/authContex";

export default function PasitionHome({currentPage, setCurrentPage}) {
    const { list } = useContext(AuthContext);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(list.length / itemsPerPage);
    const pageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    const previousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    const nextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
    }    };
    
    const firstPageClick = () => {
        setCurrentPage(1);
    };
    
    const lastPageClick = () => {
        setCurrentPage(totalPages);
    };

    const renderPageNumbers = () => {
        let pageNumbers = [];
        pageNumbers.push(
            <button
                key={1}
                className={`pagination-button ${currentPage === 1 ? 'active' : ''}`}
                onClick={() => pageClick(1)}
            >
                1
            </button>
        );

        if (currentPage > 3) {
            pageNumbers.push(<span key="left-dots">...</span>);
        }

        if (currentPage > 2) {
            pageNumbers.push(
                <button
                    key={currentPage - 1}
                    className="pagination-button"
                    onClick={() => pageClick(currentPage - 1)}
                >
                    {currentPage - 1}
                </button>
            );
        }

        if (currentPage !== 1 && currentPage !== totalPages) {
            pageNumbers.push(
                <button key={currentPage} className="pagination-button active">
                    {currentPage}
                </button>
            );
        }

        if (currentPage < totalPages - 1) {
            pageNumbers.push(
                <button
                    key={currentPage + 1}
                    className="pagination-button"
                    onClick={() => pageClick(currentPage + 1)}
                >
                    {currentPage + 1}
                </button>
            );
        }

        if (currentPage < totalPages - 2) {
            pageNumbers.push(<span key="right-dots">...</span>);
        }

        pageNumbers.push(
            <button
                key={totalPages}
                className={`pagination-button ${currentPage === totalPages ? 'active' : ''}`}
                onClick={() => pageClick(totalPages)}
            >
                {totalPages}
            </button>
        );

        return pageNumbers;
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    return (
            <>
                <Result>Mostrar Resultado {indexOfFirstItem + 1}-{indexOfLastItem} de {list.length}</Result>
                <NumberPages>
                    <Pagination className="pagination">
                        <button onClick={firstPageClick} disabled={currentPage === 1}>
                            {'|<'}
                        </button>
                        <button onClick={previousClick} disabled={currentPage === 1}>
                            {'<'}
                        </button>
                        {renderPageNumbers()}
                        <button onClick={nextClick} disabled={currentPage === totalPages}>
                            {'>'}
                        </button>
                        <button onClick={lastPageClick} disabled={currentPage === totalPages}>
                            {'>|'}
                        </button>
                    </Pagination>
                </NumberPages>
       </>   
    );
}
