import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  Carrousel =(props)=> {
    const data = props.data

    const handleClick =()=>{
        console.log(props.givenData.originalData.rawData.content)
        console.log(props.givenData.originalData.rawData.title)
        console.log(props.givenData.translatedData[0].isTranslated)
        console.log(props.givenData.translatedData[0].lang)
        console.log(props.givenData.translatedData[0].rawData.title)
        console.log(props.givenData.translatedData[0].rawData.content)

    }
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
          <button onClick ={handleClick}>xxxxxxxxxxxx</button>
          <Slider {...settings} className="slider">
            <table>
              <tr>
                  <th>
                        Translated
                  </th>
                  <td>
                      false
                    {/* {`${props.givenData.translatedData[0].isTranslated}`} */}
                  </td>
              </tr>
              <tr>
                  <th>
                        language
                  </th>
                  <td>
                    {/* {props.givenData.translatedData[0].lang} */}
                  </td>
              </tr>
              <tr>
                  <th>
                    {/* {props.givenData.originalData.rawData.title} */}
                  </th>
                  <td>
                    {/* {props.givenData.originalData.rawData.content} */}
                  </td>
              </tr>
              </table>
            <table>
              <tr>
                  <th>
                    Translated
                  </th>
                  <td>
                  {/* {`${props.givenData.translatedData[0].isTranslated}`} */}
                  </td>
              </tr>
              <tr>
                  <th>
                    language
                  </th>
                  <td>
                  {/* {props.givenData.translatedData[0].lang} */}
                  </td>
              </tr>
              <tr>
                  <th>
                    Title
                  </th>
                  <td>
                    {/* {props.givenData.translatedData[0].rawData.title} */}
                  </td>
              </tr>
              <tr>
                  <th>
                    Content
                  </th>
                  <td>
                    {/* {props.givenData.translatedData[0].rawData.title} */}
                  </td>
              </tr>
              </table>

                </Slider>
                
                </div>
    );
  
}

export default Carrousel



