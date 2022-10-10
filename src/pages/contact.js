import React from 'react'
import Layout from '../components/Layout'

export default function contact() {
  return (
    <Layout>
        <main className='page'> 
            <section className='contact-page'>
                <h2>Contact Us</h2>
                <h4>Please complete the form below to get in touch</h4>
                <form classname="form contact-form">
                    <div className='form-row'>
                        <label htmlFor="fname">First name</label>
                       <input type="text" name="fname" id="fname" />
                    </div>
                    <div className='form-row'>
                        <label htmlFor="lname">Last name</label>
                        <input type="text" name="lname" id="lname" />
                    </div>
                    <div className='form-row'>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className='form-row'>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" />
                    </div>
                    <div className='form-row'>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
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
