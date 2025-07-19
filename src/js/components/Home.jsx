import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Reloj } from "./Reloj";
import { ContadorSimple } from "./ContadorSimple";

//create your first component

const Home = (props) => {
	return (
		<div className="d-flex container row justify-content-center align-items-center" style={{width: "100%", height: "75px", background: "lightblue"}}>
			<div className="col-md-1 border border-secondary"><Reloj /></div>
			<div className="col-md-1 border border-secondary"><ContadorSimple
				digitos={props.seis}
			/></div>

			<div className="col-md-1 border border-secondary">
				<ContadorSimple
					digitos={props.cinco}
				/></div>

			<div className="col-md-1 border border-secondary"><ContadorSimple
				digitos={props.cuatro} /></div>

			<div className="col-md-1 border border-secondary"><ContadorSimple
				digitos={props.tres}
			/></div>

			<div className="col-md-1 border border-secondary"><ContadorSimple
				digitos={props.dos}
			/></div>
			<div className="col-md-1 border border-secondary"><ContadorSimple
				digitos={props.uno}
			/>	</div>





		</div>
	);
};

export default Home;