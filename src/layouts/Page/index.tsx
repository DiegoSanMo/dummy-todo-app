import { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface PageProps {
  children: ReactNode;
}
const Page = ({ children }: PageProps) => {
  return <Container>{children}</Container>;
};

export default Page;
