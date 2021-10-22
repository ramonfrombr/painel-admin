import styled from "styled-components";

export const Widget = styled.div`
	flex: 1;
	padding: 20px;
	margin-right: 20px;
	-webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const WidgetTitulo = styled.span`
	font-size: 22px;
	font-weight: 600;
`;

export const WidgetLista = styled.div`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const WidgetListaItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20px 0px;
`;

export const WidgetUsuarioImagem = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
`;

export const WidgetUsuario = styled.div`
	display: flex;
	flex-direction: column;
`;

export const WidgetUsuarioNome = styled.span`
	font-weight: 600;
`;

export const WidgetUsuarioCargo = styled.span`
	font-weight: 300;
`;

export const WidgetBotao = styled.button`
	display: flex;
	align-items: center;
	border: none;
	border-radius: 10px;
	padding: 7px 10px;
	background-color: #eeeef7;
	color: #555;
	cursor: pointer;
`;
