import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import styles from "./NotFound.module.scss";

interface NotFoundProps {
  message?: string;
}

export const NotFound = ({
  message = "Страница не найдена",
}: NotFoundProps) => {
  const mainNavigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <div className={styles.animInner}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
      <div>
        <h2 className={styles.h2}>{message}</h2>
      </div>
      <div>
        <Button onClick={() => mainNavigate(-1)}>Назад</Button>
      </div>
    </div>
  );
};
