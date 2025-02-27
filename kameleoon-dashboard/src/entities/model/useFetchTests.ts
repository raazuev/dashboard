import { useEffect, useState } from "react";
import { fetchSites, fetchTests } from "../../app/api/api";
import { Test } from "./testTypes";

type TestWithUrl = Test & { url: string };

export const useFetchTests = () => {
  const [tests, setTests] = useState<TestWithUrl[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [testData, siteData] = await Promise.all([
          fetchTests(),
          fetchSites(),
        ]);

        const mappedTests = testData.map((test) => ({
          ...test,
          url:
            siteData.find((site) => site.id === test.siteId)?.url || "Unknown",
        }));

        setTests(mappedTests);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { tests, loading, error };
};
