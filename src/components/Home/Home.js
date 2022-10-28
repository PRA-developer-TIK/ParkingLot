import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";
import  car from  "../../assets/car.png";
import  sign from  "../../assets/sign.png";

function Home() {
  return (
    <Container> 
    <div className="d-flex align-items-center customHeight   ">
       <Row className='align-items-center m-auto  '>
          {[1, 2, 3, 4].map((item, idx) => (
              
            <Col style={{ borderRight: "1px solid red", margin: "1px" }} className="text-center" key={idx}  >
                  {item%2===0?<img src={car} alt="car" ></img>:<img src={sign} alt="car"></img>

                  }
              
                    <h3  >Slot {idx+1}</h3>	                  
                </Col>
              
             
            ))}
            </Row>
      
      </div>
    
    </Container>
       
      
   
     
    
  );
}

export default Home;