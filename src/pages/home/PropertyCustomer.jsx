import Rental1 from '../../assets/images/rental1.jpeg';
import Rental2 from '../../assets/images/rental2.png'

const PropertyCustomer = () => {
  return (
    <section id="property-customer" className="property-customer section-bg">
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
          <img src={ Rental1 } className="img-fluid" alt="My Image" />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 property-customer d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <h5>MY WAY rentals provide  </h5>
         
          <h3>Property Benefit for customers</h3>
          <p className='property-customer_p'>
          By providing a transformative rent-to-own experience that enables people to realize their dream of homeownership while promoting strong, sustainable communities, MY WAY Rental seeks to alter the traditional real estate landscape.
          </p>
          <ul className='property-Customer_ul'>
            <li>
            <i className="property-customer-Icon1 bi bi-box"></i>
              <div>
                <p>
                Affordable path to house ownership, MY WAY Rental offers an affordable and accessible way for individuals to step onto the property ladder without a substantial upfront investment
                </p>
              </div>
            </li>
            <li>
              <i className="property-customer-Icon2 bi bi-ban"></i>
              <div>
               
                <p>
                Customisable plans empower customers to tailor their rent-to-own journey according to their financial goals and preferences.

                </p>
              </div>
            </li>
            <li>
              <i className="property-customer-Icon3 bi bi-ban"></i>
              <div>
                
                <p>
                MY WAY Rental provides educational resources and financial guidance, ensuring that customers are well-informed and confident throughout the process.

                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
  )
}

export default PropertyCustomer