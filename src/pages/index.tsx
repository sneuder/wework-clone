import MainWrapper from "@/layouts/mainWrapper";
import Navbar from "@/layouts/navbar";

import Heroe from "@/sections/index/heroe";
import Solutions from "@/sections/index/solutions";
import SocialProof from "@/sections/index/socialProof";
import CTA from "@/sections/index/CTA";
import Sizes from "@/sections/index/sizes";
import Form from "@/sections/index/form";
import Network from "@/sections/index/network";
import Trends from "@/sections/index/trends";

import linksNavbarInfo from "@/data/linksNavbar.json";
import linksFooterInfo from "@/data/linksFooter.json";
import socialProofInfo from "@/data/socialProof.json";
import solutionsInfo from "@/data/solutions.json";
import trendsInfo from "@/data/trends.json";
import contactInfo from "@/data/contact.json";

export default function Home({
  navbarInfo,
  socialProof,
  solutions,
  trends,
  contact,
}) {
  return (
    <MainWrapper>
      <Navbar linkInfo={navbarInfo} />
      <Heroe />
      <Solutions solutionsInfo={solutions} />
      <CTA />
      {/* <Sizes /> */}
      <Form contactInfo={contact} />
      <Network />
      <SocialProof socialInfo={socialProof} />
      <Trends trendsInfo={trends} />
    </MainWrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navbarInfo: linksNavbarInfo,
      footerInfo: linksFooterInfo,
      socialProof: socialProofInfo,
      solutions: solutionsInfo,
      trends: trendsInfo,
      contact: contactInfo,
    },
  };
}
