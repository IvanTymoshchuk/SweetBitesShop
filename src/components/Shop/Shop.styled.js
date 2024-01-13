import styled from "@emotion/styled";
// import ShopMainContent from "./ShopMainContent";

export const Container = styled.div`
  margin: 0 80px;
`;

export const Section = styled.section`
  padding: 100px 0;
  color: #d75d8e;
  background: rgba(243, 211, 222, 0.1);
`;

export const FlexHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  h2 {
    color: #d44f85e5;
    font-family: Gabarito;
    font-size: 75px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 90px;
    letter-spacing: 0em;
    text-align: left;

    padding-left: 237px;
  }
`;

export const FlexItemContainer = styled.div`
  display: flex;
  column-gap: 40px;
`;

export const FlexFilterItem = styled.div`
  flex: 0 0 197px;
  color: #d75d8e;

  input {
    width: 17px;
    height: 17px;
    margin-right: 6px;
  }

  p {
    display: inline-block;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #d75d8e;
  font-family: Gabarito;
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 0;
  padding-bottom: 0;

  svg {
    display: inline-block;
    fill: #d75d8e;
    margin-left: 7px;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  gap: 38px;
  justify-content: space-between;

  flex-wrap: wrap;

  margin-bottom: 40px;
`;

export const ProductStyledItem = styled.li`
  max-width: 329px;
  flex-basis: calc((100% - 38 * 2) / 3);
  /* max-height: 348px; */

  .imageThumb {
    width: 329px;
    background: rgba(233, 145, 175, 1);
  }

  img {
    width: 100%;
  }

  .productName {
    font-family: Gabarito;
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;

    margin-top: 15px;
    margin-bottom: 2px;
  }

  .productPrice {
    font-family: Gabarito;
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const StyledFilter = styled.div`
  :not(:last-child) {
    margin-bottom: 60px;
  }

  h3 {
    margin-top: 12px;
    margin-bottom: 12px;

    font-family: Gabarito;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;

    svg {
      margin-left: 10px;
    }
  }

  /* ul {
    padding-left: 20px;
    padding-right: 28px;
  } */

  li:not(:last-child) {
    margin-bottom: 15px;
  }

  li {
    label {
      position: relative;
      cursor: pointer;

      p {
        font-family: Gabarito;
        font-size: 24px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;

        padding-left: 22px;
      }

      input {
        position: absolute;
        opacity: 0;

        height: 0;
        width: 0;
      }

      span {
        position: absolute;
        top: -1.5px;
        left: 0;
        height: 15px;
        width: 15px;
        background-color: inherit;
        border: 1px solid;

        ::after {
          content: "";
          position: absolute;
          display: none;

          left: 5px;
          top: -0.5px;
          width: 5px;
          height: 10px;
          border: solid #d75d8e;
          border-width: 0 2px 2px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }

      input:checked ~ span::after {
        display: inline-block;
      }
    }
  }
`;

export const LoadMoreStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    font-family: Gabarito;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;

    padding-left: 0;
    padding-right: 0;

    color: #d75d8e;
    background-color: transparent;
    border: none;

    ::after {
      content: "";
      display: block;
      border: 3px solid #d75d8e;
    }
  }
`;
