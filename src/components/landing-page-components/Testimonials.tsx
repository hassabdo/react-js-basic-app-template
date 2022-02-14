import React, {useEffect} from "react";
import { Carousel, Avatar, Spin  } from "antd";
import { LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { getHomeReviews } from "../../actions/services-actions/actions";
import ArrowPrev from "../../svg-components/icons/ArrowPrev";
import ArrowNext from "../../svg-components/icons/ArrowNext";
import { RootState } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";


const Testimonials = () => {
  const LoadingOutlinedIcon = <LoadingOutlined style={{ fontSize: 32, color: "#FFFFFF" }} spin />;
  const dispatch = useDispatch();
  const useMountEffect = (fun: any) => useEffect(fun, [])
  const testimonials = useSelector((state: RootState) => state.serivcesReducer.testimonials);
  const isLoadingtestimonials = useSelector((state: RootState) => state.serivcesReducer.isLoadingReviews);
  
  useMountEffect(() => {
    if(testimonials.length == 0){
      dispatch(getHomeReviews());
    }
  })

  return (
    <div className={"testimonials-landing"}>
      <div className="max-width-container testimonials-content">
        <h2 className={"testimonials-title"}>Ils nous ont fait confiance</h2>
        {isLoadingtestimonials ? (
          <div className="spinner-container" style={{marginTop: "5%"}}>
            <Spin indicator={LoadingOutlinedIcon} />
          </div>
        ) : (
          <div className={"testimonials-carousel"}>
            {testimonials.length > 0 ? (
              <Carousel autoplay dots={false} arrows={true} prevArrow={<div className={"navigation-prev"}><ArrowPrev/></div>} nextArrow={<div className={"navigation-next"}><ArrowNext/></div>}>
                {testimonials.map((testimonial: any, i: number) => (
                  <div className={"testimonial-wrapper"} id={'testimonial-' + testimonial.id} key={testimonial.id}>
                    <p className={"testimonial-body"}>{testimonial.content}</p>
                    <div className={"testimonial-author"}>
                        <Avatar
                          icon={<UserOutlined/>}
                          src={testimonial.author_avatar ? process.env.REACT_APP_STORAGE_URL + testimonial.author_avatar : null}
                          size={60}
                          alt="avatar"
                        />
                        <div className={"testimonial-author-info"}>
                          <strong>{window.capitalize(testimonial.author_name || '') + ' ' + window.capitalize(testimonial.author_surname || '')}</strong>
                          <span>{testimonial.author_title || null }</span>
                        </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <em style={{color: "#bfbfbf", textAlign: "center", display: "block"}}>Aucun témoignage</em>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
