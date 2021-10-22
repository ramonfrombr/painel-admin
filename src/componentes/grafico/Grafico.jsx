import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

import { GraficoContainer, GraficoTitulo } from "./GraficoElementos";

const Grafico = ({ titulo, dados, dadosKey, grade }) => {
	return (
		<>
			<GraficoContainer>
				<GraficoTitulo>{titulo}</GraficoTitulo>

				<ResponsiveContainer width="100%" aspect={4 / 1}>
					<LineChart data={dados}>
						<XAxis dataKey="mes" stroke="#000" />
						<Line type="monotone" stroke="#000" dataKey={dadosKey} />
						<Tooltip />
						<Legend />
						{grade && <CartesianGrid stroke="#DDDDDD" strokeDasharray="5 5" />}
					</LineChart>
				</ResponsiveContainer>
			</GraficoContainer>
		</>
	);
};

export default Grafico;
