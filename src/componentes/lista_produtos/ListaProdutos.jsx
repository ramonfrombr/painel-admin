import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, BotaoEditar, BotaoApagar } from "./ListaProdutosElementos";
import { Link } from "react-router-dom";
import { produtos } from "../../Dados";

const ListaProdutos = () => {
	const [dados, definirDados] = useState(produtos);

	const apagarProduto = (id) => {
		definirDados(dados.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "produto",
			headerName: "Produto",
			width: 180,
			renderCell: (params) => {
				return (
					<div style={{ display: "flex", alignItems: "center" }}>
						<img
							style={{
								height: "32px",
								width: "32px",
								borderRadius: "50%",
								marginRight: "10px",
							}}
							src={params.row.imagem}
							alt=""
						/>
						{params.row.nome_produto}
					</div>
				);
			},
		},
		{
			field: "estoque",
			headerName: "Estoque",
			width: 180,
		},
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "preco",
			headerName: "Preço",
			width: 120,
		},
		{
			field: "acao",
			headerName: "Ação",
			width: 180,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/produto/" + params.row.id}>
							<BotaoEditar>Editar</BotaoEditar>
						</Link>
						<BotaoApagar onClick={() => apagarProduto(params.row.id)} />
					</>
				);
			},
		},
	];

	return (
		<Container>
			<h1>Lista de Produtos</h1>
			<DataGrid
				rows={dados}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</Container>
	);
};

export default ListaProdutos;
