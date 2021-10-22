import React from "react";
import styled from "styled-components";

import InfoDestacada from "../../componentes/info_destacada/InfoDestacada";

import Grafico from "../../componentes/grafico/Grafico";

import WidgetPequeno from "../../componentes/widget_pequeno/WidgetPequeno";

import WidgetGrande from "../../componentes/widget_grande/WidgetGrande";

import { robos_ativos } from "../../Dados";

const InicioContainer = styled.div`
	flex: 4;
	background-color: white;
	padding: 10px;
`;

const InicioWidgets = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
`;

const Inicio = () => {
	return (
		<InicioContainer>
			<InfoDestacada />
			<Grafico
				titulo="Número de Robôs Ativos"
				dados={robos_ativos}
				grade
				dadosKey="Robôs Ativos"
			/>
			<InicioWidgets>
				<WidgetPequeno />
				<WidgetGrande />
			</InicioWidgets>
		</InicioContainer>
	);
};

export default Inicio;
