import React, {useState} from 'react'
import {ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
import {Container,Arrow, ImgContainer,Image,InfoContainer, Wrapper, Slide, Title, Desc, Button} from './slider.style'
import imageA from '../../img/imageA.jpg'


const Slider =(props) =>{

      const [slideIndex, setSlideIndex] = useState(0);

      const handleClick = (direction) => {
            if(direction==="left"){
                  setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
            }else{
                  setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0) 
            }
      };

      return (
            <Container>
                  <Arrow direction="left" onClick={()=> handleClick("left")}>
                        <ArrowLeftOutlined/>
                  </Arrow>
                  
                  <Wrapper slideIndex={slideIndex}>
                        <Slide bg="f5fafd">
                              <ImgContainer>
                              <Image src="https://www.shopversona.com/prodimages/100826-default-l.jpg?0.597487633086"/>
                              </ImgContainer>
                              <InfoContainer>
                                    <Title>SUMMER SALE</Title>
                                    <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                                    <Button>SHOP NOW</Button>
                              </InfoContainer>
                        </Slide>
                        <Slide bg="fcf1ed">
                              <ImgContainer>
                              <Image src="https://www.shopversona.com/prodimages/100826-default-l.jpg?0.597487633086"/>
                              </ImgContainer>
                              <InfoContainer>
                                    <Title>WINTER SALE</Title>
                                    <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                                    <Button>SHOP NOW</Button>
                              </InfoContainer>
                        </Slide>
                        <Slide bg="fbf0f4">
                              <ImgContainer>
                              <Image src="https://www.shopversona.com/prodimages/100826-default-l.jpg?0.597487633086"/>
                              </ImgContainer>
                              <InfoContainer>
                                    <Title>POPULAR SALE</Title>
                                    <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                                    <Button>SHOP NOW</Button>
                              </InfoContainer>
                        </Slide>
                  </Wrapper>

                  <Arrow direction="right" onClick={()=> handleClick("right")}>
                        <ArrowRightOutlined/>
                  </Arrow>
            </Container>
      )
}

export default Slider;
