import { useState } from "react";
import { DashboardTest } from "../../widgets/dashboardTest/DashboardTest";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.home_page}>
      <DashboardTest searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </div>
  );
};
