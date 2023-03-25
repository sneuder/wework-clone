import MainWrapper from "@/layouts/mainWrapper";

import Heroe from "@/sections/index/heroe";
import Solutions from "@/sections/index/solutions";
import SocialProof from "@/sections/index/socialProof";
import CTA from "@/sections/index/CTA";
import Form from "@/sections/index/form";
import Network from "@/sections/index/network";
import Trends from "@/sections/index/trends";
import Footer from "@/layouts/footer";

import linksFooterInfo from "@/data/linksFooter.json";
import socialProofInfo from "@/data/socialProof.json";
import solutionsInfo from "@/data/solutions.json";
import trendsInfo from "@/data/trends.json";
import contactInfo from "@/data/contact.json";

import Contact from "@/models/Contact";
import LinksFooter from "@/models/LinksFooter";
import SocialProofInfo from "@/models/SocialProof";
import TrendsInfo from "@/models/Trends";
import SolutionsInfo from "@/models/Solutions";

interface PropsHome {
  contact: Contact;
  footerInfo: LinksFooter;
  socialProof: SocialProofInfo;
  trends: TrendsInfo;
  solutions: SolutionsInfo;
}

export default function Home({
  socialProof,
  solutions,
  trends,
  contact,
  footerInfo,
}: PropsHome) {
  return (
    <>
      <MainWrapper>
        <Heroe />
        <Solutions solutionsInfo={solutions} />
        <CTA />
        <Form contactInfo={contact} />
        <Network />
        <SocialProof socialInfo={socialProof} />
        <Trends trendsInfo={trends} />
        <Footer footerInfo={footerInfo} />
      </MainWrapper>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      footerInfo: linksFooterInfo,
      socialProof: socialProofInfo,
      solutions: solutionsInfo,
      trends: trendsInfo,
      contact: contactInfo,
    },
  };
}
