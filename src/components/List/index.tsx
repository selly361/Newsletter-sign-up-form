import { ItemContainer, ListItem, StyledList } from "./List.styles";

import { ListIcon } from "../../assets";
import React from "react";

const sentences = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function List() {
  return (
    <StyledList>{sentences.map((sentence) => (
        <ItemContainer>
          <ListIcon />
          <ListItem>{sentence}</ListItem>
        </ItemContainer>
    ))}
    </StyledList>
  )
}

export default List;
