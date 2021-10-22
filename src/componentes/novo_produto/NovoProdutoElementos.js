import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
`;

export const Formulario = styled.form`
	margin-top: 10px;
`;

export const FormularioItem = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;

	label {
		color: gray;
		font-weight: 600;
		margin-bottom: 10px;
	}

	input {
		padding: 10px;
	}

	select {
		padding: 10px;
	}
`;

export const BotaoAdicionar = styled.button`
	margin-top: 10px;
	padding: 7px 10px;
	border: none;
	border-radius: 10px;
	background-color: darkblue;
	color: white;
	font-weight: 600;
	cursor: pointer;
`;
