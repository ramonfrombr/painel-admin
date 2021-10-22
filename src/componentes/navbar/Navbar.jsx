import React from "react";

import {
	NavbarContainer,
	NavbarWrap,
	NavbarDireita,
	NavbarEsquerda,
	NavbarIcones,
	NavbarIconeContainer,
	IconeNumero,
	NavbarAvatar,
} from "./NavbarElementos";

import { NotificationsNone } from "@material-ui/icons";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";

import Logo from "../../logo1.png";

const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarWrap>
				<NavbarEsquerda style={{ display: "flex" }}>
					<img
						style={{ height: "28px", width: "28px", marginRight: "10px" }}
						src={Logo}
						alt=""
					/>
					<div
						style={{
							fontFamily: "Abril Fatface",
							color: "#ffdd00",
						}}
					>
						IMPERA
					</div>
					<div
						style={{
							fontFamily: "Great Vibes",
							marginTop: "4px",
							marginLeft: "4px",
							color: "#ffdd00",
						}}
					>
						trading
					</div>
				</NavbarEsquerda>
				<NavbarDireita>
					<NavbarIcones>
						<NavbarIconeContainer>
							<NotificationsNone />
							<IconeNumero>2</IconeNumero>
						</NavbarIconeContainer>

						<NavbarIconeContainer>
							<LanguageIcon />
							<IconeNumero>2</IconeNumero>
						</NavbarIconeContainer>

						<NavbarIconeContainer>
							<SettingsIcon />
							<IconeNumero>2</IconeNumero>
						</NavbarIconeContainer>
					</NavbarIcones>
					<NavbarAvatar
						src={
							"https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-1/c0.46.200.200a/p200x200/160918778_254759289643321_8397196081861049303_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGFlms1kWbMF7aRh7rC68DYTTIXmvhADepNMhea-EAN6vPWoYD7erqAnOKTAZElSqFRJCQcpLtYKF6Yi4ctmplR&_nc_ohc=FpDdAK26AbwAX-ablzX&_nc_oc=AQlvY7yps_Vj5__nvNEeuYpYfo2Ui0vrPL7MUdauu9vYYdPkIBPHDNsLaTA-Qdlf1xLb1iX25FAkUYDmnfGaNY8B&_nc_ht=scontent-gig2-1.xx&oh=8f0ffdf82cb218c0bd836caf58ba6ba6&oe=6196A324"
						}
					/>
				</NavbarDireita>
			</NavbarWrap>
		</NavbarContainer>
	);
};

export default Navbar;
