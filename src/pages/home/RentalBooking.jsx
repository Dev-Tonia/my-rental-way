import Rental1 from '../../assets/images/rental1.jpeg';
import Rental2 from '../../assets/images/rental2.png'

const RentalBooking = () => {
  return (
    <section id="rental-booking" className="rental-booking section-bg">
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
          <img src={ Rental1 } className="img-fluid" alt="My Image" />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 rental-booking d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <h5>We render </h5>
         
          <h3>Seamless rental and venue booking service</h3>
          <ul>
            <li>
            <i className="rental-booking-Icon1 bi bi-box"></i>
              <div>
                <h5><b>Voting</b></h5>
                <p>Like every other investment club, everyone is a member and as a result has a voting right</p>
              </div>
            </li>
            <li>
              <i className="rental-booking-Icon2 bi bi-ban"></i>
              <div>
                <h5><b>Stictly for Daytopians</b></h5>
                <p>You must be registered as a Daytopian to join the investment club. Reach out to <a href='mailto:admin@daytopiagroup.com' target='_blank'></a>admin@daytopiagroup.com</p>
              </div>
            </li>
            <li>
              <i className="rental-booking-Icon3 bi bi-ban"></i>
              <div>
                <h5><b>Stictly for Daytopians</b></h5>
                <p>You must be registered as a Daytopian to join the investment club. Reach out to <a href='mailto:admin@daytopiagroup.com' target='_blank'></a>admin@daytopiagroup.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
  )
}

export default RentalBooking