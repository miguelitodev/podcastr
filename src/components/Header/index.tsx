import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-Br";

import styles from "./styles.module.scss";

export default function Header() {
	const currentDate = format(new Date(), "EEEE, d MMMM", {
		locale: ptBR,
	});

	return (
		<header className={styles.headerContainer}>
			<img src="/logo.svg" alt="logo podcastr" />
			<p>O melhor para você ouvir sempre</p>
			<span>{currentDate}</span>
		</header>
	);
}
