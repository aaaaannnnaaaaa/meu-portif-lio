import './contact.css';

const Contacts = () => {
  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2 className='contact-title'>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <h4> Email </h4>
            <h5> anacarolinemena11@gmail.com </h5>
            <a className='message' href="anacarolinemena11@gmail.com"> Send a message </a>
          </article>
        </div>

        <form>
          <input type="text" name="name" placeholder="Your Full Name" required />  {/* client-side validation */}
          <input type="email" name='email' placeholder='Your Email' required /> 

          <button type="submit" className='btn'>Send Message</button>
        </form>
      </div>    
    </section>
  );
}

export default Contacts;
