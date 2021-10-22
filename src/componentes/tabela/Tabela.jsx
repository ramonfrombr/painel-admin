import React from "react";

import "./tabela.scss";

import {
	TabelaContainer,
	Linha,
	Cabecalho,
	Usuario,
	UsuarioImagem,
	UsuarioNome,
	Data,
	Valor,
} from "./TabelaElementos";

const Tabela = () => {
	const Botao = ({ tipo }) => {
		return <button className={"widgetBotao " + tipo}>{tipo}</button>;
	};

	return (
		<TabelaContainer>
			<Linha>
				<Cabecalho>Cliente</Cabecalho>
				<Cabecalho>Data</Cabecalho>
				<Cabecalho>Valor</Cabecalho>
				<Cabecalho>Status</Cabecalho>
			</Linha>
			<Linha>
				<Usuario>
					<UsuarioImagem src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/67372580_2429468213801676_7902275353991708672_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHipeL_1_o0Xp4UkghHjS_KCgbbXoSMPv8KBttehIw-_1wd8OJFYSnOmg-hO-PfdQtQGqB7dUXQtyljCZVvM1FB&_nc_ohc=VBT2nHQHZnAAX99tfp0&_nc_ht=scontent-gig2-1.xx&oh=0289d1dea034a6c8c28aa28e688cc4ca&oe=6197D881" />
					<UsuarioNome>Susan Carol</UsuarioNome>
				</Usuario>
				<Data>2 de Junho de 2021</Data>
				<Valor>$122.00</Valor>
				<Botao tipo="Pendente" />
			</Linha>

			<Linha>
				<Usuario>
					<UsuarioImagem src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/67372580_2429468213801676_7902275353991708672_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHipeL_1_o0Xp4UkghHjS_KCgbbXoSMPv8KBttehIw-_1wd8OJFYSnOmg-hO-PfdQtQGqB7dUXQtyljCZVvM1FB&_nc_ohc=VBT2nHQHZnAAX99tfp0&_nc_ht=scontent-gig2-1.xx&oh=0289d1dea034a6c8c28aa28e688cc4ca&oe=6197D881" />
					<UsuarioNome>Susan Carol</UsuarioNome>
				</Usuario>
				<Data>2 de Junho de 2021</Data>
				<Valor>$122.00</Valor>
				<Botao tipo="Pendente" />
			</Linha>

			<Linha>
				<Usuario>
					<UsuarioImagem src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/67372580_2429468213801676_7902275353991708672_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHipeL_1_o0Xp4UkghHjS_KCgbbXoSMPv8KBttehIw-_1wd8OJFYSnOmg-hO-PfdQtQGqB7dUXQtyljCZVvM1FB&_nc_ohc=VBT2nHQHZnAAX99tfp0&_nc_ht=scontent-gig2-1.xx&oh=0289d1dea034a6c8c28aa28e688cc4ca&oe=6197D881" />
					<UsuarioNome>Susan Carol</UsuarioNome>
				</Usuario>
				<Data>2 de Junho de 2021</Data>
				<Valor>$122.00</Valor>
				<Botao tipo="Pendente" />
			</Linha>

			<Linha>
				<Usuario>
					<UsuarioImagem src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/67372580_2429468213801676_7902275353991708672_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHipeL_1_o0Xp4UkghHjS_KCgbbXoSMPv8KBttehIw-_1wd8OJFYSnOmg-hO-PfdQtQGqB7dUXQtyljCZVvM1FB&_nc_ohc=VBT2nHQHZnAAX99tfp0&_nc_ht=scontent-gig2-1.xx&oh=0289d1dea034a6c8c28aa28e688cc4ca&oe=6197D881" />
					<UsuarioNome>Susan Carol</UsuarioNome>
				</Usuario>
				<Data>2 de Junho de 2021</Data>
				<Valor>$122.00</Valor>
				<Botao tipo="Pendente" />
			</Linha>
		</TabelaContainer>
	);
};

export default Tabela;
