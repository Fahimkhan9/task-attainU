import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>
              AttainU is a scalable college alternative, focusing on
              high-quality, industry-aligned learning outcomes, targeted towards
              highly motivated individuals looking to get into high growth
              careers
            </p>
            <p>* Registration fee applicable</p>
          </div>
          <div className="col-md-4">
            <p>Important Links</p>
            <hr />
            <ul>
              <li>Blog</li>
              <li>Forum</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="col-md-4">
            <div>
              <p>Contact Us</p>
              <hr />
              <p>For Admissions:</p>
              <p> 080-47192019</p>
              <p>admissions@attainu.com</p>
            </div>
            <div>
              <p>For Hiring Partners:</p>
              <p>hiringpartners@attainu.com</p>
            </div>
            <div>
              <p>Office Address:</p>
              <address>
                BHIVE Workspace, L-148, 5th Main Rd, Sector 6, HSR Layout,
                Bengaluru, Karnataka 560102
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
