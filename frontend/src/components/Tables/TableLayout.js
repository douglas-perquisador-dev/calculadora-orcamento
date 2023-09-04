import CardHeader from "../Charts/CardHeader";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import './tables.scss';

const TableLayout = (props) => {
  
  const { tableData, tableColor, lightGray } = props;
  const [tableContent, setTableContent] = useState(tableData);

  //start pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Set default value to 3

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tableData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tableData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, tableData]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  // rows per page
  const handleRowsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setItemOffset(0);
  };


  return (
    <>
      <div className="col-md-6 col-12">
        <div className="table_content my-3">
          <div class="card spur-card my-2">
            <div className="card-header d-flex justify-content-between">
              <div className="tw-_bar">
                {tableContent.map((content) => {
                  return (
                    <>
                      {content.icon} {""}
                      <span>
                        <b>{content.title}</b>
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              className="card-body responsive"
              style={{ backgroundColor: tableColor?.bodyColor }}
            >
             <div style={{ height:'220px', overflow:'auto' }}>
             <table
                className="table table-hover table-in-card responsive"
                style={{
                  backgroundColor: tableColor?.tableColor,
                  color: tableColor?.textColor,
                }}
              >
                <thead>
                  <tr className="heading">
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems?.map((content, ind) => {
                    return (
                      <tr
                        key={ind}
                        style={{
                          backgroundColor: ind % 2 !== 0 ? "" : lightGray,
                        }}
                      >
                        <th scope="row">{ind + 1 + itemOffset}</th>
                        <td>{content.First}</td>
                        <td>{content.Last}</td>
                        <td>{content.Handle}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
             </div>
              <div className="result_pagination">
                <span> Rows: </span> &nbsp;{itemsPerPage}
                <select onChange={handleRowsPerPageChange} value={itemsPerPage}>
                  <option value={3} selected>
                    3
                  </option>{" "}
                  {/* Set default to 3 */}
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </select>
                <span className="mx-4">
                  {itemOffset + 1} - {itemOffset + itemsPerPage} of{" "}
                  {tableData.length}
                </span>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  rowsPerPage={itemsPerPage}
                  previousLabel="Prev"
                  renderOnZeroPageCount={null}
                  containerClassName="pagination"
                  previousLinkClassName="page-num"
                  nextLinkClassName="page-num"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableLayout;
