import Relocate1 from '../../assets/images/relocation1.jpeg';
import Relocate2 from '../../assets/images/relocation2.png';

const RelocateMovers = () => {
  return (
    <section id="relocate" className="relocate">

    <div className="container">

      <div className="row gy-4 align-items-center relocate-item">
        <div className="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h3>We also render</h3>
          <h2 className='relocate_h2'>Relocation/Movers service</h2>
          <p>
          The moving process is easy and stress-free with MY WAY Rental Services Ltd. For movers 
          that are dependable and reasonably priced, trust us to handle your moving needs. For the easiest maneuver possible, pick MY WAY! 
          </p>
         
          <ul className='relocateDiv_child'>
          <li><i className="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><i className="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
        </ul>
        <a href="#" className="relocateDiv_child-Btn btn btn-get-started">Request for service</a>
        </div>
        <div className="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
          <div className="image-stack">
            <img src={ Relocate1 } alt="" className="stack-front" />
            <img src={ Relocate2 } alt="" className="stack-back" />
          </div>
        </div>
      </div>

     
    </div>

  </section>
  )
}

export default RelocateMovers