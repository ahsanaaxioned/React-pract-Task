import './Style.css';

const MovieList = (props) => {
  return (
    <>

      <li className="movie-item">
        <figure>
          <img src={props.imageSrc} alt={props.title} />
        </figure>
        <div className="content">
          <h2 className="sub-heading">{props.title}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quibusdam nisi fuga corrupti illo similique, iure commodi quia impedit odit, recusandae adipisci at! Dolorum doloribus laudantium modi dolores eveniet necessitatibus quibusdam ad voluptas eum incidunt?</p>
          <a href={props.link} className="btn" target="_blank" rel="noopener noreferrer" title='Watch Now'>Watch Now</a>
        </div>
      </li>
    </>
  );
}

export default MovieList;
