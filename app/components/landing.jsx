import React from 'react'
import Header from './header'
import Overview from './overview'
import ClinicsBenefits from './clinicsBenefits'
import PatientBenefits from './patientBenefits'
import GetApp from './getapp'
import AboutUs from './aboutUs'
import Faq from './faq'
import Footer from './footer'
import Work from './work'

const Landing = () => {
  return (
  <>
  <Header />
  <Overview />
  <ClinicsBenefits />
  <PatientBenefits />
  <Work />
  <GetApp />
  <AboutUs />
  <Faq />
  <Footer />
  </>
  )
}

export default Landing