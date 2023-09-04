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


const BASE_URL_ALL_CATEGO = "http://localhost:8000/get_all_categorias/";
const BASE_URL_SET_ITEM = "http://localhost:8000/set_add_item/";

const OrcamentoNovo = (props) => {

  const style = "none";
  const bgColor = "#F0F0F0";
  const [selectedCatego, setSelectedCatego] = React.useState(null);
  const [itemsSelected, setItemsSelected] = React.useState([]);
  const [categorias, setCategorias] = React.useState([]);
  const [qtd, setQtd] = React.useState(1);
  const [valor, setValor] = React.useState(0);
  const [nomeItem, setNomeItem] = React.useState("");
  const [descri, setDescri] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dataGraph, setDataGraph] = useState([]);

  const fetchItemsData = async () => {
    try {
      const response = await fetch(BASE_URL_ALL_CATEGO,{
        method: "GET",
        headers: {
          "Authorization": `Bearer ${String(localStorage.getItem('accessToken')).replace("\"","").replace("\"","")}`,  
          "Content-Type": "application/json",
        }});
      const data = await response.json();
      console.log("accessToken: ", String(localStorage.getItem('accessToken')).replace("\"","").replace("\"",""))
      console.log("data: ", data)
      console.log("data.orcamentos: ", data.categorias)
      setCategorias(data.categorias);
      setLoading(true);
    } catch (error) {
      console.log(error.message);
    }
  };
 

  useEffect(() => {
    fetchItemsData();
  }, []);


  const handleChange = (selectedCatego) => {
    setSelectedCatego(selectedCatego);
  };
  const handleChangeQtd = (e) => {
    setQtd(e.target.value);
  };

  
  const handleSave = async () => {
    const dataObj = {
      nome_item: nomeItem,
      valor: valor,
      descri: descri,
      id_categoria: selectedCatego.id
    };
    const headers = {
      'Authorization': `Bearer ${String(localStorage.getItem('accessToken')).replace("\"","").replace("\"","")}`,
      'Content-Type': 'application/json',
    };
    console.log("dataObj: ", dataObj)
    try {
      const res = await axios.post(`${BASE_URL_SET_ITEM}`, dataObj, { headers: headers });
      console.log("check", res.data);
      if (res) {
        toast.success("Item salvo com sucesso!", {
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
        <div className="col-lg-12  mt-8">
          <div class="card spur-card ">
            <CardHeader
              title="Novo Item"
              style={style}
              bgColor={bgColor}
            />
            <div class="card-body ">
              <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">
                  Nome item
                </label>
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder=""
                  onChange={(e) => {setNomeItem(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">
                  Valor
                </label>
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder=""
                  onChange={(e) => {setValor(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">
                  Categoria
                </label>
                  <Select
                    placeholder="Pesquise uma categoria..."
                    value={selectedCatego}
                    onChange={handleChange}
                    options={categorias}
                    getOptionLabel={(option) => `${option.nome_catego} - ${option.descri}`}
                    getOptionValue={(option) => option.id}
                  />
              </div>
                
                <div>
                    <label>Descrição</label>
                    <textarea
                      className="form-control my-2"
                      rows="3"
                      onChange={(e) => {setDescri(e.target.value)}}
                    ></textarea>
                  </div>
                <div className="d-flex justify-content-end " style={{marginTop: 20 }}>
                  <button type="button" className="btn btn-warning m-2"
                      onClick={props.closeModal}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-gray-800 m-2"
                      onClick={handleSave}>
                      Salvar Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default OrcamentoNovo;
