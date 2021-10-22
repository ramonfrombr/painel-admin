/* PÁGINAS */
import Inicio from "./paginas/inicio/inicio";
import Usuarios from "./paginas/usuarios/usuarios";
import Usuario from "./paginas/usuario/usuario";
import NovoUsuario from "./paginas/novo_usuario/novo_usuario";
import Produtos from "./paginas/produtos/produtos";
import Produto from "./paginas/produto/produto";
import NovoProduto from "./paginas/novo_produto/novo_produto";

/* COMPONENTES */
import Navbar from "./componentes/navbar/Navbar";
import Menu from "./componentes/menu/Menu";

import {
	BrowserRouter as Router,
	Switch,
	Route as Rota,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div style={{ display: "flex" }} className="container">
					<Menu />
					<Switch>
						<Rota exact path="/">
							<Inicio />
						</Rota>

						<Rota exact path="/usuarios">
							<Usuarios />
						</Rota>

						<Rota path="/usuario/:usuarioId">
							<Usuario />
						</Rota>

						<Rota path="/novo_usuario">
							<NovoUsuario />
						</Rota>

						<Rota path="/produtos">
							<Produtos />
						</Rota>

						<Rota path="/produto/:produtoId">
							<Produto />
						</Rota>

						<Rota path="/novo_produto">
							<NovoProduto />
						</Rota>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
