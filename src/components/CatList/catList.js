import React from "react";
import Cat from "../Cat/cat";
import { Grid } from "styled-css-grid";

const CatList = ({ cats }) => {
  return (
    <div style={{ padding: "10px" }}>
      <Grid
        columns={"repeat( auto-fit, minmax(250px, 1fr) )"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        {cats.map((cat, i) => {
          return (
            <Cat
              key={cat.id}
              name={cat.name}
              username={cat.username}
              phrase={cat.company.catchPhrase}
              id={cat.id}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default CatList;
