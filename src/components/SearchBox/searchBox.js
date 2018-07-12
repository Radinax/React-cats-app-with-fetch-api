import React from "react";
import styled from "styled-components";

const SearchInput = styled.div`
  padding: 10px;
  display: grid;
  justify-content: center;
`;

const SearchBox = ({ searchChange, searchField }) => {
  return (
    <SearchInput>
      <input
        type="search"
        placeholder="search for a cat"
        onChange={searchChange}
      />
    </SearchInput>
  );
};

export default SearchBox;
