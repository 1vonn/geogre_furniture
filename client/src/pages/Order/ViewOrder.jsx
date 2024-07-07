import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './viewOrder.css';

const ViewOrder = () => {
    const initialValues = {
        fullName: '',
        email: ''
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required')
    });

    const handleSubmit = async (values, { setSubmitting, setStatus }) => {
        try {
            const response = await fetch('http://localhost:3004/api/orders/view', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            setStatus({ success: true, message: data.message || `Hello ${values.fullName}, here are your orders!` });
        } catch (error) {
            setStatus({ success: false, message: error.message || 'An error occurred' });
        }
        setSubmitting(false);
    };

    return (
        <div className="view-orders-form">
            <h2>View Your Orders</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, status }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <Field type="text" name="fullName" />
                            <ErrorMessage name="fullName" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Loading...' : 'Click Here to View Your Orders'}
                        </button>
                        {status && (
                            <div className={`status-message ${status.success ? 'success' : 'error'}`}>
                                {status.message}
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ViewOrder;
