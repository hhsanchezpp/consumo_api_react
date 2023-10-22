import { useEffect} from "react";
import propsTypes from "prop-types"
import "../../assets/Buscar.css";

const Buscar = ({ filtro, setFiltro, data, setRender}) => {

	const evento = (e) => {
		setFiltro(e.target.value);
	};
	useEffect(() => {
		if (!filtro) { setRender(data);
		} else {
			const dataEncontrada = data.filter((loquebusco) => {
				return (
						loquebusco.strPlayer.toLowerCase().includes(filtro.toLowerCase()) ||
						loquebusco.strNationality.toLowerCase().includes(filtro.toLowerCase()) ||
						loquebusco.strTeam.toLowerCase().includes(filtro.toLowerCase()) 
						) })
			setRender(dataEncontrada);
				}
	}, [filtro, setRender, data]);

	return (
		<div>
			<div className="container">
				<form>
					<label className="form-label fs-2" htmlFor="filter">Busca tu Jugador:</label>
					<input className="form-control h-50 fs-1" placeholder="Ingresa tu busqueda" type="text" name={filtro} id="filter" onChange={evento} />
				</form>
			</div>
		</div>
	);
};
Buscar.propTypes = {filtro: propsTypes.string.isRequired, setFiltro: propsTypes.func.isRequired, data: propsTypes.array.isRequired, setRender: propsTypes.func.isRequired
}
export default Buscar;