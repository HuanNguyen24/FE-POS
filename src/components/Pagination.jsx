import { Component } from 'react'
// import ReactPaginate from 'react-paginate';

export default class Pagination extends Component {  
  // state = {
  //   currentPage: 1,
  //   itemsPerPage: 10, // Số lượng foodItems trên mỗi trang
  // };

  // handleNextPage = () => {
  //   this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
  // };

  // handlePreviousPage = () => {
  //   this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }));
  // };

  // handleGoToPage = (pageNumber) => {
  //   this.setState({ currentPage: pageNumber });
  // }; 
    render() {
      const { currentPage, totalPages, handleNextPage, handlePreviousPage, handleGoToPage } = this.props;
      const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
      
    return (
      <>
    <ol className="flex gap-1 text-xs font-medium">
      <li>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>

      {pageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => handleGoToPage(number)}
        disabled={currentPage === number}
        className={
          currentPage === number
            ? "block size-8 rounded border-blue-300 bg-blue-300 text-center leading-8 text-gray-900"
            : "block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        }
      >
        {number}
      </button>
    ))}

      <li>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ol>
      </>
    )
  }
}
