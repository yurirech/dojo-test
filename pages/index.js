import Head from "next/head";
import styles from "../styles/home.module.scss";
import uStyles from "../styles/utils.module.scss";

import {
	faShieldAlt,
	faBell,
	faChevronDown,
	faCog,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Card from "../components/card";

// Get the Date of the Event and compares to today's date. If the difference is bigger than 0,
// it returns an object with the math for days, hours, minutes and seconds
const calculateTime = () => {
	const countdownDate = new Date("Jan 27, 2021 15:00:00").getTime();
	const now = new Date().getTime();

	const difference = countdownDate - now;
	let timeLeft = {};

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}

	return timeLeft;
};

export default function Home() {
	const [toggleClick, setToggleClick] = useState(false);
	const [showFullResults, setShowFullResults] = useState(false);
	const [timeLeft, setTimeLeft] = useState(calculateTime());

	// seEffect watched the mount and unmount of the component
	// Inside it I update the TimeLeft every 1000 miliseconds with
	// the setInterval function and  use clearTimeout function to avoid infinite loop
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTime());
		}, 1000);
		return () => clearTimeout(timer);
	}, [timeLeft]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<menu>
					<div className={styles.leftBlock}>
						<div className={styles.brandLogo}></div>
						<span>Home</span>
						<span>
							<a>Statistiche</a>
						</span>
						<span>
							<a>11 in campo</a>
						</span>
						<span>
							<a>Torneo a Giorni</a>
						</span>
						<span>
							<a>Crea Lega</a>
						</span>
					</div>

					<div className={styles.rightBlock}>
						<FontAwesomeIcon icon={faShieldAlt} className={styles.smallIcon} />
						<div className={styles.number}>
							<label>1</label>
							<FontAwesomeIcon
								icon={faChevronDown}
								className={styles.xSmallIcon}
							/>
						</div>
						<FontAwesomeIcon icon={faBell} className={styles.smallIcon} />
						<section
							className={styles.userMenu}
							onClick={() => setToggleClick(() => !toggleClick)}
						>
							<p>
								<strong>NOME UTENTE</strong>
							</p>
							<FontAwesomeIcon
								icon={faChevronDown}
								className={styles.xSmallIcon}
							/>
							{toggleClick && (
								<section className={styles.dropdownMenu}>
									<a>Visualizza Profilo</a>
									<a>Logout </a>
								</section>
							)}
						</section>
					</div>
				</menu>
			</header>

			<section className={styles.hero}>
				<div className={styles.overlay}></div>

				<div className={styles.bottomBlock}>
					<div className={styles.logo}>
						<FontAwesomeIcon icon={faShieldAlt} className={styles.bigIcon} />
					</div>
					<h1>11 IN CAMPO</h1>

					<div className={styles.bottomPanel}>
						<div className={styles.doubts}>
							<h4>
								Dubbi su <br /> chi schierare?
							</h4>
						</div>
						<div className={styles.formation}>
							<label>Probabili Formazioni</label>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.breadcrumbs}>
				<small>Home</small>
				<small> &gt; 11 in campo</small>
			</section>

			<main className={styles.main}>
				<div className={styles.gridContainer}>
					<section className={styles.leftColumn}>
						<div className={styles.header}>
							<div className={uStyles.logo}>
								<FontAwesomeIcon icon={faShieldAlt} />
							</div>
							<h5>Nome squadra</h5>
							<div className={styles.settings}>
								<FontAwesomeIcon icon={faCog} className={styles.smallIcon} />
							</div>
						</div>

						<div className={styles.body}>
							<span>
								Crediti residui
								<label>
									<strong>25</strong>
								</label>
							</span>
							<span>
								Punti
								<label>
									<strong>2026</strong>
								</label>
							</span>
							<span>
								Posizione
								<label>
									<strong>9</strong>
								</label>
							</span>
						</div>

						<div className={styles.buttons}>
							<button className={styles.selected}>
								BACHECA
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
							<button>
								CLASSIFICA
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
							<button>
								CALENDARIO
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
							<button>
								SCHIERA FORMAZIONE
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
							<button>
								WISHLIST
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</section>
					<section className={styles.rightColumn}>
						<div className={styles.card1}>
							<Card title="Vincitore Giornata">
								<div className={styles.winners}>
									<div className={styles.name}>
										<div className={uStyles.logo}>
											<FontAwesomeIcon icon={faShieldAlt} />
										</div>
										<small>Nome squadra</small>
									</div>
									<div className={styles.points}>
										<p>Ha totalizzato</p>
										<h1>105</h1>
										<p>punti</p>
									</div>
								</div>
							</Card>
						</div>
						<div className={styles.card2}>
							<Card title="squadre a premi">
								<div className={styles.teams}>
									<div className={styles.greenPanel}>
										<small>PRIMO</small>
										<small>SECONDO</small>
										<small>TERZO</small>
									</div>
									<div className={styles.teamNames}>
										<div className={styles.name}>
											<div className={uStyles.logo}>
												<FontAwesomeIcon icon={faShieldAlt} />
											</div>
											<small>Nome squadra</small>
										</div>
										<div className={styles.name}>
											<div className={uStyles.logo}>
												<FontAwesomeIcon icon={faShieldAlt} />
											</div>
											<small>Nome squadra</small>
										</div>
										<div className={styles.name}>
											<div className={uStyles.logo}>
												<FontAwesomeIcon icon={faShieldAlt} />
											</div>
											<small>Nome squadra</small>
										</div>
									</div>
								</div>
							</Card>
						</div>
						<div className={styles.card3}>
							<Card title="ultima giornata">
								<div className={styles.last}>
									<p>Ha totalizzato</p>
									<h1>88.5</h1>
									<p>punti</p>
								</div>
							</Card>
						</div>
						<div className={styles.card4}>
							<Card>
								<div className={styles.countdown}>
									<div className={styles.title}>
										<h4>PER INSERIRE LA FOMAZIONE MANCANO</h4>
									</div>
									<div className={styles.timer}>
										<span>
											{timeLeft.days < 10 && 0}
											{timeLeft.days} <small>GIORNI</small>
										</span>
										<span>:</span>
										<span>
											{timeLeft.hours < 10 && 0}
											{timeLeft.hours} <small>ORE</small>
										</span>
										<span>:</span>
										<span>
											{timeLeft.minutes < 10 && 0}
											{timeLeft.minutes} <small>MINUTI</small>
										</span>
										<span>:</span>
										<span>
											{timeLeft.seconds < 10 && 0}
											{timeLeft.seconds} <small>SECONDI</small>
										</span>
									</div>
								</div>
							</Card>
							<button>SCHIERA FOMAZIONE</button>
						</div>
						<div className={styles.card5}>
							<div className={styles.topTeams}>
								<Card title="classifica" applyHeader>
									<div className={styles.classifica}>
										<div className={styles.header}>
											<small>POS</small>
											<small>SQD</small>
											<small>PNT</small>
										</div>
										<div className={styles.classificaItem}>
											<span>5</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>6</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>7</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>8</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>9</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>10</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>11</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>12</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>13</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>14</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
									</div>
								</Card>
							</div>
						</div>
						<div
							className={`${styles.card6} ${
								showFullResults ? styles.showResults : null
							}`}
						>
							<div className={styles.topTeams}>
								<Card title="classifica" applyHeader>
									<div className={styles.classifica}>
										<div className={styles.header}>
											<small>POS</small>
											<small>SQD</small>
											<small>PNT</small>
										</div>
										<div className={styles.classificaItem}>
											<span>15</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>16</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>17</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>18</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>19</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>20</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>21</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>22</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>23</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
										<div className={styles.classificaItem}>
											<span>24</span>
											<small>Nome squadra</small>
											<small>2026</small>
										</div>
									</div>
								</Card>
							</div>
						</div>
						<div className={styles.button}>
							<button
								onClick={() => setShowFullResults(() => !showFullResults)}
							>
								CLASSIFICA COMPLETA
							</button>
						</div>
					</section>
				</div>
			</main>

			<footer>
				<section className={styles.top}>
					<div className={styles.contact}>
						<h5>CONTATTI</h5>
						<a>info@info.com</a>
						<a>info@info.com</a>
						<FontAwesomeIcon icon={faBell} />
						<FontAwesomeIcon icon={faBell} />

						<h5>LINK UTILI</h5>
						<a>Probabili formazioni</a>
					</div>
					<div className={styles.info}>
						<h5>INFORMAZIONI</h5>
						<a>Chi siamo</a>
						<a>Regolamento</a>
						<a>Informativa sui Cookie</a>
						<a>Informativa sulla Privacy</a>
						<a>Termini e Condizioni</a>
						<a>Sopporto</a>
					</div>
					<div className={styles.statistics}>
						<h5>STATISTICHE</h5>
						<h2>OPTA</h2>

						<h5>WEB DESIGN</h5>
						<h2>Officine06</h2>
					</div>
					<div className={styles.partner}>
						<h5>MEDIA PARTNER</h5>
						<h2>CORRIERE dello SPORT</h2>
						<h2>Tuttosport.com</h2>
					</div>
				</section>
				<section className={styles.bottom}>
					<p>2018 FuntaFootball - Tiutti i diriti riservati</p>
				</section>
			</footer>
		</div>
	);
}
