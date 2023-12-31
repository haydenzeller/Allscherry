import "./Home.mobile.scss";
import { Helmet } from "react-helmet";
import { Link  } from "react-scroll";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

// image imports
import logo from "/src/assets/img/allscherry-landing.png";
import linktree from "/src/assets/img/linktree-footer.png";
import mail from "/src/assets/img/mail-footer.png";
import mailchimp from "/src/assets/img/mailchimp-footer.png";
import downArrow from "/src/assets/img/downArrow.svg";
import eric from "/src/assets/img/eric.png";
import ericBubble from "/src/assets/img/eric-bubbles.png";
import bottomBubbles from "/src/assets/img/bottom-bubbles.png";
import backToTop from "/src/assets/img/back-to-top.png";
import cover from "/src/assets/img/Cover.png";
import coverRGB from "/src/assets/img/cover-rgb.jpg";
import wendyAndTheSptrite from "/src/assets/img/wendy-and-the-sprite-with-logo.png";
import page1Cover from "/src/assets/img/page-1-cover-with-logo.png";
import anthology from "/src/assets/img/anthology.png";
import uvfs from "/src/assets/img/uvfs.png";
import comicsLogo from "/src/assets/img/allscherry-sign-bubbles.png";
import comicBlue from "/src/assets/img/comicBlue.png";
import comicGrey from "/src/assets/img/comicGrey.png";
import comicRed from "/src/assets/img/comicRed.png";
import allscherrycomics from "/src/assets/img/allscherrycomics.png";
import crowOnAPerch from "/src/assets/img/crowOnAPerch.png";
import setDraw from "/src/assets/img/setDraw.jpeg";
import crowLogo from "/src/assets/img/crowLogo.png";
import puzzle1 from "/src/assets/img/puzzle1.jpeg";
import puzzle2 from "/src/assets/img/puzzle2.jpeg";
import theSpinning from "/src/assets/img/theSpinning.png";
import lookingBack from "/src/assets/img/lookingBack.png";

