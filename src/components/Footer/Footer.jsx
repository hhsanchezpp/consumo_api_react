import React from "react";
import "../../assets/Footer.css";

const Footer = () => {
	return (
		<footer className="text-center hero1">
			<div className="d-flex justify-content-evenly flex-wrap gap-4">
				<div className="">
					<h4>Contactados</h4>
					<a href="mailto:mail@mail.com">mail@mail.com</a>
				</div>
				<div>
					<h4>Sobre nosotros</h4>
					<a className="telefono">+56 2 2535 25554</a>
				</div>
			</div>
		</footer>
	);
};
export default Footer;