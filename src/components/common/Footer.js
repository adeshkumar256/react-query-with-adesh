import React from 'react'
import Facebook from '../icons/Facebook'
import Youtube from '../icons/Youtube'
import LinkedIn from '../icons/LinkedIn'
import Instagram from '../icons/Instagram'

export default function Footer() {
  return (
    <div className="bg-dark p-3 border-top border-dark">
      <div className="container-fluid overflow-hidden">
        <div className="row gy-5 gy-md-0 align-items-md-center">
          <div className="col-xs-12 col-md-3 order-0 order-md-0">
            <div className="copyright text-center text-md-start">
              &copy; {new Date().getFullYear()}. All Rights Reserved.
            </div>
          </div>

          <div className="col-xs-12 col-md-5 order-1 order-md-1">
            <div className="credits text-secondary text-center mt-2 fs-8">
              Built by <a href="https://adesh-kumar.netlify.app/" className="link-secondary text-decoration-none">Adesh Kumar</a> with <span className="text-primary">&#9829;</span>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 order-2 order-md-2">
            <div className="social-media-wrapper">
              <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-md-end">
                <li className="me-3">
                  <a href="https://www.facebook.com/adesh.kumar.16503" target='_blank' className="link-dark link-opacity-75-hover">
                    <Facebook />
                  </a>
                </li>
                <li className="me-3">
                  <a href="#!" className="link-dark link-opacity-75-hover">
                    <Youtube />
                  </a>
                </li>
                <li className="me-3">
                  <a href="https://www.linkedin.com/in/adeshkumar256" className="link-dark link-opacity-75-hover">
                    <LinkedIn />
                  </a>
                </li>
                <li className="">
                  <a href="https://www.instagram.com/adesh_k_prajapati" target='_blank' className="link-dark link-opacity-75-hover">
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
