import React from "react";
import ReactDOM from "react-dom";
import imagea from "./../images/collection/home11-grid-sm-banner1.jpg";
import imageb from "./../images/collection/home11-grid-sm-banner2.jpg";
import imagec from "./../images/collection/home11-grid-sm-banner3.jpg";
import imaged from "./../images/collection/home11-grid-sm-banner4.jpg";
import imagee from "./../images/collection/home11-grid-sm-banner5.jpg";
import imagef from "./../images/collection/home11-grid-sm-banner6.jpg";
import imageg from "./../images/collection/home11-grid-sm-banner7.jpg";
import imageh from "./../images/collection/home11-grid-sm-banner8.jpg";
import imagei from "./../images/collection/home11-grid-sm-banner9.jpg";
import imagej from "./../images/collection/home11-grid-sm-banner10.jpg";



const CategoryHome =() =>{
    return (
        <>

        <div className="section imgBanners pb-0">
        	<div className="imgBnrOuter">
            	<div className="container-fluid">
                	<div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="section-header text-center">
                                <h2 className="h2">SHOP BY Category</h2>
                                <p>Shop the Nicest Deals on Best Prices in all category</p>
                            </div>
                            
                        </div>
                    </div>    
                	<div className="row img-grid-banner1">
                    	<div className="col-12 col-sm-12 col-md-12 col-lg-6 image-banner-1">
                        	<div className="inner topright">
                            	<a href="#">	
                               		<img data-src={imagea} src= {imagea} alt="Halloween Look" title="Halloween Look" className="blur-up lazyload" />
                                    <div className="ttl">
                                    	Shop <h5>Halloween Look</h5>
                                    </div>
                                </a>
                             </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 image-banner-2">
                        	<div className="row">
                            	<div className="col-12 col-sm-6 col-md-6 col-lg-6 image-banner-3">
                                	<div className="inner topright">
                                        <a href="#">	
                                            <img data-src= {imageb} src= {imageb} alt="Heeled Boots" title="Heeled Boots" className="blur-up lazyload" />
                                            <div className="ttl">
                                                Shop <h5>Heeled Boots</h5>
                                            </div>
                                        </a>
                                    </div>
                            	</div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                	<div className="inner btmleft">
                                        <a href="#">	
                                            <img data-src={imagec} src= {imagec} alt="Caps" title="Caps" className="blur-up lazyload" />
                                            <div className="ttl">
                                                Shop Cool <h5>Caps</h5>
                                            </div>
                                        </a>
                                    </div>
                            	</div>   
                            </div>
                            <div className="row">
                            	<div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                                	<div className="inner center">
                                        <a href="#">	
                                            <img data-src={imaged} src= {imaged} alt="Sun Glasses, Shoes and more" title="Sun Glasses, Shoes and more" className="blur-up lazyload" />
                                            <div className="ttl">
                                                Hot Summer Collection <h5>Sun Glasses, Shoes and more</h5>
                                            </div>
                                        </a>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row img-grid-banner2">
                    	<div className="col-12 col-sm-12 col-md-12 col-lg-5">
                            <div className="inner topleft">
                                <a href="#">	
                                    <img data-src={imagee} src= {imagee} alt="Shop Jewelry" title="Shop Jewelry" className="blur-up lazyload" />
                                    <div className="ttl">
                                        All the Shiniest <h5>Shop Jewelry</h5>
                                    </div>
                                </a>
                             </div>
                         
                            <div className="inner topright">
                                <a href="#">	
                                    <img data-src={imagef} src= {imagef} alt="Heeled Boots" title="Heeled Boots" className="blur-up lazyload" />
                                    <div className="ttl">
                                        Every Little Things <h5>Shop Cosmetics</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 image-banner-2">
                            <div className="inner topleft">
                                <a href="#">	
                                    <img data-src={imageg} src= {imageg} alt="Caps" title="Caps" className="blur-up lazyload" />
                                    <div className="ttl">
                                        Elevate Every Look <h5>Shop Men's Clothing</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row img-grid-banner3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 image-banner-2">
                            <div className="inner center">
                                <a href="#">	
                                    <img data-src={imageh} src= {imageh} alt="Caps" title="Caps" className="blur-up lazyload" />
                                    <div className="ttl text-center">
                                        Shape Your look <h5>Shop Now</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="inner center">
                                <a href="#">	
                                    <img data-src={imagei} src= {imagei} alt="Shop Jewelry" title="Shop Jewelry" className="blur-up lazyload" />
                                    <div className="ttl">Shop Kids</div>
                                </a>
                             </div>
                         
                            <div className="inner topright">
                                <a href="#">	
                                    <img data-src= {imagej} src= {imagej} alt="Heeled Boots" title="Heeled Boots" className="blur-up lazyload" />
                                    <div className="ttl">
                                        Shop <h5>Kids Accessories</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

		  
		
        
		
           
           
        </>
    )
}
export default CategoryHome