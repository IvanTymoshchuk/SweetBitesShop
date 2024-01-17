import { Wraper, List, Item, Span, SpanSec } from './Advantages.styled';
import { Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { SvgIcon } from 'components/Svg/Svg';

export const Advantages = () => {
  return (
    <Wraper>
      <List>
        <Swiper
          slidesPerView={1.5}
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
        >
          {icons.map((icon, index) => (
            <Item key={index}>
              <SvgIcon width="38" height="38" iconId={icon} />
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

const icons = ['icon-banana', 'icon-gluten', 'icon-vegan', 'icon-sugar'];
const labels = ['Exotic', 'Sugar', 'Gluten', 'Vegan'];
const subLabels = ['fruits', 'free', 'free', 'fruits'];

export default Advantages;
