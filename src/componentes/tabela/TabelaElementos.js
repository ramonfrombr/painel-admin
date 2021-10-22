import styled from "styled-components";

export const TabelaContainer = styled.table`
	width: 100%;
	border-spacing: 20px;
`;

export const Cabecalho = styled.th`
	text-align: left;
`;

export const Linha = styled.tr``;

export const Usuario = styled.td`
	display: flex;
	align-items: center;
	font-weight: 600;
`;

export const UsuarioImagem = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`;

export const UsuarioNome = styled.span``;

export const Data = styled.td`
	font-weight: 300;
`;

export const Valor = styled.td`
	font-weight: 300;
`;
