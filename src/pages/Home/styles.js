import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const StyledHeader = styled.header`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledMain = styled.div`
    width: 55%;
    height: 350px;
    background-color: rgba(0,0,0,.4);
    border-radius: 13px;
`
export const StyledInfo = styled.div`
    width: 55%;
    height: 200px;
    background-color: rgba(0,0,0,.4);
    margin-bottom: 100px;
    border-radius: 13px;
`
export const StyledHead = styled.div`
    width: 55%;
    height: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: rgba(0,0,0,.4);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledBackgroundVideo = styled.video`

`
export const SytledVideoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    z-index: -1;
`

export const StyledWrap = styled.div`
    width: 100%;
    height: 100vh;
`

export const StyledLogoWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const StyledLogo = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-right: 15px;
`
export const StyledTitle = styled.p`
    color: white;
    font-weight: bold;
    font-size: 30px;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
`
export const StyledAuth = styled.div`
    display: flex;
    width: 230px;
    justify-content: space-between;
    margin-right: 13px;
`
export const StyledAuthText = styled.p`
    color: white;
    font-size: 20px;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
`

// main

export const StyledMainWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const StyledMainInfo = styled.div`
    width: 460px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`
export const StyledGuiPreview = styled.div`
    width: 450px;
    height: 250px;
`
export const StyledAboutUs = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: space-around;
    width: 400px;
    margin-left: 18px;
    margin-bottom: 50px;
`
export const StyledBuyButtons = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-around;
    align-items: center;
`
export const StyledGuiScreenshot = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`
export const StyledTitleAboutUs = styled.p`
    color: white;
    font-size: 30px;
`
export const StyledInfoAboutUs = styled.p`
    color: white;
    font-size: 20px;
`
export const StyledBuyButton = styled.div`
    color: white;
    font-size: 14px;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.4)!important;
    cursor: pointer;
    user-select: none;
    :hover{
        background-color: rgba(0,0,0,.6)!important;
    }
`

export const StyledOpenVkButton = styled.div`
    font-size: 13px;
    color: white;
    text-shadow: -2px 2px 0 rgb(0 0 0 / 25%);
    user-select: none;
    cursor: pointer;
    :hover{
    text-shadow: -2px 2px 0 rgb(0 0 0 / 70%);
        
    }
`

// FootInfo

export const StyledInfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const StyledInfoTitle = styled.p`
    color: white;
    font-size: 35px;
    margin-left: 30px;
    margin-bottom: 20px;
`
export const StyledInformations = styled.div`

`
export const StyledInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledInformationImg = styled.img`
    margin-right: 20px;
`
export const StyledInformationTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledInformationTextTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`
export const StyledInformationText = styled.p`
    color: white;
    font-size: 15px;
    width: 250px;
`
export const StyledA = styled.a`
    color: white;
    font-size: 19px;
`

export const StyledInformationsWrapper = styled.div`
    display: flex;
    margin-left: 20px;
`
export const StyledBackground = styled.img`
    /* filter: blur(5px); */
    -webkit-filter: blur(5px);
    height: 100%;
    width: 100%;
`