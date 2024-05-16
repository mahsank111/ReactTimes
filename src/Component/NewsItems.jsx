import image from "../assets/image.avif";
const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light border border-success mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "328px" }}
        className="card-img-top border border-light"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Description not available. Please read the full article for more information."}
        </p>
        <a href={url} className="btn btn-success">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;

// this is a news item card module
