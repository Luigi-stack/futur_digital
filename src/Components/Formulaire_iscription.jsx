/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

// Importation de l'image
import jetset from '../assets/jetset.png';

const Formulaire_inscription = () => {
    // Déclaration des états locaux
    const [validated, setValidated] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Gestion de la soumission du formulaire
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    // Fonction pour basculer la visibilité du mot de passe
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Container className='nav_bar'>
            <Row className="justify-content-center align-items-center">
                {/* Titre du formulaire */}
                <h2 className='mb-5 text-center' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">Inscrivez-vous</h2>

                <Col md={6} xl={4} data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    {/* Formulaire d'inscription */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {/* Champ pour le nom complet */}
                        <Form.Group className='mb-3 mx-4 mx-md-0 mx-lg-4' controlId="formFullName">
                            <Form.Label className='fst-italic fw-normal'>Nom Complet</Form.Label>
                            <Form.Control className='border-0' type="text" placeholder="Entrez votre nom complet" required />
                            <Form.Control.Feedback type="invalid">Veuillez fournir votre nom complet.</Form.Control.Feedback>
                        </Form.Group>

                        {/* Champ pour l'email */}
                        <Form.Group className='mb-3 mx-4 mx-md-0 mx-lg-4' controlId="formEmail">
                            <Form.Label className='fst-italic fw-normal'>Email</Form.Label>
                            <Form.Control className='border-0' type="email" placeholder="Entrez votre email" required />
                            <Form.Control.Feedback type="invalid">Veuillez fournir une adresse email valide.</Form.Control.Feedback>
                        </Form.Group>

                        {/* Champ pour le mot de passe */}
                        <Form.Group className='mb-3 mx-4 mx-md-0 mx-lg-4' controlId="formPassword">
                            <Form.Label className='fst-italic fw-normal'>Mot de passe</Form.Label>
                            <InputGroup>
                                <Form.Control className='border-0' type={passwordVisible ? "text" : "password"} placeholder="Mot de passe" required />
                                <InputGroup.Text className='bg-white border-0' id="basic-addon2">
                                    {/* Icône pour basculer la visibilité du mot de passe */}
                                    <i className="eye-icon" onClick={togglePasswordVisibility}>
                                        {passwordVisible ? (
                                            <BsEyeSlash className='icon_eye' />
                                        ) : (
                                            <BsEye className='icon_eye' />
                                        )}
                                    </i>
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>

                        {/* Champ pour la confirmation du mot de passe */}
                        <Form.Group className='mb-3 mx-4 mx-md-0 mx-lg-4' controlId="formConfirmPassword">
                            <Form.Label className='fst-italic fw-normal'>Confirmer le mot de passe</Form.Label>
                            <InputGroup>
                                <Form.Control className='border-0' type={passwordVisible ? "text" : "password"} placeholder="Confirmer le mot de passe" required />
                                <InputGroup.Text className='bg-white border-0' id="basic-addon2">
                                    {/* Icône pour basculer la visibilité du mot de passe */}
                                    <i className="eye-icon" onClick={togglePasswordVisibility}>
                                        {passwordVisible ? (
                                            <BsEyeSlash className='icon_eye' />
                                        ) : (
                                            <BsEye className='icon_eye' />
                                        )}
                                    </i>
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>

                        {/* Option "Se souvenir de moi" */}
                        <div className='d-flex justify-content-between align-items-center me-4 mb-2'>
                            <Form.Group className='mb-3 mx-4 mx-md-0 mx-lg-4' controlId="formCheck">
                                <Form.Check type="checkbox" label="Se souvenir de moi" required />
                            </Form.Group>
                            {/* Bouton pour soumettre le formulaire */}
                            <Button variant="primary" type="submit">S'inscrire</Button>
                        </div>

                        {/* Texte "Ou" */}
                        <p className='text-center fst-italic fw-normal'>Ou</p>

                        {/* Boutons de connexion avec Facebook et Google */}
                        <div className="text-center mb-3">
                            <a href=""><FaFacebook className='fs-2 text-primary me-4 facebook_icon' /></a>
                            <a href=""><AiFillGoogleCircle className='fs-1 text-danger google_icon' /></a>
                        </div>
                    </Form>

                    {/* Lien vers la page de connexion */}
                    <p className="text-center fst-italic fw-normal">Déjà inscrit ? <a href="/login">Connexion</a></p>
                </Col>

                {/* Image illustrative */}
                <Col md={6} xl={4} className='mb-5' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <img className='img-fluid rounded-5 shadow' src={jetset} alt="traveller" />
                </Col>
            </Row>
        </Container>
    );
};

export default Formulaire_inscription;