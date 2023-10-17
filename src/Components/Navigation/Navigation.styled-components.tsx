import styled from '@emotion/styled';
import LinkWrapper from '../LinkWrapper';

const CompanyName = styled(LinkWrapper)`
    font-size: 40px;
    margin-right: 60px;
`

const NameWrapper = styled('div')`
    justify-content: flex-start;
    display: flex;
`

const NavigationItems = styled(LinkWrapper)`
    font-size: 80px;
`

const NavigationItemWrapper = styled('div')`
    justify-content: flex-end;
    display: flex;
    padding-left: 24px;
`

const NavigationStyled = styled('div')`
    justify-content: space-between;
    background-color: #c0a9bd;
    display: flex;
    height: 42px;
    padding-left: 24px;
    padding-top: 16px;
`

export {CompanyName, NameWrapper, NavigationItems, NavigationItemWrapper, NavigationStyled}
