import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import ProfileCard from '../components/Profile/ProfileCard'
import ResearchInterests from '../components/ResearchInterests/ResearchInterests'
import Education from '../components/Education/Education'
import SoftwareSkills from '../components/SoftwareSkills/SoftwareSkills'
import Experience from '../components/Experience/Experience'
import AwardsAndHonours from '../components/AwardsAndHonours/AwardsAndHonours'
import Stats from '../components/Stats/Stats'
import Accounts from '../components/Accounts/Accounts'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <header>
        <Navbar />
        </header>
        <ProfileCard />
        <Accounts />
        <Stats />
        <ResearchInterests />
        <Education />
        <SoftwareSkills />
        <Experience />
        <AwardsAndHonours />
        <Footer />
    </div>
  )
}

export default Home