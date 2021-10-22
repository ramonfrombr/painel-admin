import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
	padding: 20px;
`;

export const TituloContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const BotaoAdicionar = styled.button`
	width: 80px;
	border: none;
	padding: 5px;
	background-color: teal;
	color: white;
	border-radius: 5px;
	font-size: 16px;
	cursor: pointer;
`;

export const ProdutoContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const VendasContainer = styled.div`
	flex: 1;
`;

export const InfoContainer = styled.div`
	flex: 1;
	padding: 20px;
	margin: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const InfoCabecalho = styled.div`
	display: flex;
	align-items: center;
`;

export const ImagemProduto = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 20px;
`;

export const InfoConteudo = styled.div`
	margin-top: 10px;
`;

export const InfoItem = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-between;
`;

export const FormularioContainer = styled.div`
	padding: 20px;
	margin: 20px;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const FormularioEdicao = styled.form`
	display: flex;
	justify-content: space-between;
`;

export const LadoEsquerdo = styled.div`
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 10px;
		color: gray;
	}

	input {
		margin-bottom: 10px;
		border: none;
		padding: 5px;
		border-bottom: 1px solid gray;
	}

	select {
		margin-bottom: 10px;
	}
`;

export const LadoDireito = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const UploadContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const ImagemUpload = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 10px;
	object-fit: cover;
	margin-right: 20px;
`;

export const BotaoAtualizar = styled.button`
	border: none;
	padding: 5px;
	border-radius: 5px;
	background-color: darkblue;
	color: white;
	font-weight: 600;
	cursor: pointer;
`;
