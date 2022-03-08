import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'

const ProductDesc = () => {

    const { myMobileParam } = useParams();
    const navigate = useNavigate();

  return (
    <div>
        <h1> Product Name :  {myMobileParam} </h1>
        <button onClick={() => {
            navigate("./DetailPage")

        }}>Description</button>
    </div>
  )
}

export default ProductDesc