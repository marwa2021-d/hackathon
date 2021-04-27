import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  Carrousel =(props)=> {
    const mockData = props.data
    let count = 0
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carrousel">
          <Slider {...settings} className="slider">
                { 
                mockData.map((job)=>{
                    return <table>
                    { Object.keys(job).map((key)=>{
                        if(key==="logo"||key==="publisherPic"){
                            return <tr>
                                <th>{key}</th>
                                <td><img src={job[key]}/></td>
                            </tr>   
                        }
                        return <tr>
                                <th>{key}</th>
                                <td>{job[key]}</td>
                              </tr>           
                         })}
                    </table>
                })}

                </Slider>
                
                </div>
    );
  
}

export default Carrousel



