import format from "date-fns/format";

import styles from "./styles.module.scss";

export default function Header() {
	const currentDate = format(new Date(), "EEEE, d MMMM");

	return (
		<header className={styles.headerContainer}>
			<img src="/logo.svg" alt="logo podcastr" />
			<p>O melhor para você ouvir sempre</p>
			<span>{currentDate}</span>
		</header>
	);
}
