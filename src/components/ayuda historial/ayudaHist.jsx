import styles from './IPhone16ProMax8.module.css';


export const IPhone16ProMax8 = () => {
  	return (
    		<div className={styles.iphone16ProMax8}>
      			<div className={styles.ruraap}>Ruraap</div>
      			<div className={styles.comprobarTransferencias}>Comprobar transferencias:</div>
      			<div className={styles.text}>{` `}</div>
      			<div className={styles.iphone16ProMax8Child} />
      			<div className={styles.enSuCelular}>En su celular donde dice historial de movimientos:<br/> Ahí debe aparecer la transferencia con la palabra  Exitosa.<br/> Si aparece así, el dinero fue enviado exitosamente.</div>
      			<div className={styles.iphone16ProMax8Item} />
    		</div>);
};
