import Carousel from "react-bootstrap/Carousel";
import './index.css'
const Slider=()=>{
return (
    <div >

 
    <Carousel interval={1500}>
<Carousel.Item>
  <img
    className="d-block w-100" 
    src={"https:tourismhimachal.net.in/images/car-banner.jpg"}
    alt="First slide"
  />
  <Carousel.Caption>
  <h5 style={{color:'white'}}>To eat is a necessity, but to eat intelligently is an art</h5>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={"https://image.shutterstock.com/image-vector/sale-car-rental-concept-vector-260nw-1387577387.jpg"}
    alt="Second slide"
  />

  <Carousel.Caption>
  <h5 style={{color:'white'}}>Ask not what you can do for your country. Ask what’s for lunch</h5>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img  
    className="d-block w-100"
    src={"https://image.shutterstock.com/image-vector/sale-car-rental-concept-vector-260nw-1387577387.jpg"}
    alt="Third slide"
  />

  <Carousel.Caption>
  <h5 style={{color:'white'} }>A recipe has no soul. You, as the cook, must bring soul to the recipe</h5>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
)
}
export default Slider