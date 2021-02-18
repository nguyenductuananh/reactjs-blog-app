import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../scss/status-detail.scss";
function StatusDetail(props) {
  const [status, setStatus] = useState({});
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
        <Link className="status__back-btn" to="/">
          <i class="direct fa fa-chevron-left" aria-hidden="true"></i>Back
        </Link>
        <div
          className="status__bg--img"
          style={{ backgroundImage: `url(${status.imgPath})` }}
        ></div>
        <div className="status__date">{formatDate(status.created)}</div>
        <div className="status__title">{status.title}</div>
        <div className="status__content">
          {status.content ? (
            status.content.split("<br/>").map((p) => <p>{p}</p>)
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StatusDetail;
