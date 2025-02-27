import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/button/Button";
import { useFetchTests } from "../../entities/model/useFetchTests";
import { cleanUrl } from "../../shared/utils/formatUrl";
import { SearchTest } from "../../widgets/searchTest/SearchTest";
import { Status, Type } from "../../entities/model/testTypes";
import { Spinner } from "../../shared/ui/spinner/Spinner";
import styles from "./DashboardTest.module.scss";

export const DashboardTest = ({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}) => {
  const navigate = useNavigate();
  const { tests, loading, error } = useFetchTests();
  const [sortConfig, serSortConfig] = useState<{
    key: keyof (typeof tests)[0];
    direction: "asc" | "desc";
  } | null>(null);

  if (loading) return <Spinner />;
  if (error) return <p>Ошибка: {error}</p>;

  // Функция для сортировки тестов
  const getSortedTests = () => {
    if (!sortConfig) return tests;

    return [...tests].sort((a, b) => {
      const { key, direction } = sortConfig;

      if (key === "status") {
        const statusOrder = Object.values(Status);
        const statusComparison =
          statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
        return direction === "asc" ? statusComparison : -statusComparison;
      }

      const aValue = a[key].toString().toLowerCase();
      const bValue = b[key].toString().toLowerCase();

      return direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  };

  // Обработчик сортировки
  const handleSort = (key: keyof (typeof tests)[0]) => {
    serSortConfig((prev) => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  // Получаем отсортированные тесты
  const sortedTests = getSortedTests();

  const filteredTests = sortedTests.filter((test) =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReset = () => {
    onSearchChange("");
  };

  const handleButtonClick = (testId: number, status: string) => {
    if (status === "DRAFT") {
      navigate(`/finalize/${testId}`);
    } else {
      navigate(`/results/${testId}`);
    }
  };

  return (
    <div className={styles.dashboard_container}>
      <div className={styles.input_search}>
        <SearchTest
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          totalTests={filteredTests.length}
        />
      </div>
      <div className={styles.dashboard_headers}>
        <span
          className={styles.headers_title}
          onClick={() => handleSort("name")}
        >
          NAME
        </span>
        <span
          className={styles.headers_title}
          onClick={() => handleSort("type")}
        >
          TYPE
        </span>
        <span
          className={styles.headers_title}
          onClick={() => handleSort("status")}
        >
          STATUS
        </span>
        <span
          className={styles.headers_title}
          onClick={() => handleSort("url")}
        >
          SITE
        </span>
      </div>

      <div className={styles.dashboard_test}>
        {filteredTests.length === 0 ? (
          <div className={styles.reset}>
            <p>Your search did not match any results.</p>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          filteredTests.map((test) => (
            <div
              key={test.id}
              className={`${styles.test_item} ${
                styles[test.status.toLocaleLowerCase()]
              }`}
            >
              <h2 className={styles.title}>{test.name}</h2>
              <span className={styles.text}>{test.type}</span>
              <p className={`${styles.text_status} ${styles[test.status]}`}>
                {test.status}
              </p>
              <span className={styles.text}>
                <a href={test.url} target="_blank" rel="noopener noreferrer">
                  {cleanUrl(test.url)}
                </a>
              </span>
              <Button
                className={
                  test.status === "DRAFT" ? styles.draftBtn : styles.resultsBtn
                }
                onClick={() => handleButtonClick(test.id, test.status)}
              >
                {test.status === "DRAFT" ? "Finalize" : "Results"}
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
