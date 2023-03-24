import { Inter } from "next/font/google";
import MainWrapper from "@/layouts/mainWrapper";
import Navbar from "@/layouts/navbar";

import SocialProof from "@/sections/index/socialProof";

import linksNavbar from "@/data/linksNavbar.json";
import linksFooter from "@/data/linksFooter.json";
import socialProof from "@/data/socialProof.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ navbarInfo }) {
  return (
    <MainWrapper>
      <Navbar linkInfo={navbarInfo} />
      <SocialProof socialInfo={socialProof} />
    </MainWrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navbarInfo: linksNavbar,
      footerInfo: linksFooter,
      socialProof: socialProof,
    },
  };
}
