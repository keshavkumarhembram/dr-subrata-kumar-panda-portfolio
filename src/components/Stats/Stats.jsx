import stats from './../../data/stats.json';
import Counter from './Counter';

import styles from './Stats.module.css';

const Stats = () => {
    console.log();
  return (
    <div className={styles.container}>
        <h2>Stats</h2>
        <div  className={styles.stats}>
      <div className={styles.left}>
        <Counter name="Publications" count={stats.publications} />
        <Counter name="Sponsored Projects" count={stats.sponsored_projects} />
        <Counter name="Doctoral Students" count={stats.doctoral_students} />
        <Counter name="Continuing Education" count={stats.continuing_education} />
      </div>
      <div>
      <table>
  <thead>
    <tr>
      <th>YEAR</th>
      <th>INDIAN RANK</th>
      <th>WORLD RANK</th>
    </tr>
  </thead>
  <tbody>
    {stats.ranking.map(row => {
        return(<tr key={row[0]}>
        <td>{row[0]}</td>
        <td>{row[1]}</td>
        <td>{row[2]}</td>
      </tr>);
    })}
  </tbody>
</table>
      </div>
      </div>
    </div>
  );
};

export default Stats;
