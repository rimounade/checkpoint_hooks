import { Card } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import { useState } from "react";
const CardMovie =({el,moovie,setMoovie})=>{
  const [showMore, setShowMore] = useState(false);
  const handleDelete=(a)=>{
    setMoovie(moovie.filter((el,i,t)=> el.id != a))
  }
    return(
        <div>
            <Card style={{ width: '18rem' }}>
        <Card.Img style={{width :"280px" , height:"400px"}} variant="top" src={el.poster}/>
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {/* {el.desc} */}
            {showMore ? el.desc : el.desc.substring(0,70)}
            <button className={showMore?"btnless" : "btnmore"} onClick={()=>setShowMore(!showMore)}>show more</button>
            </Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
          <br/>
          <button variant='danger' onClick={()=>handleDelete(el.id)}>DeleteMoovie</button>
          </Card.Body>
      </Card>
        </div>
    )
}
export default CardMovie