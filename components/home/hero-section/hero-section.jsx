import styles from './hero-section.module.css'
import Image from 'next/image'
import profilePic from '../../../public/assets/home-page/mockup1.png'
import profilePic2 from '../../../public/assets/home-page/mockup2.png'
import profilePic3 from '../../../public/assets/home-page/mockup3.png'
import leaderboard from '../../../public/assets/home-page/leaderboard.svg'
import top10 from '../../../public/assets/home-page/top10.svg'
import team1 from '../../../public/assets/home-page/teampic1.svg'
import team2 from '../../../public/assets/home-page/teampic2.svg'
import aman from '../../../public/assets/home-page/akash.svg'
import valuation from '../../../public/assets/home-page/valuationfeature.svg'
import apj from '../../../public/assets/home-page/apj.svg'

const HeroSection = () => {

    return <>
        <div className={styles.containerland} >
            <h1 className={styles.containertext} >KNOW <span style={{ backgroundColor: "white", color: "#4B0082" }}>YOURSELF</span> FIRST</h1>
            <p style={{ marginTop: "20px", color: "white", textAlign: "center" }} > DENAURLEN is a world&apos;s first social media application with gamification<br />
                touch where users' activity spent time is monetized and uploaded content
                <br />is valued using U-coins thus creating an absolute win:win!</p>
            <div className={styles.flexc}>
                <Image src={profilePic} />
                <Image src={profilePic2} />
                <Image src={profilePic3} />
            </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", padding: "5px", marginTop: "265px" }}>
            <button style={{ backgroundColor: "#4B0082", paddingRight: "25px", paddingLeft: "25px", color: "white", paddingTop: "15px", paddingBottom: "15px" }}> Download the App !</button>
        </div>

        <div className={styles.mscroll} style={{ marginBottom: "100px", marginTop: "50px" }}>
            <div className={styles.mscrolltitle}>
                <div>
                    <h1>
                        <a>Incubated at T-Hub - World's Largest Innovation Campus</a>&nbsp; <a>* </a>&nbsp;
                    </h1>
                    <h1>
                        <a>Incubated at T-Hub - World's Largest Innovation Campus</a>&nbsp; <a> * </a>&nbsp;
                    </h1>
                    <h1>
                        <a>Incubated at T-Hub - World's Largest Innovation Campus</a>&nbsp; <a>* </a>&nbsp;
                    </h1>
                    <h1>
                        <a>Incubated at T-Hub - World's Largest Innovation Campus</a>&nbsp; <a>* </a>&nbsp;
                    </h1>
                </div>
            </div>
        </div>

        <div style={{ display: "flex", justifyContent: "left" }}>
            <div style={{ marginLeft: "100px", width: "602px", height: "400px", background: "#D9D9D9", borderRadius: "31px" }}></div>
            <div style={{ marginLeft: "195px", lineHeight: "2", fontSize: "30px" }}>
                Join the <br></br>
                revolution of <br />
                introducing a <br />
                first of-its kind <br />
                <div style={{ color: "#FF9A00" }}> gamified  social</div>
                <div style={{ color: "#FF9A00" }}>media</div>
            </div>
        </div>

        <div style={{ width: "1280px", height: "1922px", background: "rgba(246, 146, 4, 0.05)", marginTop: "45px", borderRadius: "89px", marginLeft: "45px" }}>
            <h1 style={{ textAlign: "center", fontSize: "42px" }}> Our Core Features</h1>



            <div className={styles.rowcontainer} style={{ marginTop: "70px" }}  >
                <Image src={valuation} style={{ float: "right" }} ></Image>
                <div>01| Valuation Process<br /></div>
                <div style={{ fontSize: "30px", color: "#2E2E2E" }}>
                    Every Post Has A unique Feature
                    <div style={{ color: "#00000080", fontSize: "20px" }}>
                        Through Denaurlen&apos;s  &apos;Valuation Process&apos;<br />
                        a post gets valued by other users with<br />
                        U-coins giving credibility and right reach<br />
                        to the creators/uploaders.
                    </div>
                </div>
            </div>

            <div className={styles.rowcontainer} style={{ marginTop: "250px" }}  >
                <Image src={top10} style={{ float: "left", marginRight: "215px" }} ></Image>
                <div style={{ lineHeight: "5" }}>02| Top 10&apos;s<br /></div>
                <div style={{ fontSize: "30px", color: "#2E2E2E" }}>
                    Know & Represent Yourself!
                    <div style={{ color: "#00000080", fontSize: "20px" }}>
                        Through Denaurlen&apos;s  &apos;Valuation Process&apos;<br />
                        a post gets valued by other users with<br />
                        U-coins giving credibility and right reach<br />
                        to the creators/uploaders.
                    </div>
                </div>
            </div>


            <div className={styles.rowcontainer} style={{ marginTop: "270px" }}  >
                <Image src={leaderboard} style={{ float: "right" }} ></Image>
                <div>03| Leaderboard<br /></div>
                <div style={{ fontSize: "30px", color: "#2E2E2E" }}>
                    Connect : Collect : Climb Up
                    <div style={{ color: "#00000080", fontSize: "20px" }}>
                        More the U-coins collected, the more<br />
                        visibility for a profile in the global <br />
                        leaderboard ranking!
                    </div>
                </div>
            </div>






        </div>

        <h1 style={{ textAlign: "center", lineHeight: "3" }}>Product Testimonals</h1>

        <div className={styles.rowcontainer}>
            <Image src={aman} style={{ float: "left", marginRight: "20px" }} />

            <blockquote style={{ fontSize: "20px", color: "#7D7D7D", marginLeft: "28px" }}>
                It is a long established fact that a reader will be distracted by the<br />
                readable content of a page when looking at its layout. The point of using<br />
                Lorem Ipsum is that it has a more-or-less normal distribution of letters
            </blockquote>
            <h4 style={{ fontSize: "20px", color: "#000000", marginTop: "20px" }}>Aman Tripati</h4>
            <h5 style={{ color: "#000000", fontSize: "20px" }}>Lead UI Designer|Denaurlen</h5>
        </div>

        {/* <div className={styles.rowcontainer}>
            <img src={pic7} style={{ float: "left", marginRight: "20px" }}></img>
            <i class="bi bi-quote"></i>
            <div style={{ fontSize: "20px", color: "#7D7D7D", marginLeft: "28px" }}>
                It is a long established fact that a reader will be distracted by the<br />
                readable content of a page when looking at its layout. The point of using<br />
                Lorem Ipsum is that it has a more-or-less normal distribution of letters
            </div>
            <h1 style={{ fontSize: "20px", color: "#000000", marginTop: "20px" }}>Aman Tripati</h1>
            <h2 style={{ color: "#000000", fontSize: "20px" }}>Lead UI Designer|Denaurlen</h2>
        </div> */}

        <div className={styles.amanpic} >
            <h1>About Us</h1>
            <button > Know More</button>

        </div>

        <div className={styles.line}></div>

        <div className={styles.flexb} >
            Well, we perceive ourselves as a young passionate & vision driven team and not<br />
            just as entrepreneurs/founders or anything of the sort but like any other individuals<br />
            who’ve had believed an idea which could have a global impact and are consistent.<br />

        </div>

        <div className={styles.flexb}>
            <Image src={team1} />
            <Image src={team2} />
        </div>

        <div className={styles.yellowb}>
            <h2 style={{ fontSize: "24px" }}>Why We Started ?</h2>
            <div className={styles.text1}>Denaurlen was started from the ideology of ‘2 Galaxy<br />
                Brains’ introduced by Tagore brothers who were<br />
                inspired by Sir A.P.J Abdul Kalam.<br />
            </div>


            <div className={styles.flexapj}>
                <Image src={apj} style={{ marginRight: "auto" }} ></Image>
                <blockquote data-author="Sir A.P.J Abdul Kalam" style={{ fontSize: "30px", color: "#2E2E2E", flexGrow: 1, color: "#00000080", fontSize: "20px" }}>
                    More the U-coins collected, the more<br />
                    visibility for a profile in the global <br />
                    leaderboard ranking!
                </blockquote>
            </div>
        </div>





    </>
}

export default HeroSection