import Filter from "../../components/Shop/Filter";
import ProductItem from "../../components/Shop/ProductItem";
import {
  Button,
  Container,
  FlexFilterItem,
  FlexHeading,
  FlexItemContainer,
  LoadMoreStyledContainer,
  ProductList,
  Section,
} from "./Shop.styled";

import Icon from "./Icon";
import Checkbox from "./Checkbox";

const ShopMainContent = () => {
  return (
    <Section>
      <Container>
        <FlexHeading>
          <h2>Shop</h2>
          <Button>
            Sorted by
            <Icon width="15" height="9" />
          </Button>
        </FlexHeading>
        <FlexItemContainer>
          <FlexFilterItem>
            <Filter title="Categories">
              <ul>
                <li>
                  <Checkbox text="Donuts" />
                </li>
                <li>
                  <Checkbox text="Macaroons" />
                </li>
                <li>
                  <Checkbox text="Cupcakes" />
                </li>
                <li>
                  <Checkbox text="Brownies" />
                </li>
              </ul>
            </Filter>
            <Filter title="Filters">
              <ul>
                <li>
                  <Checkbox text="Banana" />
                </li>
                <li>
                  <Checkbox text="Strawberry" />
                </li>
                <li>
                  <Checkbox text="Cherry" />
                </li>
                <li>
                  <Checkbox text="Chocolate" />
                </li>
              </ul>
            </Filter>
          </FlexFilterItem>
          <LoadMoreStyledContainer>
            <ProductList>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </ProductList>
            <button>Load more</button>
          </LoadMoreStyledContainer>
        </FlexItemContainer>
      </Container>
    </Section>
  );
};

export default ShopMainContent;
