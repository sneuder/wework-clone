import { Inter } from "next/font/google";
import MainWrapper from "@/layouts/mainWrapper";
import Navbar from "@/layouts/navbar";

import Solutions from "@/sections/index/solutions";
import SocialProof from "@/sections/index/socialProof";
import CTA from "@/sections/index/CTA";
import Sizes from "@/sections/index/sizes";
import Form from "@/sections/index/form";

import linksNavbarInfo from "@/data/linksNavbar.json";
import linksFooterInfo from "@/data/linksFooter.json";
import socialProofInfo from "@/data/socialProof.json";
import solutionsInfo from "@/data/solutions.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ navbarInfo, socialProof, solutions }) {
  return (
    <MainWrapper>
      <Navbar linkInfo={navbarInfo} />
      <Solutions solutionsInfo={solutions} />
      <CTA />
      <Sizes />
      <Form />
      <SocialProof socialInfo={socialProof} />
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
    },
  };
}
