import React from 'react'
import "./Contact.css"
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'


const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">

            <div className="flexColStart  c-left">
              <span className='orangeText'> Our contacts </span>
              <span className='primaryText'> Easy to connect </span>
              <span className='secondaryText'> we are always ready to help</span>

              <div className="flexColStart contactModes">
{/* 1st row */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart">
                                <span> chat  </span> <span> 0192 022 393 </span>
                            </div>
                        </div>
                        <div className="flexCenter button primaryText"> chat now</div>
                    </div>
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart">
                                <span> Call  </span> <span> 0192 022 393 </span>
                            </div>
                        </div>
                        <div className="flexCenter button primaryText"> Call now</div>
                    </div>
                </div>
{/* 2nd row */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart">
                                <span> Video call  </span> <span> 0192 022 393 </span>
                            </div>
                        </div>
                        <div className="flexCenter button primaryText"> Video call now</div>
                    </div>
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart">
                                <span> Message  </span> <span> 0192 022 393 </span>
                            </div>
                        </div>
                        <div className="flexCenter button primaryText"> Message now</div>
                    </div>
                </div>
              </div>
            </div>
       

            <div className="c-right">
                <div className="image-container">
                <img src="./Blue Abstract Follow Us On Social Media Instagram Story (1).png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact   
