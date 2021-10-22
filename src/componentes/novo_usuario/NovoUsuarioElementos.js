import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
	padding: 20px;
`;

export const Formulario = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

export const Campo = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	margin-right: 20px;

	label {
		margin-bottom: 10px;
		font-size: 14px;
		font-weight: 600;
		color: rgb(150, 150, 150);
	}

	input {
		height: 20px;
		padding: 10px;
		border: 1px solid grey;
		border-radius: 5px;
	}
`;

export const InputGenero = styled.div`
	input {
		margin-top: 15px;
	}

	label {
		margin: 10px;
		font-size: 18px;
		color: #555;
	}
`;

export const SelectUsuarioAtivo = styled.select`
	height: 40px;
	border-radius: 5px;
	background-color: white;
	color: #555;
`;

export const Botao = styled.button`
	width: 200px;
	border: none;
	background-color: darkblue;
	color: white;
	padding: 7px 10px;
	font-weight: 600;
	border-radius: 10px;
	margin-top: 30px;
	cursor: pointer;
`;
