import { useParams } from "react-router-dom";
import { useFetchTests } from "../../entities/model/useFetchTests";
import { Spinner } from "../../shared/ui/spinner/Spinner";
import { Button } from "../../shared/ui/button/Button";
import styles from "./ResultsTest.module.scss";

export const ResultsTest = () => {
  const { testId } = useParams();
  const { tests, loading, error } = useFetchTests();

  if (loading) return <Spinner />;
  if (error) return <p>Ошибка: {error}</p>;

  const test = tests.find((test) => test.id === parseInt(testId || "", 10));

  if (!test) return <p>Test not found</p>;

  return (
    <div className={styles.results}>
      <section className={styles.results__title}>
        <h2>Results</h2>
        <p>Order basket redesing</p>
      </section>
      <div>
        <p>{test.name}</p>
      </div>
      <section className={styles.results__btn}>
        <Button onClick={() => window.history.back()}>Назад</Button>
      </section>
    </div>
  );
};
