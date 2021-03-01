import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
function StatusDetail(props) {
  const [status, setStatus] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let fetchD = await fetch(`http://localhost:1902/api/status/${params.id}`);
    let data = await fetchD.json();
    setStatus(data);
  };
  const formatDate = (dateString) => {
    let date = new Date(dateString);
    date = date.toDateString().split(" ");
    return `${date[2]} ${date[1]},${date[3]}`;
  };

  return (
    <div>
      <div className="status">
        <Link
          style={{ mixBlendMode: "difference" }}
          className="status__back-btn"
          to="/"
        >
          <i className="direct fa fa-chevron-left" aria-hidden="true"></i>Back
        </Link>
        {status && (
          <React.Fragment>
            <div
              className="status__bg--img"
              style={{ backgroundImage: `url(${status.imgPath})` }}
            ></div>
            <div className="status__date">{formatDate(status.created)}</div>
            <div className="status__title">{status.title}</div>
            <div className="status__content">
              {status.content &&
                status.content
                  .split("<br/>")
                  .map((p, index) => <p key={index}>{p}</p>)}
            </div>
          </React.Fragment>
        )}
        {!status && (
          <React.Fragment>
            <div
              className="status__bg--img"
              style={{ backgroundImage: `url("")` }}
            ></div>
            <div className="status__date">
              <Skeleton width={200} />
            </div>
            <div className="status__title">
              <Skeleton width={500} />
            </div>
            <div className="status__content">
              <Skeleton count={5} />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default StatusDetail;
