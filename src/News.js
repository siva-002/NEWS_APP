import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaSadTear } from "react-icons/fa";
const News = () => {
  const { page } = useParams();
  const perPageContent = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setnews] = useState([]);
  const [sorted, setsorted] = useState([]);
  const [error, seterror] = useState(null);
  const [load, setload] = useState(true);
  useEffect(() => {
    axios
      .get(
        // "https://api.thenewsapi.com/v1/news/all?locale=us&language=en&api_token=t8u72XI4okXGCJvTUaivGnc6l9AVD2QmK2Q5RxtZ"
        `https://newsapi.org/v2/top-headlines?country=in&category=${
          page ? page : "technology"
        }&apiKey=f8f576ae883e42218f1cb3d069874d2a`
      )
      .then((res) => {
        // const out=await res.json()
        // setnews(res.data.articles);
        console.log(res.data);
        seterror(null);
      })
      .catch((err) => {
        console.log(err.response.data);
        seterror(err.response.data.message);
      })
      .finally(() => {
        setload(false);
      });
    setCurrentPage(1);
  }, [page]);

  const viewposts = () => {
    const image = news.filter((item) => item.urlToImage !== null);
    const noimage = news.filter((item) => item.urlToImage === null);

    const mergedarr = image.concat(noimage);
    const viewableposts = mergedarr.slice(
      perPageContent * (currentPage - 1),
      currentPage * perPageContent
    );

    setsorted(viewableposts);
    //    console.log(viewableposts)
  };
  useEffect(() => {
    viewposts();
  }, [news]);

  useEffect(() => {
    viewposts();
  }, [currentPage]);

  const handlenextpage = () => {
    setCurrentPage((current) => current + 1);
  };

  const handleprevpage = () => {
    setCurrentPage((current) => current - 1);
  };
  return (
    <>
      {load ? (
        <div className="col-md-6 offset-md-3 text-center mt-5">
          <span className="spinner spinner-border text-primary"></span>
          <h4 className="text-center text-primary ">
            Loading news please wait ...
          </h4>
        </div>
      ) : error ? (
        <div className="col-md-6 offset-md-3">
          <FaSadTear
            size={60}
            style={{ color: "grey" }}
            className="col-md-2  offset-md-5"
          />
          <br />
          <span className="text-danger">
            {error.split(".").map((item, index) => (
              <h6 className="text-center" key={index}>
                {item}
              </h6>
            ))}
          </span>
        </div>
      ) : (
        <>
          <div
            className="col-md-10 offset-md-2 d-flex flex-wrap "
            style={{ height: "70vh", overflow: "hidden" }}
          >
            {sorted.map((item, index) => (
              <div
                className="col-md-3 card m-1"
                key={index}
                style={{
                  background: "rgba(0,0,0,0.1)",
                  maxHeight: item.urlToImage ? "250px" : "150px",
                }}
              >
                <div className="card-body">
                  {item.urlToImage && (
                    <img
                      src={item.urlToImage}
                      alt={`${item.title}`}
                      style={{
                        width: "150px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <h5 className="card-title">
                    {item.title.length > 30
                      ? `${item.title.substring(0, 25)}...`
                      : item.title}
                  </h5>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                    }}
                  >
                    know more
                  </a>
                  <span
                    className="badge text-bg-primary"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                    }}
                  >
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="offset-md-5 mt-4"
            style={{ position: "absolute", bottom: "10px" }}
          >
            <button
              className="btn btn-default m-2"
              onClick={handleprevpage}
              disabled={currentPage === 1 ? true : false}
            >
              <FaArrowLeft />
            </button>
            <button
              className="btn btn-default"
              onClick={handlenextpage}
              disabled={
                currentPage * perPageContent >= news.length ? true : false
              }
            >
              <FaArrowRight />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default News;
