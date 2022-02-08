import styles from "../styles/Guides.module.css";
import { useEffect } from "react";

const Guides = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("");
      const data = await res.json();
    };
    fetchData();
  }, []);
  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div>
  );
};

export default Guides;
