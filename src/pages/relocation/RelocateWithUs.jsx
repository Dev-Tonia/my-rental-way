

const BookAVenu = () => {

    return (
        <section id="get-started" className="get-started section-bg">
          <div className="container">
          <div className="get-started_BookA-Venu">
          <h2 className="text-center book-a-menu_h2">Relocate with us</h2>
            <form action="" method="POST">
              <div className="form1Flex">
                <div className="formFlex_i">
                  <label htmlFor="Name">Name</label>
                  <input type="text"  placeholder="Enter Name" name="Name" required />
                </div>
                <div className="formFlex_ii">
                  <label htmlFor="Email">Email Address</label>
                  <input type="email"  name="Email" id="Email" placeholder="Enter Email" required  />
                </div>
              </div>
  
              <div className="form1Flex">
                <div className="formFlex_i">
                  <label htmlFor="Budget">Type Of Goods</label>
                  <select id="Budget" name="Budget"  required>
                    <option value="" disabled>Select Approximate Budget</option>
                    <option value="$5000 to $10000">$5000 to $10000</option>
                    <option value="$10000 to $25000">$10000 to $25000</option>
                    <option value="$25000 to $50000">$25000 to $50000</option>
                    <option value="$50000+">$50000+</option>
                    <option value="Negotiable">Negotiable</option>
                  </select>
                </div>
                <div className="formFlex_ii form2">
                  <label htmlFor="WhatsappNumber">Phone Number</label>
                  <input type="number" name="WhatsappNumber" id="WhatsappNumber" placeholder="Enter WhatsApp Number"  required />
                </div>
              </div>

              <div className="form1Flex">
                <div className="formFlex_i">
                  <label htmlFor="WhenStart">Move From</label>
                  <input type="text" placeholder="When are you ready to start?" name="WhenStart"  required  />
                </div>
                <div className="formFlex_ii">
                  <label htmlFor="CompanyName"> Move To</label>
                  <input type="text" name="CompanyName" id="CompanyName" placeholder="Enter Post Code"  />
                </div>
              </div>
  
              <div className="formGeneral">
                <label htmlFor="ProjectDetails">Message</label>
                <textarea name="ProjectDetails" id="ProjectDetails" cols="10" rows="4" placeholder="Write Your Message Here" ></textarea>
                </div>


  
              <div className="QuoteBtn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          </div>
        </section>
    );
  };
  
  export default BookAVenu;