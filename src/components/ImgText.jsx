const ImgText = ({ data }) => {
    return (
      <div className="card container mb-3" style={{width: '80%'}}>
        <img src={data.hdurl} className="card-img-top mt-3" alt={data.title} />
        <div className="card-body">
          <h5 className="card-title">{ data.title }</h5>
          <p className="card-text">{ data.explanation }</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> { data.copyright } </li>
          </ul>
      </div>
    )
  }
  
  /*
  <article className='card'>
          <h1>
          { data.explanation }
           { typeof data === 'number' && data >= 400 ? 'error' : data}
          </h1>
      </article>
  */

  /*
  <div className="card container" style={{width: '80%'}}>
  <img src={data.hdurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ data.title }</h5>
    <p className="card-text">{ data.explanation }</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> { data.copyright } </li>
  </ul>
</div>
  */

  export default ImgText