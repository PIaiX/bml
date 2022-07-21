import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
    return (
        <nav aria-label="page-pagination">
            <ReactPaginate
                className="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                {...props}
            />
        </nav>
    );
};

export default Pagination;