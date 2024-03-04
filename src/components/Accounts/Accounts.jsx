import linksId from "./../../data/researchProfileLinks.json";

import Orcid from "./../../assets/img/socials/orcid.png";
import Scopus from "./../../assets/img/socials/scopus.png";
import ResearchGate from "./../../assets/img/socials/ResearchGate_icon_SVG.svg.png";
import ResearchedId from "./../../assets/img/socials/researcherid.png";
import GoogleSchlor from "./../../assets/img/socials/google_schlor.png";
import Youtube from "./../../assets/img/socials/youtubeicon.png";

import styles from "./../Accounts/Accounts.module.css";

const Accounts = () => {
    return (
      <div className={styles.container}>
        <div className={styles.accounts}>
          <h2>Academic Profile Links</h2>
          <div className={styles.links}>
          <div className={styles['link-container']}>
          <a href={`https://orcid.org/${linksId.ORCID_ID}`} target="_blank">
            <img className={styles["social-image"]} src={Orcid} />
          </a>
          <p>ORCID ID</p>
          </div>
          <div className={styles['link-container']}>
          <a
            href={`https://www.scopus.com/authid/detail.uri?authorId=${linksId.SCOPUS_Author_ID}`}
            target="_blank"
          >
            <img className={styles["social-image"]} src={Scopus} />
          </a>
          <p>SCOPUS ID</p>
            </div>
            <div className={styles['link-container']}>
          <a
            href={linksId.ResearchGate_Profile}
            target="blank"
          >
            <img className={styles["social-image"]} src={ResearchGate} />
          </a>
          <p>RESEARCH GATE</p>
          </div>
          <div className={styles['link-container']}>
          <a
            href={`https://www.webofscience.com/wos/author/record/${linksId.Research_ID}`}
            target="blank"
          >
            <img className={styles["social-image"]} src={ResearchedId} />
          </a>
          <p>RESEARCHER ID</p>
          </div>
          <div className={styles['link-container']}>
          <a
            href={linksId.Google_Scholar_Profile}
            target="blank"
          >
            <img className={styles["social-image"]} src={GoogleSchlor} />
          </a>
          <p>GOOGLE SCHOLOR</p>
          </div>
          <div className={styles['link-container']}>
          <a
            href={linksId.YouTube_Teaching_Channel}
            target="blank"
          >
            <img className={styles["social-image"]} src={Youtube} />
          </a>
          <p>YOUTUBE</p>
          </div>
          </div>
        </div>
        </div>
    )
}

export default Accounts;