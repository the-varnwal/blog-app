import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post(props) {

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${props.id}`}>
          <img src={'http://localhost:4000/'+props.cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${props.id}`}>
        <h2>{props.title}</h2>
        </Link>
        <p className="info">
          <a className="author">{props.authorname}</a>
          <time>{formatISO9075(new Date(props.createdAt))}</time>
        </p>
        <p className="summary">{props.summary}</p>
      </div>
    </div>
  );
}