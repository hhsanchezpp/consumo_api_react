import { useEffect } from "react";
import propsTypes from "prop-types";
import "../../assets/Laapi.css";

const Laapi = ({ setData, urlApi, render}) => {
	const callApi = async () => {
		try {
			const response = await fetch(urlApi);
			const datos = await response.json();
			setData(datos.player);
		} catch (error) {
			console.error(`Nose pudo cargar Datos...`);
		}
	};

	useEffect(() => {
		callApi();
	}, []);

	return (
		<div className="grid_main">
			{render?.map((ele) => {
				return (
					<div className="card" key={ele.idPlayer}>
						<div className="img_container">
							<img src={ele.strThumb} alt="meal" />
						</div>
						<div className="card_body_container">
							<p>
								Jugador: <span>{ele.strPlayer}</span>
							</p>
							<p>
								Nacionalidad: <span>{ele.strNationality}</span>
							</p>
							<p>
								Club: <span>{ele.strTeam}</span>
							</p>
							<p>
								Biografía: <span>{ele.strDescriptionEN}</span>
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

Laapi.propTypes = 	{
					render: propsTypes.array.isRequired,
					setData: propsTypes.func.isRequired,
					urlApi: propsTypes.string.isRequired,
					};

export default Laapi;