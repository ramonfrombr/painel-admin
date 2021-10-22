import React from "react";

import { Link } from "react-router-dom";

import {
	Container,
	Cabecalho,
	Titulo,
	BotaoCriar,
	Conteudo,
	Perfil,
	PerfilCabecalho,
	UsuarioImagem,
	Usuario,
	UsuarioNome,
	UsuarioTitulo,
	PerfilInfo,
	InfoTitulo,
	InfoItem,
	Informacao,
	InformacaoConteudo,
	FormularioEdicao,
	FormularioTitulo,
	Formulario,
	LadoEsquerdo,
	LadoDireito,
	Campo,
	ImagemUpload,
	Imagem,
	BotaoAtualizar,
} from "./PerfilUsuarioElementos";

import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

import MailOutlineIcon from "@material-ui/icons/MailOutline";

import LocationOnIcon from "@material-ui/icons/LocationOn";

import PublishIcon from "@material-ui/icons/Publish";

const PerfilUsuario = () => {
	return (
		<Container>
			<Cabecalho>
				<Titulo>Editar Perfil</Titulo>

				<Link to="/novo_usuario">
					<BotaoCriar>Criar</BotaoCriar>
				</Link>
			</Cabecalho>

			<Conteudo>
				<Perfil>
					<PerfilCabecalho>
						<UsuarioImagem src="https://scontent.fbhz1-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH8aX6GGszECz1ppL6ikFQlQyaNjMnA6N9DJo2MycDo3x1nCuLf0P3pyK8HZ0_HVMwXWya5JgwcOfkDzybypqDb&_nc_ohc=G6Bw8Tf6pkUAX9Tbylg&_nc_ht=scontent.fbhz1-1.fna&oh=af0ba39b2c50608a62db7253f90b6ff5&oe=6196E356" />
						<Usuario>
							<UsuarioNome>Mark Zuckerberg</UsuarioNome>
							<UsuarioTitulo>CEO at Facebook</UsuarioTitulo>
						</Usuario>
					</PerfilCabecalho>

					<PerfilInfo>
						<InfoTitulo>Detalhes do Perfil</InfoTitulo>

						<InfoItem>
							<Informacao>
								<PermIdentityIcon style={{ fontSize: "16px" }} />
								<InformacaoConteudo>markmark</InformacaoConteudo>
							</Informacao>
						</InfoItem>

						<InfoItem>
							<Informacao>
								<CalendarTodayIcon style={{ fontSize: "16px" }} />
								<InformacaoConteudo>10.12.1988</InformacaoConteudo>
							</Informacao>
						</InfoItem>

						<InfoItem>
							<Informacao>
								<LocationOnIcon style={{ fontSize: "16px" }} />
								<InformacaoConteudo>San Francisco | USA</InformacaoConteudo>
							</Informacao>
						</InfoItem>

						<InfoTitulo>Contato</InfoTitulo>

						<InfoItem>
							<Informacao>
								<PhoneAndroidIcon style={{ fontSize: "16px" }} />
								<InformacaoConteudo>+ 123 456 789</InformacaoConteudo>
							</Informacao>
						</InfoItem>

						<InfoItem>
							<Informacao>
								<MailOutlineIcon style={{ fontSize: "16px" }} />
								<InformacaoConteudo>markz@facebook.com</InformacaoConteudo>
							</Informacao>
						</InfoItem>
					</PerfilInfo>
				</Perfil>

				<FormularioEdicao>
					<FormularioTitulo>Editar</FormularioTitulo>

					<Formulario>
						<LadoEsquerdo>
							<Campo>
								<label htmlFor="">Nome de Usuário</label>
								<input type="text" placeholder="markz" />
							</Campo>
							<Campo>
								<label htmlFor="">Data de Nascimento</label>
								<input type="text" placeholder="10.12.1988" />
							</Campo>
							<Campo>
								<label htmlFor="">Localização</label>
								<input type="text" placeholder="San Francisco | USA" />
							</Campo>

							<Campo>
								<label htmlFor="">Telefone</label>
								<input type="text" placeholder="+ 123 456 789" />
							</Campo>

							<Campo>
								<label htmlFor="">E-mail</label>
								<input type="email" placeholder="markz@facebook.com" />
							</Campo>
						</LadoEsquerdo>

						<LadoDireito>
							<ImagemUpload>
								<Imagem src="https://scontent.fbhz1-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH8aX6GGszECz1ppL6ikFQlQyaNjMnA6N9DJo2MycDo3x1nCuLf0P3pyK8HZ0_HVMwXWya5JgwcOfkDzybypqDb&_nc_ohc=G6Bw8Tf6pkUAX9Tbylg&_nc_ht=scontent.fbhz1-1.fna&oh=af0ba39b2c50608a62db7253f90b6ff5&oe=6196E356" />

								<label htmlFor="arquivo">
									<PublishIcon />
								</label>

								<input type="file" id="arquivo" style={{ display: "none" }} />
							</ImagemUpload>

							<BotaoAtualizar>Atualizar</BotaoAtualizar>
						</LadoDireito>
					</Formulario>
				</FormularioEdicao>
			</Conteudo>
		</Container>
	);
};

export default PerfilUsuario;
