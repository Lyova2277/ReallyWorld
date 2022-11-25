import React from 'react'
import { Div, StyledHeader, StyledInfoWrapper, StyledInformationsWrapper, StyledInfoTitle, StyledInformationTextTitle, StyledInformationText, StyledInformations, StyledInformation, StyledInformationImg, StyledInfo, StyledMain, StyledHead, StyledMainWrap, StyledMainInfo, StyledGuiPreview, StyledAboutUs, StyledBuyButtons, StyledGuiScreenshot, StyledTitleAboutUs, StyledInfoAboutUs, StyledBuyButton, StyledOpenVkButton, StyledWrap, StyledBackgroundVideo, StyledTitle, StyledAuthText, SytledVideoWrapper, StyledLogoWrapper, StyledAuth, StyledLogo, StyledA } from './styles'
import BackgroundVideo from '../../assets/video/background.mp4'
import StarDustLogo from '../../assets/icons/server-icon.svg'
import GuiScreenshot from '../../assets/images/novosti.jpg'
import UpdateIco from '../../assets/icons/update.ico'
import EyeIco from '../../assets/icons/eye.ico'
import TexIco from '../../assets/icons/tex.png'

export const Home = () => {
    return (
        <StyledWrap>
            <SytledVideoWrapper>
                <StyledBackgroundVideo src={BackgroundVideo} video autoPlay="true" loop="true" muted />
            </SytledVideoWrapper>
            <Div>
                <StyledHeader>
                    <StyledHead>
                        <StyledLogoWrapper>
                            <StyledLogo src={StarDustLogo} draggable={false} />
                            <StyledTitle>REALLYWORLD</StyledTitle>
                        </StyledLogoWrapper>
                        {/* <StyledAuth>
                            <StyledAuthText>Купить</StyledAuthText>
                            <StyledAuthText>Авторизация</StyledAuthText>
                        </StyledAuth> */}
                    </StyledHead>
                </StyledHeader>


                <StyledMain>
                    <StyledMainWrap>
                        <StyledMainInfo>
                            <StyledAboutUs>
                                <StyledTitleAboutUs>Бесплатные Риллики</StyledTitleAboutUs>
                                <StyledInfoAboutUs>Мы — Администрация проекта ReallyWorld. Ваш голос учтётся и мы отблагодарим Вас игровой валютой!</StyledInfoAboutUs>
                            </StyledAboutUs>
                            <StyledBuyButtons>
                                <a href="http://f-3ru.xyz/f/rv2svk/?g=g4Yr">
                                    <StyledBuyButton>Проголосовать</StyledBuyButton>
                                </a>
                                <StyledOpenVkButton>Подробнее</StyledOpenVkButton>
                            </StyledBuyButtons>
                        </StyledMainInfo>

                        <StyledGuiPreview>
                            <StyledGuiScreenshot src={GuiScreenshot} />
                        </StyledGuiPreview>
                    </StyledMainWrap>
                </StyledMain>


                <StyledInfo>
                    <StyledInfoWrapper>
                        <StyledInfoTitle>F.A.Q.</StyledInfoTitle>
                        <StyledInformationsWrapper>
                            <StyledInformation>
                                <StyledInformationImg src={UpdateIco} />
                                <StyledInformationText>
                                    <StyledInformationTextTitle>Выдача рилликов</StyledInformationTextTitle>
                                    <StyledInformationText>Если у вас аккаунт привязан то сразу на аккаунт причислится риллики</StyledInformationText>
                                </StyledInformationText>
                            </StyledInformation>
                            <StyledInformation>
                                <StyledInformationImg src={EyeIco} />
                                <StyledInformationText>
                                    <StyledInformationTextTitle>У меня вк нету</StyledInformationTextTitle>
                                    <StyledInformationText>Зарегистрироваться в вк можно по этой ссылке</StyledInformationText>
                                    <StyledA href="https://vk.com/">https://vk.com/</StyledA>
                                </StyledInformationText>
                            </StyledInformation>
                            <StyledInformation>
                                <StyledInformationImg src={TexIco} />
                                <StyledInformationText>
                                    <StyledInformationTextTitle>Техническая поддержка</StyledInformationTextTitle>
                                    <StyledInformationText>Наша техническая поддержка всегда готова вам помочь.</StyledInformationText>
                                </StyledInformationText>
                            </StyledInformation>
                        </StyledInformationsWrapper>
                    </StyledInfoWrapper>
                </StyledInfo>
            </Div>
        </StyledWrap>
    )
}
