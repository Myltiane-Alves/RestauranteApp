
import styled from "styled-components/native";
import { vars } from "../../values";
import { DeafaultTitleWrap } from "./DefaultTitleWrap";
import { Title } from "./Title";

const DefaultTitleText = () => {
  return (
    <DeafaultTitleWrap>
      <Title style={{ color: vars.white }}>
        Monte o seu{" "}
      </Title>
      <Title style={{ color: vars.blue }}>
        hburger
      </Title>
    </DeafaultTitleWrap>
  );
};



export default DefaultTitleText;
