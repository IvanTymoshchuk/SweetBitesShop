import { Img, Items, Title, Span, Wraper, List } from "./DonutsItem.styled";

export const DonutsItem = ({ title, imgUrl, price }) => {
  return (
    <List>
      <Items>
        <Wraper>
          <Img src={imgUrl} alt="donuts" />
        </Wraper>
        <Title>{title}</Title>
        <Span>{price}</Span>
      </Items>
    </List>
  );
};
