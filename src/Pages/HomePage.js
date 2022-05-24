import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const HomePage = () => {
  const [news, setNews] = useState(null);
  const retrieveNews = () => {
    const options = {
      method: "GET",
      url: "https://ec-finance-dashboard.herokuapp.com/news",
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setNews(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const assestData = news?.data.data.mostPopularEntries.assets;
  console.log("assetData: ", assestData);

  useEffect(() => {
    retrieveNews();
  }, []);
  return (
    <>
      <div className="news-card">
        {assestData?.map((asset) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={asset.promoImage.url} />
            <Card.Body>
              <Card.Title>{asset.headline}</Card.Title>
              <Card.Text>{asset.description}</Card.Text>
              <Button variant="primary" href={asset.url} target="_blank">
                Read More
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default HomePage;
