import { useState, useEffect } from "react";
import { Container, Spinner, Card, Button, Row } from "react-bootstrap";
import axios from "axios";
import toast from "react-hot-toast";
import FormFact from "./FormFact";

function DogFacts() {
  const [facts, setFacts] = useState({}); /* FACTS - API */
  const [isLoading, setIsLoading] = useState(true);

  const [allNewFacts, setAllNewFacts] = useState([]); /* NEW FACTS - FORM */

  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    async function fetchFacts() {
      try {
        const response = await axios.get(
          "https://dog-api.kinduff.com/api/facts?number=15"
        );
        setFacts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFacts();
  }, []);

  function handleDeleteAPI(factSelected) {
    const index = facts.facts.indexOf(factSelected);
    facts.facts.splice(index, 1);
    setFacts({ facts: facts.facts });
    toast.success("Dog fact deleted successfully!");
  }

  function handleDelete(factSelected) {
    let filteredFacts = allNewFacts.filter((fact) => {
      return fact.name !== factSelected;
    });
    setAllNewFacts(filteredFacts);
    toast.success("Dog fact deleted successfully!");
  }

  //console.log(facts);
  //console.log(allNewFacts);

  return (
    <Container>
      {/* FORM - ADD NEW DOG FACTS */}
      <FormFact allNewFacts={allNewFacts} setAllNewFacts={setAllNewFacts} />

      {/* API - DOG FACTS */}
      {isLoading === false && (
        <>
          <Row className="m-3 g-4 d-flex justify-content-around ">
            {facts.facts.map((fact) => {
              return (
                <Card
                  style={{ width: "18rem", borderColor: "#a7f5df" }}
                  key={fact}
                  value={fact}
                  onClick={() => setSelectedCard(fact)}
                  className={
                    selectedCard !== fact
                      ? "shadow-sm"
                      : "bg-disabled shadow-sm"
                  }
                >
                  <Card.Body>
                    <Card.Text>{fact}</Card.Text>
                    <Button
                      variant="light"
                      onClick={() => handleDeleteAPI(fact)}
                      size="sm"
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}

            {/* FORM - DOG FACTS */}
            {allNewFacts.map((fact) => {
              return (
                <Card
                  style={{ width: "18rem", borderColor: "#a7f5df" }}
                  key={fact.name}
                  value={fact}
                  onClick={() => setSelectedCard(fact)}
                  className={
                    selectedCard !== fact
                      ? "shadow-sm"
                      : "bg-disabled shadow-sm"
                  }
                >
                  <Card.Body>
                    <Card.Text>{fact.name}</Card.Text>
                    <Button
                      variant="light"
                      onClick={() => handleDelete(fact.name)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </>
      )}

      {isLoading === true && <Spinner animation="border" variant="info" />}
    </Container>
  );
}

export default DogFacts;
