import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

export default function Cart(){

    const {cart, subTotal, totalPrice, removeFromCart } = useContext(CartContext);
        
    const [user, setUser] = useState({
        name:"",
        email:""
    });

    function handleSubmit(e){
        e.preventDefault();
        const userName = e.target.userName.value;
        const userEmail = e.target.userEmail.value;
        setUser(prevUser => {
            return(
                {...prevUser, name: userName, email: userEmail}
            )
        });
        let random = Math.random().toString();
        random = random.substring(2, random.length);
        let purchaseId = parseInt(random);
        Swal.fire('Thanks for purchasing!', `Id Number: ${purchaseId}`, 'success');
    };

    return (
      <>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <h2>Total price: $ {totalPrice()}</h2>
          </div>

          <div className="itemListContainer container">
            <div className="row">
              {cart.map((item, idx) => {
                return (
                  <div
                    className="card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                    key={idx}
                  >
                    <img src={item.image} alt="product" />
                    <div className="card--text">
                      <h5>{item.title}</h5>
                      <p>{item.description.substring(0, 50)}</p>
                      <p>${item.price}</p>
                      <p> Quantity: {item.quantity}</p>
                      <p>Subtotal: ${subTotal(item)} </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {cart.length > 0 && (
            <div className="d-flex justify-content-center align-items-center finishPurchase">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      Name
                      <input
                        name="userName"
                        type="text"
                        className="form-control"
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Email address
                      <input
                        name="userEmail"
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                      />
                    </label>
                  </div>
                  <button type="submit" className="btn btn-success ">
                    Purchase
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </>
    );
};