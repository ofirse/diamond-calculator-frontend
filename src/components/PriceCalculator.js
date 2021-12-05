import React, {useEffect, useState} from 'react';
import {getAllOptions, getDiamondPrice} from "../api/calculatorApi";
import {
    Alert,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container, CustomInput,
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Row
} from "reactstrap";

const PriceCalculator = () => {

    const emptyForm = {caratWeight: '', cut: '', color: '', clarity: ''};

    const [isLoading, setIsLoading] = useState(true);
    const [caratWeightOptions, setCaratWeightOptions] = useState([]);
    const [cutOptions, setCutOptions] = useState([]);
    const [colorOptions, setColorOptions] = useState([]);
    const [clarityOptions, setClarityOptions] = useState([]);
    const [validated, setValidated] = useState(false);
    const [price, setPrice] = useState('');
    const [form, setForm] = useState({...emptyForm});
    const [alertMsg, setAlertMsg] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            getPrice().then(res => setPrice(res))
                .catch(() => {
                    setAlertMsg('An error occurred while trying to calculate diamond price');
                });
        }

        setValidated(true);
    };

    const handleReset = () => {
        setForm({...emptyForm});
        setPrice('');
    };

    const getPrice = async () => {
        return await getDiamondPrice(form);
    };

    const getOptions = (optionArray) => {
        const options = optionArray ? (optionArray.map((option, index) =>
            <option key={index + 1} value={option}>{option}</option>
        )) : [];

        options.unshift(<option key={0} value={""}>Choose</option>);

        return options;
    };

    useEffect(() => {
        async function fetchAll() {
            return await getAllOptions();
        }

        fetchAll().then((res) => {
            setCutOptions(res[0].data);
            setCaratWeightOptions(res[1].data);
            setColorOptions(res[2].data);
            setClarityOptions(res[3].data);
        }).catch(() => {
            setAlertMsg('An error occurred while trying to fetch categories options');
        }).finally(() => {
                setIsLoading(false);
            });
    }, []);

    return <Container className="bg-light calc-container">
        <Row className="row">
            <Col className="md-4">
                <Card className="card mb-3 mb-md-0">
                    <CardTitle className="h5">Calculate Diamond Price</CardTitle>
                    <CardBody>
                        {alertMsg ?
                            <Alert className="alert-danger">
                                {alertMsg}
                            </Alert>
                            : ''
                        }
                        <div className={isLoading ? 'view-loader' : ''}>
                            {!isLoading ?
                                (<>
                                        <div className="row">
                                            <Col>
                                                <Form noValidate onSubmit={handleSubmit} onReset={handleReset}>
                                                    <Row className="mb-3">
                                                        <FormGroup cols="12" sm="6" className="col mr-4">
                                                            <Label>Carat Weight</Label>
                                                            <CustomInput invalid={validated && form.caratWeight === ''}
                                                                         required
                                                                         type="select" id="selectCarat"
                                                                         name="selectCarat"
                                                                         onChange={(e) => setForm({
                                                                             ...form,
                                                                             caratWeight: e.target.value
                                                                         })}>
                                                                {getOptions(caratWeightOptions)}
                                                            </CustomInput>
                                                            <FormFeedback>
                                                                Please choose a carat weight.
                                                            </FormFeedback>
                                                        </FormGroup>
                                                        <FormGroup cols="12" sm="6" className="col">
                                                            <Label>Cut</Label>
                                                            <CustomInput invalid={validated && form.cut === ''} required
                                                                         type="select"
                                                                         id="selectCut" name="selectCut"
                                                                         onChange={(e) => setForm({
                                                                             ...form,
                                                                             cut: e.target.value
                                                                         })}>
                                                                {getOptions(cutOptions)}
                                                            </CustomInput>
                                                            <FormFeedback>
                                                                Please choose a cut.
                                                            </FormFeedback>
                                                        </FormGroup>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <FormGroup cols="12" sm="6"
                                                                   className="col mr-4">
                                                            <Label>Color</Label>
                                                            <CustomInput invalid={validated && form.color === ''}
                                                                         required
                                                                         type="select"
                                                                         id="selectColor" name="selectColor"
                                                                         onChange={(e) => setForm({
                                                                             ...form,
                                                                             color: e.target.value
                                                                         })}>
                                                                {getOptions(colorOptions)}
                                                            </CustomInput>
                                                            <FormFeedback type="invalid">
                                                                Please choose a color.
                                                            </FormFeedback>
                                                        </FormGroup>
                                                        <FormGroup cols="12" sm="6"
                                                                   className="col">
                                                            <Label>Clarity</Label>
                                                            <CustomInput invalid={validated && form.clarity === ''}
                                                                         required
                                                                         type="select"
                                                                         id="selectClarity" name="selectClarity"
                                                                         onChange={(e) => setForm({
                                                                             ...form,
                                                                             clarity: e.target.value
                                                                         })}>
                                                                {getOptions(clarityOptions)}
                                                            </CustomInput>
                                                            <FormFeedback>
                                                                Please choose a clarity.
                                                            </FormFeedback>
                                                        </FormGroup>
                                                    </Row>
                                                    <button className="btn btn-outline-info mt-md-auto mt-3 mr-3"
                                                            type="submit">Calculate
                                                    </button>
                                                    <button className="btn btn-info mt-md-auto mt-3"
                                                            type="reset">Reset
                                                    </button>
                                                </Form>
                                            </Col>
                                        </div>
                                        <Row className="row-sm text-center price">
                                            {price ? `Price: ${price} NIS` : ''}
                                        </Row>
                                    </>
                                ) : ''}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
};

export default PriceCalculator
