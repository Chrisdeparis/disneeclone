import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  overflow:hidden;
  display:flex;
  flex-direction:column;
  text-align:center;
  height:100vh;
`;

const Content = styled.div`
  margin-bottom:10vw;
  width:100%;
  position:relative;
  min-height:100vh;
  box-sizing:border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding:80px 40px;
  height:100%;
`;

const BgImg = styled.div`
  height:100%;
  background-position:top; 
  background-image: url("/images/login-background.jpg");
  background-size:cover;
  background-repeat:no-repeat;
  position:absolute;
  top:0;
  right:0;
  left:0;
  z-index:-1;

`;

const CTA = styled.div`
  margin-bottom:2vw;
  max-width:650px;
  flex-wrap:wrap;
  display:flex;
  flex-direction:column;
  justify-content:center;
  
`;

const CTALogoOne = styled.img`
  height:100px;
  margin-bottom:12px;
  min-height:1px;
  max-width:600px;
  display:block;
  width:100%;
  justify-content:center;
  margin-top:0;
  text-align:center;
  margin-right:auto;
  margin-left:auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color:#F9F9F9;
  background-color:#0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border:1px solid transparent;
  border-radius:4px;

  &:hover {
    background-color:#0483ee;
  }
`;

const Description = styled.p`
  color:hsla(0, 0%, 95.3% ,1);
  font-size:11px;
  margin:0 0 24px;
  line-height:1.5;
  letter-spacing:1.5px;
`;

const CTALogoTwo = styled.img`
  max-width:600px;
  margin-bottom: 300px;
  transition:transform;
  display:inline-block;
  vertical-align:bottom;
  width: 100%;
`;

function Login() {
    return (
        <div>
            <Container>
              <Content>
                <CTA>
                  <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                  <SignUp>INSCRIVEZ VOUS</SignUp>
                  <Description>Regardez des films, des séries et des documentaires créés par les artistes des studios de chaque univers,sans oublier les Disney+ Originals, disponibles en exclusivité sur le service.</Description>
                  <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <div className="style" ></div>
                
                <BgImg />
              </Content>
            </Container>
        </div>
    )
}

export default Login
