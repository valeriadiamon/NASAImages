const ImgText = ({ data }) => {
  //console.log(typeof data)
  const datos = JSON.parse(data)
  console.log(typeof datos)
  //console.log('se imprime la expliacion de la data',datos.explanation)
    return (
      <div className="card container" style={{width: '80%'}}>
  <img src={datos.hdurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ datos.title }</h5>
    <p className="card-text">{ datos.explanation }</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> { datos.copyright } </li>
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