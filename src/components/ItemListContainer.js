export default function ItemListContainer(props){
    return(
        <div className="itemListContainer">
            <div className='card'>
                <img src="https://picsum.photos/200/300" alt="product"/>
                <div className="card--text">
                    <h2>{props.greeting}</h2>
                    <p>Info about the product</p>
                    <p>Price</p>
                    <div>
                        <p>Stock: {props.stock}</p>
                        <p> You're taking: {props.counter} </p>
                        <button onClick={props.onAdd}>+</button>
                        <button onClick={props.onSubstract}>-</button>
                    </div>
                </div>
            </div>

        </div>
    )
}