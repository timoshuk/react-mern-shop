import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header"
import Footer from "./components/footer"

const App = () => {
  return (
    <>

      <Header />
      <main>
        <Container>
          <h1>Welkome to ReactShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
