/**importing the 'css' of react  */
import styled from "styled-components";
/**
 * An element describes what you want to see on the screen,
 * we declare the elements and how we want them to appear
 */

export const SearchContainer = styled.section`
  max-width: 950px;
  width: auto;
  margin: 0 auto;
  padding: 2;
  color: #000000; /* color of letters in the whole page */
`;

// app title
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #581845;
`;

// search field
export const SearchField = styled.input`
  display: flex;
  border: solid 1px #000;
  border-radius: 18px;
  max-width: 100vw;
  height: 35px;
  transition-duration: 0.3s;
  width: calc(100% - 22px);
  color: #000;
  padding: 0px 10px;
  font-size: 14px;
  font-weight: 500;
  &:focus {
    box-shadow: rgba(67, 90, 111, 0.14) 0px 0px 2px inset,
      rgb(87, 154, 217) 0px 0px 0px 1px inset,
      rgba(16, 112, 202, 0.14) 0px 0px 0px 3px;
    outline: none;
    border: 1px solid #2f4f4f;
  }
`;

// search list, the results
export const SearchList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const SearchItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
  &:hover {
    background-color: #ddd;
  }
`;

// will define how the items are going to “fill” over the available space along the main axis.
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-right: 1rem;
    flex-shrink: 0;
  }
`;

//preview button
export const Button = styled.button`
  background: ${props => (props.primary ? "#581845 " : "#581845 ")};
  color: ${props => (props.primary ? "white " : "white ")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #581845;
  border-radius: 3px;
`;
