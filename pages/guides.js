import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";
import styles from "../styles/Guides.module.css";

const Guides = () => {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      const fetchData = async () => {
        try {
          const res = await fetch("/.netlify/functions/guides", {
            headers: {
              Authorization: `Bearer ${user?.token.access_token}`,
            },
          });

          if (!res.ok) {
            throw Error("You must be logged in to view this content");
          }

          const data = await res.json();
          setGuides(data);
          setError(null);
        } catch (err) {
          setError(err.message);
          setGuides(null);
        }
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, authReady]);

  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading ...</div>}
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {guides?.map((guide) => {
        return (
          <div key={guide.title} className={styles.card}>
            <h3>{guide.title}</h3>
            <h4>Written by {guide.author}</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              iusto voluptatem alias vero iure corrupti esse amet aperiam
              delectus, quis facere inventore at magni harum consequatur quaerat
              facilis eum asperiores.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Guides;
