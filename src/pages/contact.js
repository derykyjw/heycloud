import React from 'react'
import Layout from '../components/Layout'

export default function contact() {
  return (
    <Layout>
        <main className='page'>
            <section className='contact-page'>
                <h2>Contact Us</h2>
                <h4>Please complete the form below to get in touch</h4>
                <form classname="form contact-form" action="https://formspree.io/f/meqweppd" method="POST">
                    <div className='form-row'>
                        <label htmlFor="fname">First name</label>
                       <input type="text" name="First Name" id="fname" required/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor="lname">Last name</label>
                        <input type="text" name="Last Name" id="lname" required/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="Email" id="email" required/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="Subject" id="subject" required/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor="message">Message</label>
                        <textarea name="Message" id="message" required></textarea>
                    </div>
                    <button type='submit' className='btn block'>
                        submit
                    </button>
                </form>   
            </section>
        </main>
    </Layout>
  )
}
