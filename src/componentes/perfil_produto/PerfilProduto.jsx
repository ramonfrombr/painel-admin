import React from "react";

import { Link } from "react-router-dom";

import {
	Container,
	TituloContainer,
	BotaoAdicionar,
	ProdutoContainer,
	VendasContainer,
	InfoContainer,
	InfoCabecalho,
	InfoConteudo,
	InfoItem,
	ImagemProduto,
	FormularioContainer,
	FormularioEdicao,
	LadoEsquerdo,
	LadoDireito,
	UploadContainer,
	ImagemUpload,
	BotaoAtualizar,
} from "./PerfilProdutoElementos";

import PublishIcon from "@material-ui/icons/Publish";

import Grafico from "../../componentes/grafico/Grafico";

import { vendas_produtos } from "../../Dados";

const Produto = () => {
	return (
		<Container>
			<TituloContainer>
				<h1>Produto</h1>
				<Link to="/novo_produto">
					<BotaoAdicionar>Criar</BotaoAdicionar>
				</Link>
			</TituloContainer>

			<ProdutoContainer>
				<VendasContainer>
					<Grafico
						dados={vendas_produtos}
						dadosKey="vendas"
						titule="Performance de Vendas"
					/>
				</VendasContainer>

				<InfoContainer>
					<InfoCabecalho>
						<ImagemProduto src="https://a-static.mlcdn.com.br/1500x1500/iphone-11-apple-128gb-preto-61-12mp-ios/magazineluiza/155611100/1cd49b14dc8d5d36c597d5d964fc4c73.jpg" />
						Apple iPhone
					</InfoCabecalho>

					<InfoConteudo>
						<InfoItem>
							id: <b>123</b>
						</InfoItem>
						<InfoItem>
							vendas: <b>5123</b>
						</InfoItem>
						<InfoItem>
							ativo: <b>sim</b>
						</InfoItem>
						<InfoItem>
							em estoque: <b>não</b>
						</InfoItem>
					</InfoConteudo>
				</InfoContainer>
			</ProdutoContainer>

			<FormularioContainer>
				<FormularioEdicao>
					<LadoEsquerdo>
						<label>Nome do Produto</label>
						<input type="text" placeholder="Apple iPhone" />
						<label>Em Estoque</label>
						<select name="emEstoque" id="emEstoque">
							<option value="sim">Sim</option>
							<option value="nao">Não</option>
						</select>
						<label>Ativo</label>
						<select name="ativo" id="ativo">
							<option value="sim">Sim</option>
							<option value="nao">Não</option>
						</select>
					</LadoEsquerdo>

					<LadoDireito>
						<UploadContainer>
							<ImagemUpload
								src="https://a-static.mlcdn.com.br/1500x1500/iphone-11-apple-128gb-preto-61-12mp-ios/magazineluiza/155611100/1cd49b14dc8d5d36c597d5d964fc4c73.jpg"
								alt=""
							/>
							<label style={{ cursor: "pointer" }} htmlFor="imagem">
								<PublishIcon />
							</label>
							<input type="file" id="imagem" style={{ display: "none" }} />
						</UploadContainer>
						<BotaoAtualizar>Atualizar</BotaoAtualizar>
					</LadoDireito>
				</FormularioEdicao>
			</FormularioContainer>
		</Container>
	);
};

export default Produto;
