import React from "react";

import {
	Container,
	Formulario,
	FormularioItem,
	BotaoAdicionar,
} from "./NovoProdutoElementos";

const FormularioNovoProduto = () => {
	return (
		<>
			<Container>
				<h1>Novo Produto</h1>
				<Formulario>
					<FormularioItem>
						<label>Imagem</label>
						<input type="file" id="imagem" />
					</FormularioItem>
					<FormularioItem>
						<label>Nome</label>
						<input type="text" id="nome" />
					</FormularioItem>
					<FormularioItem>
						<label>Estoque</label>
						<input type="text" id="123" />
					</FormularioItem>
					<FormularioItem>
						<label>Ativo</label>
						<select name="ativo" id="ativo">
							<option value="sim">Sim</option>
							<option value="nao">Não</option>
						</select>
					</FormularioItem>

					<BotaoAdicionar>Criar</BotaoAdicionar>
				</Formulario>
			</Container>
		</>
	);
};

export default FormularioNovoProduto;
