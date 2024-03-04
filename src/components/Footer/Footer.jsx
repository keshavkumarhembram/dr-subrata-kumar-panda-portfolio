import styles from './Footer.module.css'

import collegeLogo from './../../assets/img/content/college-logo.jpeg'

const Footer = () => {

        const links = {
          "SCOPUS_Author_ID": "55589286600",
          "ORCID_ID": "0000-0001-8841-7449",
          "Research_ID": "N-4301-2017",
          "Google_Scholar_Profile": "https://scholar.google.co.in/citations?hl=en&user=1fvrY4UAAAAJ",
          "ResearchGate_Profile": "https://www.researchgate.net/profile/Dr_Subrata_Panda",
          "YouTube_Teaching_Channel": "https://www.youtube.com/channel/UC0XvPm5pbhPv_G_g-HzkqdA"
        };
      
        return (
          <footer className={styles.container}>
            <div className={styles.footer}>
              <div>
                <img className={styles["college-logo"]} src={collegeLogo} alt='college logo' />
                <p><a href='https://www.nitrkl.ac.in/'>  National Institute of Technology Rourkela</a></p>
                <p><a href='https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/pandask'>College Faculty Profile Page</a></p>
              </div>
              <div>
              <h4>Useful Links</h4>
              <ul>
                {Object.entries(links).map(([key, value]) => (
                  <li key={key}>
                    <a href={value} target="_blank" rel="noopener noreferrer">{key.replace(/_/g, ' ')}</a>
                  </li>
                ))}
              </ul>
              </div>
            </div>
            <div className={styles["footer-info"]}>
              <p>&copy; {new Date().getFullYear()} Dr Subrata Kumar Panda. All Rights Reserved.</p>
              <a  className={styles.email} href={`mailto:call2subrat@gmail.com`}>call2subrat@gmail.com</a>
            </div>
          </footer>)
}

export default Footer;