import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './orderForm.css';

const OrderForm = () => {
    const initialValues = {
        fullName: '',
        phoneNumber: '',
        deliveryLocation: '',
        categoryType: '',
        email: ''
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full name is required'),
        phoneNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
            .required('Phone number is required'),
        deliveryLocation: Yup.string().required('Delivery location is required'),
        categoryType: Yup.string().required('Category type is required'),
        email: Yup.string().email('Invalid email address').required('Email is required')
    });

    const deliveryLocations = ['Muranga', 'Nairobi', 'Thika'];
    const categoryTypes = ['Dining Chairs', 'Tables', 'Beds', 'TV Stand', 'Sofa', 'Spacious Sofa'];

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            const response = await fetch('http://localhost:3004/api/orders', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();

            if (response.status === 201) {
                setStatus({ success: true, message: 'Order sent successfully!' });
            } else {
                setStatus({ success: false, message: data.message || 'Failed to send order' });
            }
        } catch (error) {
            setStatus({ success: false, message: 'An error occurred' });
        }
        setSubmitting(false);
        resetForm();
    };

    return (
        <div className="order-form">
            <h2>Order Form</h2>
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
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field type="tel" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deliveryLocation">Delivery Location</label>
                            <Field as="select" name="deliveryLocation">
                                <option value="">Select Delivery Location</option>
                                {deliveryLocations.map((location, index) => (
                                    <option key={index} value={location}>{location}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="deliveryLocation" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="categoryType">Category Type</label>
                            <Field as="select" name="categoryType">
                                <option value="">Select Category Type</option>
                                {categoryTypes.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="categoryType" component="div" className="error-message" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Order'}
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

export default OrderForm;
