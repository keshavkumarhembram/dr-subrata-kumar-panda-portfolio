import projects from './../../data/sponsoredProjects.json'
import theses from './../../data/projects.json'
import data from './../../data/completedProjects.json'

import styles from './ProjectsList.module.css'

const SponsoredProjectsList = () => {
    return (
      <div className={styles.container}>
        <h2>Sponsored Projects</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Title of the Project</th>
              <th>Cost in Lakh</th>
              <th>Agency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project["Sl. No"]}</td>
                <td>{project["Title of the Project"]}</td>
                <td>{project["Cost in Lakh"]}</td>
                <td>{project["Agency"]}</td>
                <td>{project["Status"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>List of Theses</h2>
        <table className={styles.table}>
      <thead>
        <tr>
          <th>Name of the Student</th>
          <th>Title of the Thesis</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {theses.map((item, index) => (
          <tr key={index}>
            <td>{item.Name_of_the_Student}</td>
            <td>{item.Title_of_the_Thesis}</td>
            <td>{item.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>List of Projects</h2>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Qualification</th>
          <th>Thesis</th>
          <th>Completion Status</th>
          <th>Completion Year</th>
          <th>Supervision</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.Qualification}</td>
            <td>{item.Thesis}</td>
            <td>{item.Completion_Status}</td>
            <td>{item.Completion_Year}</td>
            <td>{item.Supervision ? item.Supervision : '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    );
  };
  
  export default SponsoredProjectsList;