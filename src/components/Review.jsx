import React from 'react'
import './review.css'
import image1 from '../images/ujala.jpeg' 
import image2 from '../images/lady.png' 
import image3 from '../images/mukesh.jpg'

const Review = () => {
  return (
    <>
    <div className="main">
            <div className='main1'>
                <h1>Our Happy Clients</h1>
            </div>

            <div className='card'>

                <div className="card1">
                    <div className="cardinside">
                        <img src={image1} alt="Loading.." id='dp'/>

                        <div className="post">
                            <p className=''>
                                Ujala Singh
                                <br />
                                <em>Software Engineer</em>
                            </p>
                        </div>

                        <div className='star'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                    
                    <p id='rpara'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus autem et asperiores nisi quibusdam, esse blanditiis enim illum doloremque cumque neque Animi exercitationem, aut dolores recusandae voluptate quia dolorum eaque ad adipisci eos corrupti <br /><br />repudiandae eligendi officiis fuga accusantium, amet sequi nam nobis iusto error! Eum aut est qui quod. Lorem ipsum, dolor sit amet ujala  jijsd  jkjd jkjkierj njern.
                      <br />
                      <br />
                      <br />
                      <br />
                      <em id='underline'>Oct 24,2019</em>
                    </p>

                </div>

                <div className="card1">
                    <div className="cardinside">
                        <img src={image2} alt="Loading.." id='dp'/>
                        <div className='post'>
                            <p>
                                Lofy Singh
                                <br />
                                <em>Business woman</em>
                            </p>

                        </div>

                        <div className='star'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked "></span>
                            <span className="fa fa-star four"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>

                    <p id='rpara'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis uj deleniti incidunt consectetur quas recusandae temporibus saepe repellendus nisi fugiat laudantium labore ea voluptas modi,<br /><br /> pariatur corrupti quia atque? Voluptatem eveniet adipisci dolor tenetur harum minus ad repellat et hic. At unde veritatis nam non! Quasi, ab quas id nesciunt dolorem quaerat optio sed porro! Ducimus.
                      <br />
                      <br />
                      <br />
                      <br />
                      <em id='underline'>June 26,2020</em>
                    </p>
                </div>
                <div className="card1">
                    <div className="cardinside">
                        <img src={image3} alt="Loading.." id='dp'/>
                        <div className='post'>
                            <p>
                                Ramesh panvel
                                <br />
                                <em>Data Sceintist</em>
                            </p>

                        </div>

                        <div className='star'>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star four"></span>
                            <span className="fa fa-star five"></span>
                        </div>
                    </div>

                    <p id='rpara'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis uj deleniti incidunt consectetur quas recusandae temporibus saepe repellendus nisi fugiat laudantium labore ea voluptas <br /><br />modi, pariatur corrupti quia atque? Voluptatem eveniet adipisci dolor tenetur harum minus ad repellat et hic. At unde veritatis nam non! Quasi, ab quas id nesciunt dolorem quaerat optio sed porro! Ducimus.
                      <br />
                      <br />
                      <br />
                      <br />
                      <em id='underline'>Dec 15,2023</em>
                    </p>
                </div>
            </div>
    </div>
    </>
  )
}

export default Review