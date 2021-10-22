import React from "react";

import {
	Container,
	Formulario,
	Campo,
	InputGenero,
	SelectUsuarioAtivo,
	Botao,
} from "./NovoUsuarioElementos";

const FormularioNovoUsuario = () => {
	return (
		<Container>
			<h1>Novo Usuário</h1>
			<Formulario>
				<Campo>
					<label>Nome de Usuário</label>
					<input type="text" placeholder="ramonramon" />
				</Campo>

				<Campo>
					<label>Nome</label>
					<input type="text" placeholder="ramon" />
				</Campo>

				<Campo>
					<label>Sobrenome</label>
					<input type="text" placeholder="rodrigues" />
				</Campo>

				<Campo>
					<label>E-mail</label>
					<input type="email" placeholder="ramon@gmail.com" />
				</Campo>

				<Campo>
					<label>Senha</label>
					<input type="password" placeholder="senha" />
				</Campo>

				<Campo>
					<label>Telefone</label>
					<input type="email" placeholder="+1 123 456 78" />
				</Campo>

				<Campo>
					<label>Endereço</label>
					<input type="email" placeholder="New York | USA" />
				</Campo>

				<Campo>
					<label>Gênero</label>
					<InputGenero>
						<input
							type="radio"
							name="genero"
							id="masculino"
							value="masculino"
						/>
						<label htmlFor="masculino">Masculino</label>
						<input type="radio" name="genero" id="feminino" value="feminino" />
						<label htmlFor="feminino">Feminino</label>
						<input type="radio" name="genero" id="outro" value="outro" />
						<label htmlFor="outro">Outro</label>
					</InputGenero>
				</Campo>

				<Campo>
					<label>Ativo</label>
					<SelectUsuarioAtivo name="ativo" id="ativo">
						<option value="sim">Sim</option>
						<option value="nao">Não</option>
					</SelectUsuarioAtivo>
				</Campo>

				<Botao>Criar</Botao>
			</Formulario>
		</Container>
	);
};

export default FormularioNovoUsuario;
