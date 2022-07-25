import { Link } from 'react-router-dom'

export default function ProductSortedCard(props){
    return (
      <div className="itemListContainer container ">
        <div className="row">
          {props.products.map((product, idx) => {
            return (
              <div
                className="card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 "
                key={idx}
              >
                <img
                  src={product.image}
                  alt="product"
                  className="card-img-top"
                />
                <div className="card--text card-body">
                  <h5 className="card-title text-center">{product.title}</h5>
                  <p className="card-text">
                    {product.description.substring(0, 50)}...
                  </p>
                  <p>${product.price}</p>
                  <Link
                    to={`/item/:id${product.id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}