import Buscador from "../Buscar/Buscar"
import "../../assets/Header.css"
import propsTypes from "prop-types"

const Header = ({filtro, setData, setFiltro, data, setRender}) => {
  return (
    <header id="inicio">
				<nav className="nav-bar">
					<div>
						<a className="logoo" href="#">
							<p className="m-0 logo"><span>Equipo de Futbol</span></p>
						</a>					
					</div>
				</nav>
				<div id="" className="hero">
					<div>
						<Buscador filtro={filtro} setFiltro={setFiltro} setData={setData} data={data} setRender={setRender} />
					</div>
				</div>
			</header>
  )
}
Header.propTypes = {
	filtro: propsTypes.string.isRequired,
	setData: propsTypes.func.isRequired,
	setFiltro: propsTypes.func.isRequired, 
	data: propsTypes.array.isRequired, 
	setRender: propsTypes.func.isRequired
}
export default Header