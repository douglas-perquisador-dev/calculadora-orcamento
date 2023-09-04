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
const BASE_URL_SET_CATEGO = "http://localhost:8000/set_add_categoria/";

const CategoriaNova = (props) => {

  const style = "none";
  const bgColor = "#F0F0F0";
  const [qtdTotal, setQtdTotal] = React.useState(0);
  const [obs, setObs] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [loading, setLoading] = useState(false);

  
  const handleSave = async () => {
    const dataObj = {
      nome_catego: nome,
      descri: obs,
    };
    const headers = {
      'Authorization': `Bearer ${String(localStorage.getItem('accessToken')).replace("\"","").replace("\"","")}`,
      'Content-Type': 'application/json',
    };
    console.log("dataObj: ", dataObj)
    try {
      const res = await axios.post(`${BASE_URL_SET_CATEGO}`, dataObj, { headers: headers });
      console.log("check", res.data.status);
      if (res) {
        toast.success("Categoria salva com sucesso!", {
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
 
  const tableColor = {
    // bodyColor: "#212529",
    // tableColor: "#343A40",
    // textColor: "#fff",
    // rowColor: "#F2F2F2",
  };
  const lightGray = "#F2F2F2";

  return (
    <div className="container">

      <div className="row-lg-12 mt-8">
        <div className="col-lg-12">
          <div class="card spur-card ">
            <CardHeader
              title="Nova Categoria"
              style={style}
              bgColor={bgColor}
            />
            <div class="card-body ">
              <form>
                
                <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Nome categoria
                      </label>
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder=""
                        onChange={(e) => {setNome(e.target.value)}}
                      />
                    </div>
                
                  <div>
                    <label>Observações</label>
                    <textarea
                      className="form-control my-2"
                      rows="3"
                      onChange={(e) => {setObs(e.target.value)}}
                    ></textarea>
                  </div>
                  
                <div className="d-flex justify-content-end " style={{marginTop: 20 }}>
                  <button type="button" className="btn btn-warning m-2"
                      onClick={props.closeModal}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-gray-800 m-2"
                      onClick={handleSave}>
                      Salvar Categoria
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

export default CategoriaNova;
