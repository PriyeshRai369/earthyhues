'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Loading from '@/components/Loading/Loading';

function Packages() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.earthyhues.com/newadmin/apipackages');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching Package:', error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };
        fetchData();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // if (loading) {
    //     return <Loading />;
    // }

    return (
        <div>
            <section className="page-header">
                {/* <div className="page-header__bg" /> */}
                <div className="container">
                    
                </div>
            </section>
            {loading? <Loading/>:
            <section>
                <div className="container">
                    <div className="row">
                        <h3
                            className="offer-one__heading sec-title__heading text-left"
                            style={{
                                // marginTop: "-62px",
                                paddingLeft: '200',
                                fontSize: "25px !important",
                            }}>
                            <span className="font-bernadette-rough display-4">
                                Packages of Earthy Hues
                            </span>
                        </h3>
                        {data.map((packageData) => (
                            <div className="col-lg-4" key={packageData.package_id}>
                                <Link href={`/packages/${packageData.package_url}`} onClick={scrollToTop}>
                                    <div className="card">
                                        <div className='testcontent'>
                                            <img loading="lazy" className="card-img-top testimg" src={packageData.package_img} alt={packageData.package_url} />
                                        </div>
                                        <div className="card-body">
                                            <h4 dangerouslySetInnerHTML={{ __html: packageData.package_title }}></h4>
                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: packageData.package_intro.substring(0, 150) }} style={{ textAlign: 'justify' }}></p>
                                            {/* <Link to={'/packagesDetail'}>Explore More</Link> */}
                                            <Link href={`/packages/${packageData.package_url}`} onClick={scrollToTop} class=" trevlo-btn trevlo-btn--base text-white" style={{ padding: "10px 20px" }}><span>
                                                Explore More
                                            </span>
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>}
        </div>
    );
}

export default Packages;
