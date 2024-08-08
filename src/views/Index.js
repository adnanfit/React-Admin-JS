import { Container } from "reactstrap";

import Header from "components/Headers/Header.js";

const Index = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid></Container>
    </>
  );
};

export default Index;
