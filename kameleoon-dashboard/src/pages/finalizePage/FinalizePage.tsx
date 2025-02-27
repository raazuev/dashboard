import { FinalizeTest } from "../../widgets/finalizeTest/FinalizeTest";
import styles from "./FinalizePage.module.scss";

export const FinalizePage = () => {
  return (
    <div className={styles.page_finalize}>
      <FinalizeTest />
    </div>
  );
};
