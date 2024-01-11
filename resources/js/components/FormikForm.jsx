import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState, useRef } from 'react';
import axiosClient from '../components/AxiosClient';
import { useNavigate } from 'react-router-dom';

const phoneRegExp = /^(05)([0-9]{2})s?([0-9]{3})s?([0-9]{2})s?([0-9]{2})$/

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('"Bu alan zorunludur."'),
    mail: Yup.string().email('Invalid email').required('"Bu alan zorunludur."'),
    phone: Yup.string().matches(phoneRegExp, 'Lütfen telefon numaranızı istenilen formatta giriniz.').required('Lütfen bir telefon numarası giriniz.'),
    city: Yup.string().required('"Bu alan zorunludur."'),
    message: Yup.string().required('"Bu alan zorunludur."'),
});
export default function FormikForm() {
    const contactRef = useRef();
    const [cities, setCities] = useState([]);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const fullUrl = window.location.href;
    const ref = useRef();

    const sendForm = (value) => {
        axiosClient
            .post("api/contact", value)
            .then(function (response) {
                window.dataLayer.push({
                    event: 'virtualPageView',
                    virtualPageURL: "/tesekkurler",
                    virtualPageTitle: "Teşekkürler | Securitas Technology"
                });
                contactRef.current?.resetForm()
                setSuccess(true)
                navigate('/tesekkurler');
            })
    }

    useEffect(() => {
        axiosClient
            .get('api/cities')
            .then((res) => {
                setCities(res.data);
            })
    }, []);

    return (
        <div style={{ height: "100%" }}>
            <Formik
                initialValues={{
                    name: '',
                    mail: '',
                    phone: '',
                    city: '',
                    message: '',
                    picked: '',
                    fullurl: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    values.fullurl = fullUrl;
                    sendForm(values);
                }}
                innerRef={contactRef}
            >
                {({ errors, touched }) => (
                    <Form className='sensormatic-form'>
                        <div className="col-12">
                            <div className='form-item mb-3'>
                                <p className='sec-blue'>Ad Soyad</p>
                                <Field name="name" />
                            </div>
                            {errors.name && touched.name ? (
                                <div><p className='sec-blue' style={{ fontSize: "18px", fontWeight: "bold" }}>{errors.name}</p></div>
                            ) : null}
                        </div>

                        <div className="col-12">
                            <div className='form-item mb-3'>
                                <p className='sec-blue'>Telefon Numarası</p>
                                <Field name="phone" required placeholder="05XX-XXX-XX-XX" />
                            </div>
                            {errors.phone && touched.phone ? (
                                <div><p className='sec-blue' style={{ fontSize: "18px", fontWeight: "bold" }}>{errors.phone}</p></div>
                            ) : null}
                        </div>

                        <div className="col-12">
                            <div className='form-item mb-3'>
                                <p className='sec-blue'>E-Posta Adresi</p>
                                <Field name="mail" type="email" />
                            </div>
                            {errors.mail && touched.mail ? <div><p className='sec-blue' style={{ fontSize: "18px", fontWeight: "bold" }}>{errors.mail}</p></div> : null}
                        </div>

                        <div className="col-12">
                            <div className='form-item mb-3'>
                                <p className='sec-blue'>Şehir</p>
                                <Field as="select" name="city">
                                    <option selected>Lütfen Seçin</option>
                                    {cities.map(city => <option value={city.city}>{city.city}</option>)}
                                </Field>
                            </div>
                            {errors.city && touched.city ? <div><p className='sec-blue' style={{ fontSize: "18px", fontWeight: "bold" }}>{errors.city}</p></div> : null}
                        </div>

                        <div className="col-12">
                            <div className='form-item'>
                                <p className='sec-blue'>Mesajınızı Giriniz</p>
                                <Field name="message" component="textarea" />
                            </div>
                            {errors.message && touched.message ? <div><p className='sec-blue' style={{ fontSize: "18px", fontWeight: "bold" }}>{errors.message}</p></div> : null}
                        </div>

                        <div className="col-12">
                            <p className='sec-blue'>Ürün, hizmet ve kampanyaların reklam amaçlı sunulabilmesi için kişisel verilerimin işlenmesine ve tarafıma tanıtım ve reklam içerikli ticari elektronik ileti gönderilmesine;</p>
                            <div className='mt-3 d-flex align-items-center' role="group" aria-labelledby="my-radio-group">
                                <label style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                                    <Field type="radio" name="picked" value="izinvar" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                                    <span className='sec-blue'>İzin veriyorum.</span>
                                </label>
                                <label style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                                    <Field type="radio" name="picked" value="izinyok" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                                    <span className='sec-blue'>İzin vermiyorum.</span>
                                </label>
                            </div>
                            <p className='mt-3 sec-blue'>
                                “Vereceğiniz kişisel bilgileriniz hizmet verilmesi amacıyla sizinle iletişime geçilmesi süreçlerinde tarafımızca işlenecektir.
                                Kişisel Verilerin Korunması ve İşlenmesi Politikası metnine <a href='/kurumsal/kisisel-verilerin-korunmasi-ve-islenmesi-politikasi' style={{ fontWeight: "bold" }}>buradan</a> ulaşabilirsiniz.”
                            </p>
                        </div>


                        <div className="col-12">
                            <button onSubmit={() => sendForm(initialValues)} className='help-background-purple mt-2' type="submit">Gönder</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}