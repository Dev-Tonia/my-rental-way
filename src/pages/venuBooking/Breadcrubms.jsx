import Slide1 from '../../assets/images/venubooking.jpeg';

const Breadcrumbs = () => {
  const carouselItemStyle1 = {
    backgroundImage: `url(${Slide1})`,
  }

  return (
    <section id="breadcrumbs">
    <div id="breadcrumbsCarousel" data-bs-interval="2000" className="carousel slide carousel-fade" data-bs-ride="carousel">

      <ol className="carousel-indicators" id="breadcrumbs-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">


        <div className="carousel-item breadcrumbs_background active"  style={carouselItemStyle1}>
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown"> Explore Our Versatile Venue Options for Unforgettable Events on Our Platform</h2>
             
              <h4 className='breadcrunbs-h4'>Unlock the Perfect Space for Every Occasion with Our Effortless Venue Booking Experience."</h4>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Breadcrumbs
