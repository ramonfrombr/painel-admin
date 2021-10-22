import React from "react";

import {
	Widget,
	WidgetTitulo,
	WidgetLista,
	WidgetListaItem,
	WidgetUsuarioImagem,
	WidgetUsuario,
	WidgetUsuarioNome,
	WidgetUsuarioCargo,
	WidgetBotao,
} from "./WidgetPequenoElementos";

import VisibilityIcon from "@material-ui/icons/Visibility";

import "./widgetpequeno.scss";

const WidgetPequeno = () => {
	return (
		<>
			<Widget>
				<WidgetTitulo>Novos Membros</WidgetTitulo>
				<WidgetLista>
					<WidgetListaItem>
						<WidgetUsuarioImagem
							src={
								"https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/49676402_450555642141262_6113748910629453824_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFJ19nqJaiXYuqzvkkeNDuO6IdbpBxZqZDoh1ukHFmpkDYUZ4bGJ_iLeZC49YSEXQO7VV9Op8fk37zEoQjFCPO7&_nc_ohc=4EBbbWReBdsAX-zZWyJ&tn=hKg814HhEQUWh54y&_nc_ht=scontent-gig2-1.xx&oh=76e2580bd570b72510ca3ecfe9f32e9b&oe=61953EE6"
							}
						/>

						<WidgetUsuario>
							<WidgetUsuarioNome>Ramon Rodrigues</WidgetUsuarioNome>

							<WidgetUsuarioCargo>Desenvolvedor Web</WidgetUsuarioCargo>
						</WidgetUsuario>

						<WidgetBotao>
							<VisibilityIcon className="widgetPequenoIcone" /> Exibir
						</WidgetBotao>
					</WidgetListaItem>

					<WidgetListaItem>
						<WidgetUsuarioImagem
							src={
								"https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/49676402_450555642141262_6113748910629453824_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFJ19nqJaiXYuqzvkkeNDuO6IdbpBxZqZDoh1ukHFmpkDYUZ4bGJ_iLeZC49YSEXQO7VV9Op8fk37zEoQjFCPO7&_nc_ohc=4EBbbWReBdsAX-zZWyJ&tn=hKg814HhEQUWh54y&_nc_ht=scontent-gig2-1.xx&oh=76e2580bd570b72510ca3ecfe9f32e9b&oe=61953EE6"
							}
						/>

						<WidgetUsuario>
							<WidgetUsuarioNome>Ramon Rodrigues</WidgetUsuarioNome>

							<WidgetUsuarioCargo>Desenvolvedor Web</WidgetUsuarioCargo>
						</WidgetUsuario>
						<WidgetBotao>
							<VisibilityIcon className="widgetPequenoIcone" /> Exibir
						</WidgetBotao>
					</WidgetListaItem>

					<WidgetListaItem>
						<WidgetUsuarioImagem
							src={
								"https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/49676402_450555642141262_6113748910629453824_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFJ19nqJaiXYuqzvkkeNDuO6IdbpBxZqZDoh1ukHFmpkDYUZ4bGJ_iLeZC49YSEXQO7VV9Op8fk37zEoQjFCPO7&_nc_ohc=4EBbbWReBdsAX-zZWyJ&tn=hKg814HhEQUWh54y&_nc_ht=scontent-gig2-1.xx&oh=76e2580bd570b72510ca3ecfe9f32e9b&oe=61953EE6"
							}
						/>

						<WidgetUsuario>
							<WidgetUsuarioNome>Ramon Rodrigues</WidgetUsuarioNome>

							<WidgetUsuarioCargo>Desenvolvedor Web</WidgetUsuarioCargo>
						</WidgetUsuario>
						<WidgetBotao>
							<VisibilityIcon className="widgetPequenoIcone" /> Exibir
						</WidgetBotao>
					</WidgetListaItem>
				</WidgetLista>
			</Widget>
		</>
	);
};

export default WidgetPequeno;
