import React from "react";
import {
	InfoContainer,
	InfoItem,
	InfoTitulo,
	InfoDinheiroContainer,
	InfoDinheiro,
	InfoDinheiroPorcentagem,
	InfoDescricao,
} from "./InfoDestafadaElementos";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import "./estilo.scss";

const Inicio = () => {
	return (
		<InfoContainer>
			<InfoItem>
				<InfoTitulo>Receita</InfoTitulo>
				<InfoDinheiroContainer>
					<InfoDinheiro>$2,451</InfoDinheiro>
					<InfoDinheiroPorcentagem>
						-2.5%
						<ArrowDownwardIcon className="infoIcone negativo" />
					</InfoDinheiroPorcentagem>
				</InfoDinheiroContainer>
				<InfoDescricao>Comparado ao mês passado</InfoDescricao>
			</InfoItem>

			<InfoItem>
				<InfoTitulo>Custos</InfoTitulo>
				<InfoDinheiroContainer>
					<InfoDinheiro>$2,451</InfoDinheiro>
					<InfoDinheiroPorcentagem>
						-2.5%
						<ArrowDownwardIcon className="infoIcone negativo" />
					</InfoDinheiroPorcentagem>
				</InfoDinheiroContainer>
				<InfoDescricao>Comparado ao mês passado</InfoDescricao>
			</InfoItem>

			<InfoItem>
				<InfoTitulo>Lucro</InfoTitulo>
				<InfoDinheiroContainer>
					<InfoDinheiro>$2,451</InfoDinheiro>
					<InfoDinheiroPorcentagem>
						+2.5%
						<ArrowUpwardIcon className="infoIcone" />
					</InfoDinheiroPorcentagem>
				</InfoDinheiroContainer>
				<InfoDescricao>Comparado ao mês passado</InfoDescricao>
			</InfoItem>
		</InfoContainer>
	);
};

export default Inicio;
