import styled from "styled-components";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export const Container = styled.div`
	flex: 4;
`;

export const BotaoEditar = styled.button`
	border: none;
	border-radius: 10px;
	padding: 5px 10px;
	background-color: #3bb077;
	color: white;
	cursor: pointer;
	margin-right: 20px;
`;

export const BotaoApagar = styled(DeleteOutlineIcon)`
	color: red;
	cursor: pointer;
`;
