import styled from "styled-components";

export const NavbarContainer = styled.div`
	width: 100%;
	height: 50px;
	background-color: black;
	color: white;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarWrap = styled.div`
	height: 100%;
	padding: 0px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavbarEsquerda = styled.div`
	display: flex;
	align-items: center;
`;

export const NavbarDireita = styled.div`
	display: flex;
`;

export const NavbarIcones = styled.div`
	display: flex;
	align-items: center;
`;

export const NavbarIconeContainer = styled.div`
	position: relative;
	margin-left: 20px;

	&:hover {
		cursor: pointer;
	}
`;

export const IconeNumero = styled.span`
	width: 15px;
	height: 15px;
	position: absolute;
	top: 0;
	right: -4px;
	font-size: 12px;
	color: white;
	background-color: goldenrod;
	font-weight: 600;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavbarAvatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-left: 20px;
	cursor: pointer;
`;
