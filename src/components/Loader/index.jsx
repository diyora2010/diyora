import React from "react";
import { Watch } from "react-loader-spinner";
import { Container } from "./style";

export default function Loader() {
  return (
    <Container>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="rgb(37, 35, 59)"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
}
