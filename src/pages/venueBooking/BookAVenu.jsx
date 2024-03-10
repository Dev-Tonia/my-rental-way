

const BookAVenu = () => {

  return (
      <section id="get-started" className="get-started section-bg">
        <div className="container">
        <div className="get-started_BookA-Venu">
        <h2 className="text-center book-a-menu_h2">Book A Venue</h2>
          <form action="" method="POST">
            <div className="form1Flex">
              <div className="formFlex_i">
                <label htmlFor="Name">Name Of Organizer</label>
                <input type="text"  placeholder="Enter Name" name="Name" required />
              </div>
              <div className="formFlex_ii">
                <label htmlFor="Email">Email Address</label>
                <input type="email"  name="Email" id="Email" placeholder="Enter Email" required  />
              </div>
            </div>

            <div className="form1Flex">
              <div className="formFlex_i">
                <label htmlFor="PhoneNumber">Phone Number</label>
                <input type="number"  placeholder="Enter Contact Number" name="PhoneNumber" required  />
              </div>
              <div className="formFlex_ii">
                <label htmlFor="Country">Number Of Guest</label>
                <input type="nuber" name="Country" id="Country"  placeholder="Enter Country Name" required  />
              </div>
            </div>

            <div className="form1Flex">
              <div className="formFlex_i">
               <label htmlFor="WhatsappNumber">WhatsApp Number</label>
                <input type="number" name="WhatsappNumber" id="WhatsappNumber" placeholder="Enter WhatsApp Number"  required />
              </div>
              <div className="formFlex_ii form2">
              <label htmlFor="Budget">Approximate Budget</label>
              <select id="Budget" name="Budget"  required>
                <option value="" disabled>Select Approximate Budget</option>
                <option value="$5000 to $10000">$5000 to $10000</option>
                <option value="$10000 to $25000">$10000 to $25000</option>
                <option value="$25000 to $50000">$25000 to $50000</option>
                <option value="$50000+">$50000+</option>
                <option value="Negotiable">Negotiable</option>
              </select>
              </div>
            </div>

            <div className="form1Flex">
              <div className="formFlex_i">
                <label htmlFor="Position">Event Type</label>
                <select id="Referrals" name="Referrals" required>
                  <option value="" disabled>Referral</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Clutch">Clutch</option>
                  <option value="Family or Friends">Family or Friends</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Sortlist">Sortlist</option>
                  <option value="TrustPilot">TrustPilot</option>
                  <option value="GoodFirm">GoodFirm</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="formFlex_ii">
                <label htmlFor="Referrals">Other Information</label>
                <select id="Referrals" name="Referrals" required>
                  <option value="" disabled>Referral</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Clutch">Clutch</option>
                  <option value="Family or Friends">Family or Friends</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Sortlist">Sortlist</option>
                  <option value="TrustPilot">TrustPilot</option>
                  <option value="GoodFirm">GoodFirm</option>
                  <option value="Others">Others</option>
                </select>
              </div>
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