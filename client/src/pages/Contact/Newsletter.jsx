import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contact.css';

const Newsletter = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Required')
    });

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            const response = await fetch('http://localhost:3004/api/newsletter/subscribe', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            setStatus({ success: true, message: data.message || 'Subscribed succesfully' });
        } catch (error) {
            setStatus({ success: false, message: error.message || 'An error occurred' });
        }
        resetForm();
        setSubmitting(false);
    };

    return (
        <div className='newsletter-container'>
            <h2>Join our Newsletter</h2>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, status }) => (
                    <Form>
                        <div className='newsletter-form'>
                            <label htmlFor="email">Email Address</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Subscribe
                        </button>
                        {status && (
                            <div className={status.success ? "success" : "error"}>
                                {status.message}
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Newsletter;
