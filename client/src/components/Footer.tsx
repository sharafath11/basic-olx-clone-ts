import React from 'react';

function Footer() {
  return (
    <div className="w-full">
      <div className="bg-gray-100 py-6 px-8 md:flex md:justify-between md:items-center">
        <div>
          <div className="text-xl font-bold mb-2">POPULAR LOCATIONS</div>
          <ul className="space-y-2">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>

        <div>
          <div className="text-xl font-bold mb-2">ABOUT US</div>
          <ul className="space-y-2">
            <li>About OLX Group</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>OLXPeople</li>
          </ul>
        </div>

        <div>
          <div className="text-xl font-bold mb-2">OLX</div>
          <ul className="space-y-2">
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#002f34] text-white py-4 px-8 md:flex md:justify-between md:items-center">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2020-2030 OLX</p>
      </div>
    </div>
  );
}

export default Footer;
