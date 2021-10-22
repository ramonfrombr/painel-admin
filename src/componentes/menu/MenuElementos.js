import styled from "styled-components";

export const MenuContainer = styled.div`
	flex: 1;
	height: calc(100vh - 50px);
	background-color: rgb(251, 251, 255);
	position: sticky;
	top: 50px;
	overflow: scroll;
`;

export const MenuWrap = styled.div`
	padding: 2px;
`;

export const MenuSecao = styled.div`
	margin-bottom: 10px;
`;

export const MenuTitulo = styled.h3`
	font-size: 13px;
	color: rgb(197, 194, 194);
`;

export const MenuLista = styled.ul`
	list-style: none;
	padding: 5px;
	color: #555 !important;
`;

export const MenuListaItem = styled.li`
	padding: 5px;
	margin-bottom: 2px;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: 10px;

	background-color: ${(props) => (props.ativo ? "rgb(240, 240, 255);" : "")};

	&:hover {
		background-color: rgb(240, 240, 255);
	}
`;

export const MenuItemIcone = styled.div`
	margin-right: 5px;
`;
