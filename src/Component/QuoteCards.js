import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { Icon } from "@iconify/react";
import { Card } from "react-bootstrap";

export default function QuoteCards() {
  const chevronWidth = 40;
  const [numberOfCards, setNumberOfCards] = useState(3);
  const isSmallScreen = window.matchMedia("(max-width: 576px)").matches;
  const isMediumScreen = window.matchMedia("(max-width: 1024px)").matches;
  const [index, setIndex] = React.useState(0);
  const [showMore, setShowMore] = useState(false);

  const data = [
    {
      title: `“I kept running into issues with my last loan
        servicing platform. Your Land Loans solved all that.
        I'm just so glad I don't have to keep emailing
        support for everything!”`,
      fName: "-Jeff",

      sName: "J",
    },
    {
      title: `“One of the most intimidating things about selling a property with seller-financing was figuring out how to take payments and keep up with the loan balances, late payments, etc. Your Land Loans provided everything I needed to start selling my properties with seller-financing and the interface and process couldn't be easier. It's been an indispensable tool for my land business”`,
      fName: "-Joe Roberts, New Life Lands",
      sName: "JR",
    },

    {
      title: `“YLL is exactly the tool I've been searching for since
      I started my land business back in 2017. It has a ton
      seller financing process. Definitely in a class of its
      of investor-friendly features that really simplify the
      own! And my bookkeeper loves it too!”`,

      fName: "-Bryan McCarthy, The Terrain Project",
      sName: "BM",
    },
    {
      title: `“We are so impressed with YLL! From the beautiful
      interface to the ease of use. We are adding all of our
      note buyers as quickly as we can!”`,

      fName: "-Amy Breazeale, Legacy Land Company",
      sName: "AB",
    },
    {
      title: ` “Your Land Loans is designed by a land investor for
      land investors, and it shows. Setting up new loans is
      quick and the user interface is intuitive and easy to
      use. It as an overall professional appearance which
      represents your business well”`,

      fName: "-Brian Wied, Land on the Horizon",
      sName: "BW",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const isExtraSmallScreen =
        window.matchMedia("(max-width: 992px)").matches;
      const isSmallScreen = window.matchMedia("(max-width: 576px)").matches;
      const isMediumScreen = window.matchMedia("(max-width: 1199px)").matches;
      setNumberOfCards(
        isSmallScreen ? 1 : isExtraSmallScreen ? 2 : isMediumScreen ? 2 : 2
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [index]);

  return (
    <>
      <div
        style={{
          background: "url('./images/mynt.jpg')",
          backgroundColor: "#008e00",
          backgroundSize: "cover",
          color: "#fff",
          textAlign: "center",
          padding: "10vh 0",
          lineHeight: "0.9",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        id="new_insights"
      >
        <div className="new_insights-style">
          <div className="container" style={{ width: "85%" }}>
            <ItemsCarousel
              slidesToScroll={1}
              requestToChangeActive={setIndex}
              activeItemIndex={index}
              numberOfCards={numberOfCards}
              infiniteLoop={true}
              gutter={30}
              leftChevron={
                isSmallScreen ? null : (
                  <div style={{ marginRight: 40 }}>
                    <button
                      type="button"
                      id="news-prev"
                      className=" style_button btn btn-prev btn-icon shadow btn-sm position-absolute rounded-circle"
                      tabindex="0"
                      style={{
                        border: "1px solid white",
                        height: "35px",
                        width: "35px",
                      }}
                      aria-label="Previous slide"
                    >
                      <Icon
                        icon="grommet-icons:previous"
                        fontSize={20}
                        color="white"
                      />
                    </button>
                  </div>
                )
              }
              rightChevron={
                isSmallScreen ? null : (
                  <div style={{ marginLeft: "-35px" }}>
                    <button
                      type="button"
                      id="news-next"
                      className=" btn btn-prev btn-icon bg-transparent shadow btn-sm position-absolute rounded-circle"
                      style={{
                        border: "1px solid white",
                        height: "35px",
                        width: "35px",
                      }}
                      tabindex="0"
                      aria-label="next slide"
                    >
                      <Icon
                        icon="grommet-icons:next"
                        fontSize={20}
                        color="white"
                      />
                    </button>
                  </div>
                )
              }
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {data.map((item, i) => {
                return (
                  <>
                    <div>
                      <Card
                        className=" dialog_box  bottom service-card position-relative  rounded-3  mb-5 mx-2  d-flex shadow"
                        style={{
                          marginTop: "80px",
                          backgroundColor: "white",
                          marginLeft: 20,
                          transition: "0.3s",
                          color: "#000",
                        }}
                      >
                        <div className="d-flex mx-5 justify-content-center pb-3">
                          <div
                            className="d-inline-block bg-white rounded-4 position-absolute top-0 translate-middle-y p-3 card-icon d-flex justify-content-center rounded-circle"
                            style={{ border: "1px solid #8080803b" }}
                          >
                            <Icon
                              icon="codicon:quote"
                              style={{ fontSize: 30, color: "#008e00" }}
                            />
                          </div>
                        </div>
                        <Card.Body
                          className=" p-0 px-1 "
                          style={{ overflowY: "scroll" }}
                        >
                          <Item key={index} title={item.title} />
                        </Card.Body>
                      </Card>

                      <div className="d-flex justify-content-center ">
                        <div
                          className=" rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            height: "70px",
                            width: "70px",
                            backgroundColor: " #fff",
                            color: "#008e00",
                          }}
                        >
                          <h3 className="mb-0">{item.sName}</h3>
                        </div>
                      </div>
                      <h4 className="mt-2 text-center"> {item.fName}</h4>
                    </div>
                  </>
                );
              })}
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

function Item({ title }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-4 mt-0 mt-md-2 mt-lg-4 mt-sm-2">
      <div
        className="text-muted fs-5"
        style={{ fontWeight: 300, lineHeight: 1.5 }}
      >
        {/* {title} */}

        {showMore ? title : `${title.slice(0, 195)}`}
        {title.length > 195 && !showMore && "..."}
        {title.length > 195 && (
          <a
            className="btn"
            onClick={() => setShowMore(!showMore)}
            style={{ textDecoration: "none", color: "green" }}
          >
            {showMore ? "Show less" : "Show more"}
          </a>
        )}
      </div>
    </div>
  );
}
