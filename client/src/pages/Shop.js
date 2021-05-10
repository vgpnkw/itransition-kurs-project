import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {company} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => company.setTypes(data))
        fetchBrands().then(data => company.setCountries(data))
        fetchDevices(null, null, 1, 2).then(data => {
            company.setDevices(data.rows)
            company.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(company.selectedType.id, company.selectedCountry.id, company.page, 2).then(data => {
            company.setDevices(data.rows)
            company.setTotalCount(data.count)
        })
    }, [company.page, company.selectedType, company.selectedCountry,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
