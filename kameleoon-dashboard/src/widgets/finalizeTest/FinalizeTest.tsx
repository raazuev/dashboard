import { useParams } from "react-router-dom";
import { useFetchTests } from "../../entities/model/useFetchTests";
import { Spinner } from "../../shared/ui/spinner/Spinner";
import { Button } from "../../shared/ui/button/Button";
import styles from "./FinalizeTest.module.scss";

export const FinalizeTest = () => {
  const { testId } = useParams();
  const { tests, loading, error } = useFetchTests();

  if (loading) return <Spinner />;
  if (error) return <p>Ошибка: {error}</p>;

  const test = tests.find((test) => test.id === parseInt(testId || "", 10));

  if (!test) return <p>Test not found</p>;

  return (
    <div className={styles.finalize}>
      <section className={styles.finalize__title}>
        <h2>Finalize</h2>
        <p>Spring promotion</p>
      </section>
      <div>
        <p>{test.name}</p>
      </div>
      <section className={styles.finalize__btn}>
        <Button onClick={() => window.history.back()}>Назад</Button>
      </section>
    </div>
  );
};
