'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/components/Loading/Loading';

const ConsciousDetail = ({ dest }) => {
  const id = dest
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true);
  console.log(data.conscious_content);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.banarasialoopapad.in/api-conscious-travel/${id}`);
        setData(response.data[0]);
        // console.log(response.data[0]);
      } catch (error) {
        console.error("Error in Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // if (loading) {
  //   return <Loading />; 
  // }
  return (
    <div>

      <section className="page-header mob">
        <div className="container">
          {/* <h3
            className="offer-one__heading sec-title__heading text-left"
            style={{
              marginTop: "62px",
              paddingLeft: '200',
              fontSize: "25px!important",
              left: 23
            }}>
            <span className="font-bernadette-rough display-4">
            {data.customer_name}
            </span>
          </h3> */}
        </div>
      </section>
      {loading ? <Loading /> :
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-justify travel_con_de">
                <h2>{data.customer_name}</h2>
                {data && data.conscious_content && data.conscious_content.map((content) => (
                  <div className="shadowBox" key={content.conscious_id}>
                    {content.conscious_img && (
                      <div className="col-md-4 rightsidediv">
                        <img src={content.conscious_img} alt={content.blog_heading} className='consimg rounded float-left' />
                      </div>
                    )}
                    <div className="tour-listing-details__reviews-content wow animated fadeInUp animated"
                      data-wow-delay="0.3s"
                      data-wow-duration="1500ms"
                    >
                      <p className="tour-listing-details__reviews-text" dangerouslySetInnerHTML={{ __html: content.conscious_content }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>}
    </div>
  )
}

export default ConsciousDetail