export default function HomeMobile() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    return (
        <div className="homeMobile">
            <Helmet>
                <title>AllsCherry - Home</title>
            </Helmet>
            <div className="backToTop">
                {showBackToTop && (
                    <Link
                        to="expandedInfoText1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <img src={backToTop}  alt="back to top" className="backToTopImg" />
                    </Link>
                )}
            </div>
            <div className="firstBlock">
                <div className="logoSloganWrapper">
                    <div className="logoWrapper">
                        <img className="mainLogo" src={logo} alt="logo" />
                    </div>
                    <div className="sloganWrapper">
                        <div className="slogan">
                            <h1>Feel the wonder,</h1>
                            <h1>Crave Adventure</h1>
                        </div>
                    </div>
                </div>
                <div className="selectionBarWrapper">
                    <ul className="selectionBarList">
                        <li className="selectionBarItemShop">
                            <RouterLink
                                to="/shop"
                            ><p>Shop</p>
                            </RouterLink>
                        </li>
                        <li className="selectionBarItemProject">
                            <Link
                                to="pageScrollLinksWrapper"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                            <p>Projects</p>
                            </Link>
                        </li>
                        <li className="selectionBarItemContact"><RouterLink to="/contact"><p>Contact</p></RouterLink></li>
                    </ul>
                </div>
                <div className="mainText">
                    <p><br/>AllsCherry is a brand, and artist, a community, an idea, an art piece.</p>
                    <p><br/>Starting with a cartoon character, a simple concept of community has created an array of projects and friends.</p>
                    <p><br/>Look through our website, and join in on the fun!</p>
                </div>
                <div className="linkWrapper">
                    <ul className="linkList">
                        <li className="linkItem"><a href="https://linktr.ee/eolcsvary_art/" target="_blank"><img src={linktree}></img></a></li>
                        <li className="linkItem"><a href="mailto:eric@eolcsvaryart.com" target="_blank"><img src={mail}></img></a></li>
                        <li className="linkItem"><RouterLink to="/newsletter"><img src={mailchimp}></img></RouterLink></li>
                    </ul>
                </div>
                <div className="seeMoreWrapper">
                    <div className="seeMore">
                        <p>Scroll Down!</p>
                    </div>
                    <div className="seeMoreArrow">
                        <img src={downArrow}></img>
                    </div>
                </div>
                <div className="ericWrapper">
                    <div className="eric">
                        <img src={eric} alt="Eric" className="ericImg" />
                    </div>
                </div>
                <div className="ericBubbleWrapper">
                    <div className="ericBubble">
                        <img src={ericBubble} alt="Eric" className="ericBubbleImg" />
                    </div>
                </div>
            </div>
            <div className="expandedInfoWrapper">
                <div className="expandedInfoText1">
                    <p>Welcome to a world of possibility</p>
                    <p><br/>My name is Eric Olcsvary, a 23 year old artist with a passion to create things,
                            ranging from logos to websites, music and comic books.
                    </p>
                    <p><br /> But enough about me, let's talk about you, and why you're here!</p>
                </div>
                <div className="expandedInfoText2">
                    <p>Scrolling down you will see a list of my favorite projects I've worked on, ones that I'm sure will make you smile.</p>
                    <p><br/>If you have any questions, or wish to work with me on a collaborative project, shoot me an email!</p>
                </div>
                <div className="bottomBubbles">
                    <img src={bottomBubbles} alt="bottom bubbles" className="bottomBubblesImg" />
                </div>
                <div className="pageScrollLinksWrapper">
                    <ul className="pageScrollLinksList">
                        <li className="pageScrollLinksItemComics">
                            <Link
                                to="comicWrapper"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            ><p>Comics</p></Link>
                        </li>
                        <li className="pageScrollLinksItemColabs">
                            <Link 
                                to="anthologyImgWrapper"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            ><p>Colabs</p></Link>
                        </li>
                        <li className="pageScrollLinksItemDesign">
                            <Link
                                to="comicsLogo"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            ><p>Design</p></Link>
                        </li>
                        <li className="pageScrollLinksItemPainting"><p>Painting</p></li>
                        <li className="pageScrollLinksItemDrawing"><p>Drawing</p></li>
                    </ul>
                </div>
                <div className="pageScrollLinks2Wrapper">
                    <ul className="pageScrollLinksList2">
                        <li className="pageScrollLinksItemPodcast">
                            <Link
                                to="crowLogoWrapper"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            ><p>Podcast</p></Link>
                        </li>
                        <li className="pageScrollLinksItemMusic"><p>Music</p></li>
                    </ul>
                </div>
            </div>
            <div className="stripeDivider">
                <div className="dark"></div>
                <div className="background"></div>
                <div className="light"></div>
                <div className="background"></div>
                <div className="lighter"></div>
            </div>
            <div className="comicWrapper">
                <div className="leftCover">
                    <div className="wendyAndTheSprite">
                        <img src={wendyAndTheSptrite} alt="cover" className="wendyAndTheSpriteImg" />
                    </div>
                    <div className="page1Cover">
                        <img src={page1Cover} alt="cover" className="page1CoverImg" />
                    </div>
                </div>
                <div className="rightCover">
                    <div className="cover">
                        <img src={cover} alt="cover" className="coverImg" />
                    </div>
                    <div className="coverRGB">
                        <img src={coverRGB} alt="cover" className="coverRGBImg" />
                    </div>
                </div>
            </div>
            <div className="comicTextWrapper">
                <div className="comicText">
                    <h2>AllsCherry Comics, Indie Publishing</h2>
                    <br />
                    <p>The center of AllsCherry, and it's original purpose, was that od creating indie comics! Wendy and the Sprite, and Overflow, are my two main series. They are for all ages, with fun pictures and a large plot!</p>
                </div>
                <div className="comicBtnWrapper">
                    <a href="https://www.etsy.com/ca/shop/OlcsvaryCartoons?ref=seller-platform-mcnav&section_id=34381204" target="_blank">
                        <button className="comicBtn">
                            Check them out here!
                        </button>
                    </a>
                </div>
            </div>
            <div className="stripeDivider">
                <div className="dark"></div>
                <div className="background"></div>
                <div className="light"></div>
                <div className="background"></div>
                <div className="lighter"></div>
            </div>
            <div className="anthologyWrapper">
                <div className="anthologyImgWrapper">
                    <img src={anthology} alt="anthology" className="anthologyImg" />
                </div>
                <div className="anthologyText">
                    <h2>The AllsCherry Anthology</h2>
                    <br />
                    <p>Bringing together a collection of 8 unique stories all by a different artist, the AllsCherry Anthology’s goal is to unite creators to make something special, and to show off our talents! The first of many to come, this book is the embodiment of AllsCherry’s goal!</p>
                </div>
                <div className="anthologyBtnWrapper">
                    <button className="anthologyBtn">
                        Check them out here!
                    </button>
                </div>
            </div>
            <div className="stripeDivider">
                <div className="dark"></div>
                <div className="background"></div>
                <div className="light"></div>
                <div className="background"></div>
                <div className="lighter"></div>
            </div>
            <div className="uvfsWrapper">
                <div className="uvfsImgWrapper">
                    <img src={uvfs} alt="uvfs" className="uvfsImg" />
                </div>
                <div className="uvfsText">
                    <h2>UVFS x AllsCherry</h2>
                    <br />
                    <p>UVFS is a podcast I host with my friends, where we talk about movies, games, and other media. We have a lot of fun, and we hope you do too!</p>
                </div>
                <div className="uvfsBtnWrapper">
                    <button className="uvfsBtn">
                        Check it out here!
                    </button>
                </div>
            </div>
            <div className="comicsInfo">
                <div className="stripeDivider2">
                    <div className="dark"></div>
                    <div className="background"></div>
                    <div className="light"></div>
                    <div className="background"></div>
                    <div className="lighter"></div>
                    <div className="background"></div>
                    <div className="lightest"></div>
                </div>
                <div className="comicsLogo">
                    <img src={comicsLogo} alt="logo" className="comicsLogoImg" />
                </div>
                <div className="comicsText">
                    <h3>AllsCherry, a symbol of community and my work as an artist</h3>
                    <br />
                    <p>The logo is a play on my last name, Olcsvary, and an old nickname from high school. Originally a publishing label for my comics, it has now become something more; an opportunity to create not just for myself, but with others!</p>
                </div>
                <div className="comicImgWrapper">
                    <img src={comicGrey} alt="comic" className="comicImgGrey" />
                    <img src={comicRed} alt="comic" className="comicImgRed" />
                    <img src={comicBlue} alt="comic" className="comicImgBlue" />
                </div>
                <div className="allsCherryComicsLogoWrapper">
                    <img src={allscherrycomics} alt="logo" className="allsCherryComicsLogoImg" />
                </div>
            </div>
            <div className="artWrapper">
                <div className="stripeDivider4">
                    <div className="background"></div>
                    <div className="light"></div>
                    <div className="background"></div>
                    <div className="lighter"></div>
                    <div className="background2"></div>
                    <div className="lightest"></div>
                </div>
                <div className="puzzleImgWrapper">
                    <img src={puzzle1} alt="comic" className="puzzleImg" />
                </div>
                <div className="puzzleText">
                    <h3>The Puzzle Series</h3>
                    <br />
                    <p>Some of my earlier work in “my career, and yet, some of my favorites.</p>
                    <br />
                    <p>The Distorted Puzzle” and “Spatial Division”, respectfully, are my biggest paintings. The first being 72” tall, and the second being 58” x 48” in size.</p>
                    <br />
                    <p>Both representing concepts beyond the canvas, being painted on cut up masonite, exploring Artist’s Block, acceptance and banishment, as well as Night Terrors and safe spaces; these paintings are very representative of my journey. </p>
                </div>
                <div className="pinkBar"></div>
                <div className="puzzleImgWrapper2">
                    <img src={puzzle2} alt="comic" className="puzzleImg2" />
                </div>
                <div className="paintingNightTerrorWrapper">
                    <div className="darkBar"></div>
                    <div className="darkBar"></div>
                    <div className="lighterBar"></div>
                    <div className="darkBar"></div>
                    <div className="spinningImgWrapper">
                        <img src={theSpinning} alt="comic" className="spinningImg" />
                    </div>
                    <div className="lookingBackImgWrapper">
                        <img src={lookingBack} alt="comic" className="lookingBackImg" />
                    </div>
                    <div className="paintingNightTerrorText">
                        <h3>Painting Night Terrors</h3>
                        <p>Some of my favorite early paintings are my Night Terror paintings. Suffering from night terrors for many years as a child, these simple paintings to one person, is a personal hell to another. It made my love for painting and expression that much stronger.</p>
                    </div>
                </div>
            </div>
            <div className="crowOnAPerchWrapper">
                <div className="stripeDivider3">
                    <div className="dark"></div>
                    <div className="background"></div>
                    <div className="light"></div>
                    <div className="background"></div>
                    <div className="lighter"></div>
                    <div className="background"></div>
                    <div className="lightest"></div>
                </div>
                <div className="crowOnAPerchImgWrapper">
                    <img src={crowOnAPerch} alt="comic" className="crowOnAPerchImg" />
                </div>
                <div className="crowOnAPerchText">
                    <h3>Crow on a Perch</h3>
                    <br />
                    <p>Season 1 of this podcast just ended! The show is about our lives as growing young adults in a world that almost seems to push art and critical thinking to the sidelines. Sharing our own growth and experiences, the pod is meant to show that nobody is perfect, and that fact is beautiful.</p>
                </div>
                <div className="crowOnAPerchBtnWrapper">
                    <a href="https://open.spotify.com/show/3ibtTwslpMAqkeZCNL4fLN?si=71568c0821ea46e0&nd=1&dlsi=48cdd0321f1840d3" target="_blank">
                        <button className="crowOnAPerchBtn">
                            Now on Spotify!
                        </button>
                    </a>
                </div>
                <div className="setDrawWrapper">
                    <img src={setDraw} alt="comic" className="setDrawImg" />
                </div>
                <div className="crowLogoWrapper">
                    <img src={crowLogo} alt="comic" className="crowLogoImg" />
                </div>
            </div>
            <div className="podcastEmbedWrapper">
                <div className="iframeWrapper">
                    <iframe src="https://open.spotify.com/embed/episode/0l4vnmjeQovlJD7IWZhIGr?utm_source=generator&theme=0" width="100%" height="200" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
  );
}