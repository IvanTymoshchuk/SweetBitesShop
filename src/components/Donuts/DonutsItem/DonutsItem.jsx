import { SubTitles } from 'components/Title/SubTitle/SubTitle';
import { Img, Items, Span, Wraper, List } from './DonutsItem.styled';

export const DonutsItem = ({ title, imgUrl, price }) => {
  return (
    <List>
      <Items>
        <Wraper>
          <Img src={imgUrl} alt="donuts" />
        </Wraper>
        <SubTitles text={title} />
        <Span>{price}</Span>
      </Items>
    </List>
  );
};
