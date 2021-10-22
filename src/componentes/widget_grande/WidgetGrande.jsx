import React from "react";

import { Widget, WidgetTitulo, WidgetTabela } from "./WidgetGrandeElementos";

import Tabela from "../tabela/Tabela";

const WidgetGrande = () => {
	return (
		<>
			<Widget>
				<WidgetTitulo>Últimas Transações</WidgetTitulo>

				<WidgetTabela>
					<Tabela />
				</WidgetTabela>
			</Widget>
		</>
	);
};

export default WidgetGrande;
