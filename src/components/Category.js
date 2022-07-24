//Images
 import { Link } from 'react-router-dom'

export default function Category(){
    return(
        <div className="container">
            <div className="row">
                <div className="text-center col-12 col-lg-3 col-md-4 col-sm-6 test">
                    <h2>Test</h2>
                    <Link to={'/category/men'}>To Men</Link>
                </div>

                <div className="col-12 col-lg-3 col-md-4 col-sm-6 test">
                    <h2>Test</h2>
                </div>

                <div className="col-12 col-lg-3 col-md-4 col-sm-6 test">
                    <h2>Test</h2>
                </div>
                <div className="col-12 col-lg-3 col-md-4 col-sm-6 test">
                    <h2>Test</h2>
                </div>  
            </div>
        </div>
    )
}