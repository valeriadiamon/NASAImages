const CardImg = ({ explanation , copyright}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
  <img src="data.hdurl" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">{ explanation }</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> { copyright } </li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
</div>
  )
}

export default CardImg