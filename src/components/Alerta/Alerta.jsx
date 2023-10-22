import propsTypes from "prop-types"
const Alerta = ({ mensaje_de_error, render }) => {
	return (
        <>
            <div className="text-center alert">{render.length === 0 && <p className={"alert alert-danger"}>{mensaje_de_error}</p>}
            </div>
        </>
    )
};
Alerta.propTypes = { mensaje_de_error: propsTypes.string.isRequired,render: propsTypes.array.isRequired }
export default Alerta;