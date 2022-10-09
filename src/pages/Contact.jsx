import React from 'react'


function Contact() {
  return (
    <div>
     

      <main id="main">
   {/* ======= Contact Section ======= */}
<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Contact</h2>
      <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
    </div>
    <div className="row gx-lg-0 gy-4">
   
      <div className="col-lg-12">
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows={7} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>{/* End Contact Form */}
    </div>
  </div>
</section>{/* End Contact Section */}
</main>

    </div>
  )
}

export default Contact
