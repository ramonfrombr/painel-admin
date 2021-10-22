import styled from "styled-components";

export const InfoContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: 20px;
	justify-content: space-between;
`;

export const InfoItem = styled.div`
	flex: 1;
	margin: 0px 20px;
	padding: 30px;
	border-radius: 10px;
	cursor: pointer;
	-webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const InfoTitulo = styled.span`
	font-size: 20px;
`;

export const InfoDinheiroContainer = styled.div`
	margin: 10px 0px;
	display: flex;
	align-items: center;
`;

export const InfoDinheiro = styled.span`
	font-size: 30px;
	font-weight: bold;
`;

export const InfoDinheiroPorcentagem = styled.span`
	display: flex;
	align-items: center;
	margin-left: 20px;
`;

export const InfoDescricao = styled.span`
	font-size: 15px;
	color: grey;
`;

export const Info = styled.div``;
