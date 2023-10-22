import { useState } from "react";

import MiApi from "./components/MiApi/Laapi";
import Header from "./components/Header/Header";

import Alerta from "./components/Alerta/Alerta";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
	const urlApi = "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=";
	const [data, setData] = useState([]);
	const [render, setRender] = useState([]);
	const [filtro, setFiltro] = useState("");

	return (
		<>
			<Header data={data} 
					filtro={filtro} 
					setFiltro={setFiltro} 
					setRender={setRender} 
					setData={setData} />
			<body>
				<Alerta render={render} mensaje_de_error={`No encontré lo que Buscas...`}/>
			<MiApi 
					data={data} 
					setData={setData} 
					urlApi={urlApi} 
					render={render} />
			</body>
			<Footer />
		</>
	);
}
export default App;