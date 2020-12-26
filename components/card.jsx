import styles from "./card.module.scss";

const Card = ({ children, title }) => {
	return (
		<div className={styles.card}>
			{title && (
				<header>
					<h5>{title}</h5>
				</header>
			)}
			<main>{children}</main>
		</div>
	);
};

export default Card;
