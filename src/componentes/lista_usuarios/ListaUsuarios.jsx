import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import { Container, BotaoEditar, BotaoApagar } from "./ListaUsuariosElementos";

import { Link } from "react-router-dom";

import { usuarios } from "../../Dados";

const ListaUsuarios = () => {
	const [dados, definirDados] = useState(usuarios);

	const apagarUsuario = (id) => {
		definirDados(dados.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "usuario",
			headerName: "Usuário",
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
							src={params.row.avatar}
							alt=""
						/>
						{params.row.nome_usuario}
					</div>
				);
			},
		},
		{
			field: "email",
			headerName: "E-mail",
			type: "email",
			width: 180,
		},
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "acao",
			headerName: "Ação",
			width: 180,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/usuario/" + params.row.id}>
							<BotaoEditar>Editar</BotaoEditar>
						</Link>
						<BotaoApagar onClick={() => apagarUsuario(params.row.id)} />
					</>
				);
			},
		},
	];

	return (
		<Container>
			<div
				style={{
					width: "80%",
					height: "80%",
					margin: "0 auto",
					marginTop: "50px",
				}}
			>
				<DataGrid
					rows={dados}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[5]}
					checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</Container>
	);
};

export default ListaUsuarios;
