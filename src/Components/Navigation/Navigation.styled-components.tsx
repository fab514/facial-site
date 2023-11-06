import styled from "@emotion/styled";
import LinkWrapper from "../LinkWrapper";

// Add the left margin only when the hamburger is inside of the navigation
const CompanyName = styled(LinkWrapper)`
  font-size: 40px;
  margin-right: 60px;
  margin-left: 10px;
`;

const NameWrapper = styled("div")`
  justify-content: flex-start;
  display: flex;
`;

const NavigationItems = styled(LinkWrapper)`
  font-size: 80px;
`;

const NavigationItemWrapper = styled("div")`
  justify-content: flex-end;
  display: flex;
  padding-left: 24px;
`;

const NavigationStyled = styled("div")`
  justify-content: space-between;
  background-color: #c0a9bd;
  display: flex;
  height: 42px;
  padding-left: 24px;
  padding-top: 16px;
`;

export {
  CompanyName,
  NameWrapper,
  NavigationItems,
  NavigationItemWrapper,
  NavigationStyled,
};
