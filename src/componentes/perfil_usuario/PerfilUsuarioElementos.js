import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
	padding: 20px;
`;

export const Cabecalho = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Titulo = styled.h1``;

export const BotaoCriar = styled.button`
	width: 80px;
	border: none;
	padding: 5px;
	background-color: teal;
	border-radius: 5px;
	cursor: pointer;
	color: white;
	font-size: 16px;
`;

export const Conteudo = styled.div`
	display: flex;
`;

export const Perfil = styled.div`
	flex: 1;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const PerfilCabecalho = styled.div`
	display: flex;
	align-items: center;
`;

export const UsuarioImagem = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
`;

export const Usuario = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;

export const UsuarioNome = styled.span`
	font-weight: 600;
`;

export const UsuarioTitulo = styled.span`
	font-weight: 300;
`;

export const PerfilInfo = styled.div`
	margin-top: 20px;
`;

export const InfoTitulo = styled.span`
	font-size: 14px;
	font-weight: 600;
	color: rgb(175, 170, 170);
`;

export const InfoItem = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
	color: #444;
`;

export const Informacao = styled.span``;

export const InformacaoConteudo = styled.span`
	margin-left: 10px;
`;

export const FormularioEdicao = styled.div`
	flex: 2;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	margin-left: 20px;
`;

export const FormularioTitulo = styled.span`
	font-size: 24px;
	font-weight: 600;
`;

export const Formulario = styled.form`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;

	input {
		border: none;
		width: 250px;
		height: 30px;
		border-bottom: 1px solid grey;
	}
`;

export const LadoEsquerdo = styled.div``;

export const LadoDireito = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Campo = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;

	> label {
		margin-bottom: 5px;
		font-size: 14px;
	}
`;

export const ImagemUpload = styled.div`
	display: flex;
	align-items: center;

	label:hover {
		cursor: pointer;
	}
`;

export const Imagem = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 10px;
	object-fit: cover;
	margin-right: 20px;
`;

export const BotaoAtualizar = styled.button`
	border-radius: 5px;
	border: none;
	padding: 5px;
	cursor: pointer;
	background-color: darkblue;
	color: white;
	font-weight: 600;
`;
