import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import './tables.scss';
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import { Modal } from '@material-ui/core';
import OrcamentoNovo from "./New";

const BASE_URL = "http://localhost:8000/get_all_items/";

const ItemsList = (props) => {

  // const { tableData, tableColor, lightGray } = props;
  // const [tableData, setTableData] = useState([]);
  const [tableContent, setTableContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set default value to 3
  const [openModal, setOpenModal] = useState(false);
  
    const fetchOrcamentsData = async () => {
      try {
        const response = await fetch(BASE_URL,{
          method: "GET",
          headers: {
            "Authorization": `Bearer ${String(localStorage.getItem('accessToken')).replace("\"","").replace("\"","")}`,  
            "Content-Type": "application/json",
          }});
        const data = await response.json();
        console.log("accessToken: ", String(localStorage.getItem('accessToken')).replace("\"","").replace("\"",""))
        // console.log("data: ", data)
        console.log("data.items: ", data.items)
        setTableContent(data.items);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
   

  useEffect(() => {
    fetchOrcamentsData();
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tableContent.slice(itemOffset, endOffset));
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(tableContent.length / itemsPerPage));
    setCurrentItems(tableContent.slice(itemOffset, endOffset));

    console.log("currentItems: ",currentItems)

  }, [itemOffset, itemsPerPage, tableContent]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  // rows per page
  const handleRowsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setItemOffset(0);
  };
  
  const tableColor = {
    // bodyColor: "#212529",
    // tableColor: "#343A40",
    // textColor: "#fff",
    // rowColor: "#F2F2F2",
  };
  const lightGray = "#F2F2F2";


  if (!loading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <SideBar />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
      >
        <div>
          <OrcamentoNovo closeModal={handleCloseModal} />
        </div>
      </Modal>
      <div className="col-lg-12 col-12">
        <div className="table_content my-3 ">
          <div class="card spur-card my-2 ">
            <div className="card-header d-flex justify-content-between">
              <div className="tw-_bar">
                  <i className="fa fa-th-list" aria-hidden="true"></i>
                  <span>
                    <b>  Lista de Itens</b>
                  </span>
              </div>
              <div>
                
                <button type="button" className="btn btn-gray-800" onClick={handleOpenModal}>
                    Novo Item
                </button>
              </div>
            </div>
            <div
              className="card-body responsive"
              style={{ backgroundColor: tableColor?.bodyColor }}
            >
             <div style={{ height:'100%', overflow:'auto' }}>
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
                    <th scope="col">Nome item</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Categoria</th>
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
                        <th scope="row">{ind}</th>
                        <td>{content.nome_item}</td>
                        <td>R$ {content.valor.toFixed(2)}</td>
                        <td>{content.descri}</td>
                        <td>{content.name_catego}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
             </div>
              <div className="result_pagination">
                <span> Linhas por pagina: </span> &nbsp;{itemsPerPage}
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
                  {itemOffset + 1} - {itemOffset + itemsPerPage} de{" "}
                  {tableContent?.length}
                </span>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Proxímo"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  rowsPerPage={itemsPerPage}
                  previousLabel="Anterior"
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
    </div>
  );
};

export default ItemsList;
