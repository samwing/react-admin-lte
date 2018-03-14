import * as React from 'react';
import {
  Badge,
  Box,
  BoxBody,
  BoxFooter,
  BoxHeader,
  BoxTitle,
  BoxToolButton,
  BoxTools,
  Content,
  ContentHeader,
  ContentWrapper,
  InfoBox,
  InfoBoxProgressBar,
  Label,
  Layout,
  LoginBox,
  LoginBoxBody,
  LoginLogo,
  LoginMessage,
  LoginPage,
  Logo,
  MainFooter,
  MainHeader,
  SidebarToggle,
  Skin,
  Wrapper
} from '../../src';

const BadgeTest = () => (
  <Badge backgroundColor="red">67</Badge>
);

const BoxTest = () => (
  <Box
    collapsed={true}
    loading={true}
    loadingIndicator={<div />}
    solid={true}
    style="default"
  >
    <div />
  </Box>
);

const BoxBodyTest = () => (
  <BoxBody
    noPadding={true}
  >
    <div />
  </BoxBody>
);

const BoxFooterTest = () => (
  <BoxFooter><div /></BoxFooter>
);

const BoxHeaderTest = () => (
  <BoxHeader border={true}><div /></BoxHeader>
);

const BoxTitleTest = () => (
  <BoxTitle component="h1"><div /></BoxTitle>
);

const BoxToolButtonTest = () => (
  <BoxToolButton
    component="button"
    href="/asdf"
    type="submit"
  >
    <div />
  </BoxToolButton>
);

const BoxToolsTest = () => (
  <BoxTools><div /></BoxTools>
);

const ContentTest = () => (
  <Content
    component="div"
  >
    <div />
  </Content>
);

const ContentHeaderTest = () => (
  <ContentHeader
    component="div"
    subtitle="small fries"
    title="king size"
  >
    <div />
  </ContentHeader>
);

const ContentWrapperTest = () => (
  <ContentWrapper>
    <div />
  </ContentWrapper>
);

const InfoBoxTest = () => (
  <InfoBox
    backgroundColor="red"
    backgroundPlacement="box"
    icon={<div />}
    number={<div />}
    text={<div />}
  />
);

const InfoBoxProgressBarTest = () => (
  <InfoBoxProgressBar
    now={67}
    description="lot of progress"
  />
);

const LabelTest = () => (
  <Label backgroundColor="red">67</Label>
);

const LoginBoxTest = () => (
  <LoginBox><div /></LoginBox>
);

const LoginBoxBodyTest = () => (
  <LoginBoxBody><div /></LoginBoxBody>
);

const LoginLogoTest = () => (
  <LoginLogo><div /></LoginLogo>
);

const LoginMessageTest = () => (
  <LoginMessage component="div">Sign in</LoginMessage>
);

const LoginPageTest = () => (
  <LoginPage><div /></LoginPage>
);

const LogoTest = () => (
  <Logo
    component="Link"
    large={<div>large</div>}
    mini={<div>mini</div>}
  />
);

const LayoutTest = () => (
  <Layout
    boxed={true}
    fixed={true}
    miniSidebar={true}
    sidebarCollapsed={true}
    topNav={true}
  >
    <div />
  </Layout>
);

const MainFooterTest = () => (
  <MainFooter component="div">
    <div />
  </MainFooter>
);

const MainHeaderTest = () => (
  <MainHeader component="div">
    <div />
  </MainHeader>
);

const SidebarToggleTest = () => (
  <SidebarToggle
    component="button"
    onClick={() => {}}
  >
    <span className="sr-only">Toggle navigation</span>
  </SidebarToggle>
);

const SkinTest = () => (
  <Skin color="blue" />
);

const WrapperTest = () => (
  <Wrapper />
);
