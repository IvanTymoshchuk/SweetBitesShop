import sprite from "../../img/symbol-defs.svg";
import { Wraper, List, Item, Span, SpanSec } from "./Advantages.styled";
import { Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";

export const Advantages = () => {
  return (
    <Wraper>
      <List>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
          }}
          modules={[Autoplay]}
        >
          {icons.map((icon, index) => (
            <Item key={index}>
              <svg width="38" height="38">
                <use href={sprite + icon}></use>
              </svg>
              <Span>
                {labels[index]} <SpanSec>{subLabels[index]}</SpanSec>
              </Span>
            </Item>
          ))}
        </Swiper>
      </List>
    </Wraper>
  );
};

const icons = ["#icon-banana", "#icon-gluten", "#icon-vegan", "#icon-sugar"];
const labels = ["Exotic", "Sugar", "Gluten", "Vegan"];
const subLabels = ["fruits", "free", "free", "fruits"];

export default Advantages;
