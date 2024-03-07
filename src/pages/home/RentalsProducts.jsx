import One from '../../assets/images/one.jpeg';
import Two from '../../assets/images/two.jpeg';
import Three from '../../assets/images/three.png';
import Four from '../../assets/images/four.png';
import Five from '../../assets/images/five.png';
import Six from '../../assets/images/six.png';
import { Content } from './Content'; 
import { ProductsHeading } from './Content';

const RentalsProducts = () => {
    // const Content = {
    //     heading: "Testing adads"
    // }

  return (
    <section id="rental-products" className="rental-products">

      
      <div className="container section-title" data-aos="fade-up">
        <h2>Browse Rental Products</h2>
        <p>{Content.heading} diverse range of rental product categories, from elegant furniture and stylish decor to cutting-edge audiovisual equipment, ensuring every aspect of your event is tailored to perfection.</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <article>

              <div className="post-img">
                <img src={ One } alt="" className="img-fluid" />
              </div>
                
              <div className='rental-productsCont'>
              <p className="post-category">{ ProductsHeading.Product1 }</p>
              <h2>$1.75+ VAT</h2>
</div>
            
             <div className='rental_productsCont-child'>

             <div className='rental_productsCont-child-1'>
                Color
                <div className='spans_product'>
                <span className='span1_product'></span>
                <span className='span2_product'></span>
                <span className='span3_product'></span>
                </div>
             </div>
           
             <div className='rental_products_btn'>
             <button>Order Now</button>
             </div>
             </div>

            </article>
          </div>
          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <article>

              <div className="post-img">
                <img src={ Three } alt="" className="img-fluid" />
              </div>
                
              <div className='rental-productsCont'>
              <p className="post-category">{ ProductsHeading.Product2 }</p>
              <h2>$1.75+ VAT</h2>
</div>
            
             <div className='rental_productsCont-child'>

             <div className='rental_productsCont-child-1'>
                Color
                <div className='spans_product'>
                <span className='span1_product'></span>
                <span className='span2_product'></span>
                <span className='span3_product'></span>
                </div>
             </div>
           
             <div className='rental_products_btn'>
             <button>Order Now</button>
             </div>
             </div>

            </article>
          </div>
          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <article>

              <div className="post-img">
                <img src={ Two } alt="" className="img-fluid" />
              </div>
                
              <div className='rental-productsCont'>
              <p className="post-category">{ ProductsHeading.Product3 }</p>
              <h2>$1.75+ VAT</h2>
</div>
            
             <div className='rental_productsCont-child'>

             <div className='rental_productsCont-child-1'>
                Color
                <div className='spans_product'>
                <span className='span1_product'></span>
                <span className='span2_product'></span>
                <span className='span3_product'></span>
                </div>
             </div>
           
             <div className='rental_products_btn'>
             <button>Order Now</button>
             </div>
             </div>

            </article>
          </div>
          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <article>

              <div className="post-img">
                <img src={ Four } alt="" className="img-fluid" />
              </div>
                
              <div className='rental-productsCont'>
              <p className="post-category">{ ProductsHeading.Product4 }</p>
              <h2>$1.75+ VAT</h2>
</div>
            
             <div className='rental_productsCont-child'>

             <div className='rental_productsCont-child-1'>
                Color
                <div className='spans_product'>
                <span className='span1_product'></span>
                <span className='span2_product'></span>
                <span className='span3_product'></span>
                </div>
             </div>
           
             <div className='rental_products_btn'>
             <button>Order Now</button>
             </div>
             </div>

            </article>
          </div>
          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <article>

              <div className="post-img">
                <img src={ Five } alt="" className="img-fluid" />
              </div>
                
              <div className='rental-productsCont'>
              <p className="post-category">{ ProductsHeading.Product5 }</p>
              <h2>$1.75+ VAT</h2>
</div>
            
             <div className='rental_productsCont-child'>

             <div className='rental_productsCont-child-1'>
                Color
                <div className='spans_product'>
                <span className='span1_product'></span>
                <span className='span2_product'></span>
                <span className='span3_product'></span>
                </div>
             </div>
           
             <div className='rental_products_btn'>
             <button>Order Now</button>
             </div>
             </div>

            </article>
          </div>
          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <article>

              <div className="post-img">
                <img src={ Six } alt="" className="img-fluid" />
              </div>
                
              <div className='rental-productsCont'>
              <p className="post-category">{ ProductsHeading.Product6 }</p>
              <h2>$1.75+ VAT</h2>
</div>
            
             <div className='rental_productsCont-child'>

             <div className='rental_productsCont-child-1'>
                Color
                <div className='spans_product'>
                <span className='span1_product'></span>
                <span className='span2_product'></span>
                <span className='span3_product'></span>
                </div>
             </div>
           
             <div className='rental_products_btn'>
             <button>Order Now</button>
             </div>
             </div>

            </article>
          </div>
          

        </div>

      </div>

    </section>
  )
}

export default RentalsProducts