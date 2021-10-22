import React from "react";

import { Link } from "react-router-dom";

import {
	MenuContainer,
	MenuWrap,
	MenuSecao,
	MenuTitulo,
	MenuLista,
	MenuListaItem,
	MenuItemIcone,
} from "./MenuElementos";

import LineStyleIcon from "@material-ui/icons/LineStyle";

import TimelineIcon from "@material-ui/icons/Timeline";

import TrendingUpIcon from "@material-ui/icons/TrendingUp";

import ComputerIcon from "@material-ui/icons/Computer";

import EmailIcon from "@material-ui/icons/Email";

import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import LoyaltyIcon from "@material-ui/icons/Loyalty";

import MessageIcon from "@material-ui/icons/Message";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

import AnnouncementIcon from "@material-ui/icons/Announcement";
/*
import StickyNote2Icon from "@material-ui/icons/StickyNote2";

import ManageAccountsIcon from "@material-ui/icons/ManageAccounts";*/

const Menu = () => {
	return (
		<MenuContainer>
			<MenuWrap>
				<MenuSecao>
					<MenuTitulo>Painel</MenuTitulo>
					<MenuLista>
						<Link to="/" style={{ textDecoration: "none", color: "#555" }}>
							<MenuListaItem ativo={true}>
								<MenuItemIcone>
									<LineStyleIcon />
								</MenuItemIcone>
								Início
							</MenuListaItem>
						</Link>

						<MenuListaItem>
							<MenuItemIcone>
								<TimelineIcon />
							</MenuItemIcone>
							Dados Analísticos
						</MenuListaItem>

						<MenuListaItem>
							<MenuItemIcone>
								<TrendingUpIcon />
							</MenuItemIcone>
							Vendas
						</MenuListaItem>
					</MenuLista>
				</MenuSecao>
				<MenuSecao>
					<MenuTitulo>Notificações</MenuTitulo>
					<MenuLista>
						<Link
							to="/usuarios"
							style={{ textDecoration: "none", color: "#555" }}
						>
							<MenuListaItem>
								<MenuItemIcone>
									<LineStyleIcon />
								</MenuItemIcone>
								Usuários
							</MenuListaItem>
						</Link>

						<Link
							to="/produtos"
							style={{ textDecoration: "none", color: "#555" }}
						>
							<MenuListaItem>
								<MenuItemIcone>
									<LoyaltyIcon />
								</MenuItemIcone>
								Produtos
							</MenuListaItem>
						</Link>

						<MenuListaItem>
							<MenuItemIcone>
								<MonetizationOnIcon />
							</MenuItemIcone>
							Transações
						</MenuListaItem>
						<MenuListaItem>
							<MenuItemIcone>
								<AnnouncementIcon />
							</MenuItemIcone>
							Relatórios
						</MenuListaItem>
						<MenuListaItem>
							<MenuItemIcone>
								<ComputerIcon />
							</MenuItemIcone>
							Robôs
						</MenuListaItem>
					</MenuLista>
				</MenuSecao>
				<MenuSecao>
					<MenuTitulo>Notificações</MenuTitulo>
					<MenuLista>
						<MenuListaItem>
							<MenuItemIcone>
								<EmailIcon />
							</MenuItemIcone>
							Email
						</MenuListaItem>

						<MenuListaItem>
							<MenuItemIcone>
								<TimelineIcon />
							</MenuItemIcone>
							Feedback
						</MenuListaItem>

						<MenuListaItem>
							<MenuItemIcone>
								<MessageIcon />
							</MenuItemIcone>
							Mensagens
						</MenuListaItem>
					</MenuLista>
				</MenuSecao>
				<MenuSecao>
					<MenuTitulo>Equipe</MenuTitulo>
					<MenuLista>
						<MenuListaItem>
							<MenuItemIcone>
								<SupervisorAccountIcon />
							</MenuItemIcone>
							Gerenciar
						</MenuListaItem>

						<MenuListaItem>
							<MenuItemIcone>
								<TimelineIcon />
							</MenuItemIcone>
							Dados Analíticos
						</MenuListaItem>

						<MenuListaItem>
							<MenuItemIcone>
								<AnnouncementIcon />
							</MenuItemIcone>
							Relatórios
						</MenuListaItem>
					</MenuLista>
				</MenuSecao>
			</MenuWrap>
		</MenuContainer>
	);
};

export default Menu;
