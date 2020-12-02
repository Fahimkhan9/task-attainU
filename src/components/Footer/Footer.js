import React from "react";

const Footer = () => {
  return (
    <div className="pt-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h6 className="pb-3">AttainU</h6>
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
            <ul style={{ listStyle: "none" }}>
              <li className="pb-2">Blog</li>
              <li className="pb-2">Forum</li>
              <li className="pb-2">Privacy Policy</li>
              <li className="pb-2">Terms & Conditions</li>
              <li className="pb-2">Sitemap</li>
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
        <div className="row">
          <p className="mx-auto text-warning">
            Copyright © 2020, LeetU Education Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
