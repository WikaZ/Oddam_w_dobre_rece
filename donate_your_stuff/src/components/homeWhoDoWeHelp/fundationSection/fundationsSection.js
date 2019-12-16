import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class FundationsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elementsToRender: [
                {
                    header: "Fundacja 'Dbam o Zdrowie'",
                    description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej.",
                    donation: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"

                },
                {
                    header: "Fundacja 'Dla Dzieci'",
                    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
                    donation: "ubrania, meble, zabawki"
                },
                {
                    header: "Fundacja 'Bez Domu'",
                    description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
                    donation: "ubrania, jedzenie, ciepłe koce"
                },
                {
                    header: "Fundacja 'Dbam o Zdrowie2'",
                    description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej.",
                    donation: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"

                },
                {
                    header: "Fundacja 'Dla Dzieci2'",
                    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
                    donation: "ubrania, meble, zabawki"
                },
                {
                    header: "Fundacja 'Bez Domu2'",
                    description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
                    donation: "ubrania, jedzenie, ciepłe koce"
                },
                {
                    header: "Fundacja 'Dbam o Zdrowie3'",
                    description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej.",
                    donation: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"

                },
                {
                    header: "Fundacja 'Dla Dzieci3'",
                    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
                    donation: "ubrania, meble, zabawki"
                },
                {
                    header: "Fundacja 'Bez Domu3'",
                    description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
                    donation: "ubrania, jedzenie, ciepłe koce"
                }

            ],
            currentPage: '',
            elPerPage: 3,


        }
    }

    handleClickPage = (e, i) => {
        this.setState({
            currentPage: i
        });
        console.log(this.state.currentPage, "currentpage");
    };

    render() {

        let elemPerPage = 3;
        const {currentPage, elementsToRender, elPerPage} = this.state;
        const indexOfLast = currentPage * elemPerPage;


        const indexOfFirst = indexOfLast - elemPerPage;
        const currentEl = elementsToRender.slice(indexOfFirst, indexOfLast)
        const elements = currentEl.map((el, i) => {

            return (
                <>
                    <Row key={i} className={"donationOrgList"}>
                        <Col lg={1} md={1} xs={1}></Col>
                        <Col lg={6} md={6} xs={6} className={'donateListDescription'}>
                            <h1> {el.header}</h1>
                            <p>{el.description}</p>
                        </Col>
                        <Col lg={4} md={4} xs={4} className={'donateListDonation'}>
                            <p>{el.donation}</p>
                        </Col>
                        <Col lg={1} md={1} xs={1}></Col>
                    </Row>

                    <Row>
                        <Col lg={1} md={1} xs={1}></Col>
                        <Col lg={10} md={10} xs={10}>
                            <div className={"line"}>

                            </div>
                        </Col>

                        <Col lg={1} md={1} xs={1}></Col>
                    </Row>

                </>
            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(elementsToRender.length / elPerPage); i++) {

            const element = <li key={i} onClick={(e) => this.handleClickPage(e, i)}
                                className={this.state.currentPage === i ? "" : "active"}>{i}</li>
            pageNumbers.push(element)


        }



        return (
            <>
                <Container fluid>
                    <Row>
                        <Col lg={3} md={3}>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                            <p className={"sectionHeader"}>W naszej bazie znajdziesz listę
                                zweryfikowanych Fundacji, z którymi
                                współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                        </Col>
                        <Col lg={3} md={3}>
                        </Col>
                    </Row>
                    {/*<Row>*/}

                        {/*<Col lg={12} md={12} xs={12}>*/}
                            <section>

                                {elements}


                            </section>
                    <Row className={'pagination'}>
                    <ul className={"pages"}>
                        {pageNumbers}
                    </ul>
                    </Row>

                </Container>
            </>
        )
    }
}

export default FundationsSection