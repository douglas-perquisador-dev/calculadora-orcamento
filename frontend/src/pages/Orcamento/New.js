import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import CardHeader from "../../components/Charts/CardHeader";
import CircleChart from "../../components/Charts/CircleChart";
import {
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Popper from '@material-ui/core/Popper';
import Select from 'react-select';
import { Alert } from "bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Modal } from '@material-ui/core';

const CustomPopper = function (props) {
  return (
    <Popper {...props} style={{...props.style, marginTop: 20}} />
  );
};


const BASE_URL = "http://localhost:8000/get_all_items/";
const BASE_URL_SET_ORC = "http://localhost:8000/set_add_orcamento/";
const BASE_URL_GET_GRAPH = "http://localhost:8000/get_graph_orcamentos/";

const OrcamentoNovo = (props) => {

  const style = "none";
  const bgColor = "#F0F0F0";
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [itemsSelected, setItemsSelected] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [qtd, setQtd] = React.useState(1);
  const [qtdTotal, setQtdTotal] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [obs, setObs] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dataGraph, setDataGraph] = useState([]);

  const fetchItemsData = async () => {
    try {
      const response = await fetch(BASE_URL,{
        method: "GET",
        headers: {
          "Authorization": `Bearer ${String(localStorage.getItem('accessToken')).replace("\"","").replace("\"","")}`,  
          "Content-Type": "application/json",
        }});
      const data = await response.json();
      console.log("accessToken: ", String(localStorage.getItem('accessToken')).replace("\"","").replace("\"",""))
      console.log("data: ", data)
      console.log("data.orcamentos: ", data.items)
      setItems(data.items);
      setLoading(true);
    } catch (error) {
      console.log(error.message);
    }
  };
 

  useEffect(() => {
    fetchItemsData();
  }, []);


  const handleChange = (selectedItem) => {
    setSelectedItem(selectedItem);
  };
  const handleChangeQtd = (e) => {
    setQtd(e.target.value);
  };

  const handleAddItem = () => {
    if(selectedItem == null) return alert("Nenhum item selecionado. Selecione um antes de adicioná-lo ao orçamento.");
    
    let item = {...selectedItem, qtd: qtd, subtotal: selectedItem.valor * qtd}
    console.log("item: ", item)
    console.log("itemsSelected: ", itemsSelected)
    // console.log("qtd: ", qtd)
    setItemsSelected([...itemsSelected, item])
    setTotal(total + item.subtotal)
    setQtdTotal(qtdTotal + qtd)
  };

    // Função para remover um item pelo ID
    const removerItem = (id) => {
      // const novosItens = itemsSelected.filter((item) => item.id_item !== id);
      try{
        console.log("index: ", id)
        setTotal(total - itemsSelected[id].subtotal)
        setQtdTotal(qtdTotal - itemsSelected[id].qtd)
        const novosItens = itemsSelected.filter((_, index) => index !== id);
        // const newArray = [...itemsSelected];  // Copia o array original
        // const novosItens = newArray.splice(id, 1);
        console.log("novosItens: ", novosItens)
        setItemsSelected(novosItens);
      } catch (error) {
        console.log(error)
      }
    }
  
  const handleSave = async () => {
    const dataObj = {
      qtd_itens: qtdTotal,
      valor_orc: total,
      descri_orc: obs,
      items: itemsSelected
    };
    const headers = {
      'Authorization': `Bearer ${String(localStorage.getItem('accessToken')).replace("\"","").replace("\"","")}`,
      'Content-Type': 'application/json',
    };
    console.log("dataObj: ", dataObj)
    try {
      const res = await axios.post(`${BASE_URL_SET_ORC}`, dataObj, { headers: headers });
      console.log("check", res.data.status);
      if (res) {
        toast.success("Orçamento salvo com sucesso!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      console.log("res.data.access:", res.data.access)
      // navigate("/dashboard");

    } catch (error) {
      if (error) {
        toast.error("Erro ao salvar orçamento!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      console.error("error: ", error);
    }
  }
  
  const handleGraph = async () => {
    const dataObj = {
      qtd_total: qtdTotal,
      valor_total: total,
      items: itemsSelected
    };
    const headers = {
      'Authorization': `Bearer ${String(localStorage.getItem('accessToken')).replace("\"","").replace("\"","")}`,
      'Content-Type': 'application/json',
    };
    console.log("dataObj: ", dataObj)
    try {
      const res = await axios.post(`${BASE_URL_GET_GRAPH}`, dataObj, { headers: headers });
      console.log("check", res.data);
      if (res) {
        toast.success("Graphico gerado com sucesso!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setDataGraph(res.data)
        setOpenModal(true)
      }
      // navigate("/dashboard");

    } catch (error) {
      console.error("error: ", error);
    }
  }
  const tableColor = {
    // bodyColor: "#212529",
    // tableColor: "#343A40",
    // textColor: "#fff",
    // rowColor: "#F2F2F2",
  };
  const lightGray = "#F2F2F2";

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (!loading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }
  return (
    <div className="container">

      <div className="row-lg-12 mt-2">
        <div className="col-lg-12">
          <div class="card spur-card " style={{ height:'auto', maxHeight: '90%', overflow:'auto' }}>
            <CardHeader
              title="Novo Orçamento"
              style={style}
              bgColor={bgColor}
            />
            <div class="card-body ">
              <form>
                <div  className="row form-row">
                  <div className="form-group col-md-8 my-2">
                    <label >
                      Selecione um item
                    </label>
                      <Select
                        placeholder="Pesquise um item..."
                        value={selectedItem}
                        onChange={handleChange}
                        options={items}
                        getOptionLabel={(option) => `${option.nome_item} (R$ ${option.valor.toFixed(2)}) ${option.descri} - ${option.name_catego}`}
                        getOptionValue={(option) => option.id}
                      />
                  </div>
                  
                  <div className="form-group col-md-2">
                    <label style={{marginBottom: 0, marginTop: 8}}>
                      Quantidade
                    </label>
                      <input
                        type="number"
                        className="form-control my-2"
                        placeholder=""
                        value={qtd}
                        onChange={handleChangeQtd}
                      />
                  </div>
                  <div className="form-group col-md-2 my-2">
                    <button 
                      type="button" 
                      style={{marginBottom: 0, marginTop: 30}}
                      className="btn btn-gray-800" 
                      onClick={handleAddItem}>
                       Adicionar item
                    </button>

                  </div>

              </div>
                <div className="form-group">
                  <label >
                    Itens selecionados
                  </label>
                  <div style={{ height:'auto', maxHeight: '300px', overflow:'auto' }}>
                    <table
                        className="table table-hover table-in-card responsive"
                        style={{
                          backgroundColor: tableColor?.tableColor,
                          color: tableColor?.textColor,
                          overflowY: 'auto'
                        }}
                    >
                        <thead>
                          <tr className="heading">
                            <th scope="col">#</th>
                            <th scope="col">Items</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">#</th>
                          </tr>
                        </thead>
                        <tbody>
                          {itemsSelected?.map((content, ind) => {
                            return (
                              <tr
                                key={ind}
                                style={{
                                  backgroundColor: ind % 2 !== 0 ? "" : lightGray,
                                }}
                              >
                                <th scope="row">{ind+1}</th>
                                <td>{content.nome_item} - {content.name_catego}</td>
                                <td>R$ {content.valor.toFixed(2)}</td>
                                <td>{content.descri}</td>
                                <td style={{justifyItems: "center"}}>{content.qtd}</td>
                                <td>R$ {content.subtotal.toFixed(2)}</td>
                                <td>
                                  <button type="button" className="btn btn-warning" onClick={() => removerItem(ind)}>Remover</button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                    </table>
                  </div>
                </div>
                <div className="result_pagination bg-transparent text-dark" style={{ paddingRight: 20}}>
                 <span style={{color: "black", fontSize: 18, fontWeight: "bolder"}}> Total: R$ {total.toFixed(2)}</span> &nbsp;
                </div>
                
                <div  className="row form-row">
                  <div className="form-group col-md-6 my-2">
                    <label>Observações</label>
                    <textarea
                      className="form-control my-2"
                      rows="3"
                      onChange={(e) => {setObs(e.target.value)}}
                    ></textarea>
                  </div>
                  
                  <div className="form-group col-md-6 my-2">
                    <CircleChart data={dataGraph} />
                  </div>
                </div>
                <div className="d-flex justify-content-end " style={{marginTop: 20 }}>
                  <button type="button" className="btn btn-warning m-2"
                      onClick={props.closeModal}>
                    Cancelar
                  </button>
                  <button type="button" className="btn btn-gray-600 m-2"
                      onClick={handleGraph}>
                    Gerar grafico
                  </button>
                  <button type="submit" className="btn btn-gray-800 m-2"
                      onClick={handleSave}>
                      Salvar orçamento
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrcamentoNovo;
