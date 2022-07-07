import styles from "./Cat.css";
import cat from "../assets/images/paw.png";

function Cat(props) {
  return (
    <div
      className={
        styles.catCard + (props.isSelected ? " " + styles.selected : "")
      }
    >
      <img class={styles.catPhoto} src={props.url} alt="img"></img>
      {props.isSelected && <img className={styles.catSelectedIcon} src={cat} />}
      <div className={styles.catName}>{props.name}</div>
      <div className={styles.catText}>
        Замечательный ласковый котик станет украшением вашего дома
      </div>
      <button className={styles.catBtn}>Взять домой</button>
    </div>
  );
}

export default Cat;
