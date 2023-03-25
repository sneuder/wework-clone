import Link from "next/link";
import { Container, socialBranches, socialBranch } from "./elements";

const SocialNetwork = () => {
  return (
    <Container>
      {socialBranches.map((branch) => {
        const Icon = socialBranch(branch);
        return <Icon />;
      })}
    </Container>
  );
};

export default SocialNetwork;
