import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navigation/Navbar";

import SponsoredProjectsList from "../components/ProjectList/SponsoredProjectsList";

const Projects = () => {
    return(
        <div>
            <header>
            <Navbar />
            </header>
            <SponsoredProjectsList />
            <Footer />
        </div>
    )
}

export default Projects