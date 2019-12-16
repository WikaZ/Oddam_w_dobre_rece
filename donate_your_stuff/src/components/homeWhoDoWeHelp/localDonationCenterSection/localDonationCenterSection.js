import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class LocalDonationCenterSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elementsToRender: [
                {
                    header: "Organizacja 'Lorem Ipsum 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aspernatur at, culpa nam nemo provident qui.",
                    donation: "Lorem ipsum dolor."

                },
                {
                    header: "Organizacja 'Lorem Ipsum 2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aspernatur at, culpa nam nemo provident qui.",
                    donation: "Lorem ipsum dolor."
                },
                {
                    header: "Organizacja 'Lorem Ipsum 3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aspernatur at, culpa nam nemo provident qui.",
                    donation: "Lorem ipsum dolor."
                }
            ],
            currentPage: 1,
            elPerPage: 3
        }
    }

    handleClickPage = (e, i) => {
        this.setState({
            currentPage: i
        })
    }

    render() {
        const {elementsToRender, elPerPage, currentPage} = this.state;
        const stop = currentPage * elPerPage;
        const start = stop - elPerPage;
        const currentEl = elementsToRender.slice(start, stop)
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

                    <Row key={i}>
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
        const pageNum = [];
        for (let i = 1; i <= Math.ceil(elementsToRender.length / elPerPage); i++) {


            const pageLink = <li key={i} onClick={(e) => {
                this.handleClickPage(e, i)
            }}>{i}</li>
            pageNum.push(pageLink)


        }
        return (
            <>

                <Container fluid>
                    <Row>
                        <Col lg={3} md={3}>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                            <p className={"sectionHeader"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam doloribus esse excepturi,
                                illo iste mollitia nostrum odio quam.</p>
                        </Col>
                        <Col lg={3} md={3}>
                        </Col>
                    </Row>

                    <section>

                        {elements}


                    </section>
                    <Row className={'pagination'}>
                        <ul className={"pages"}>
                            {pageNum.length === 1 ? null : pageNum }
                        </ul>
                    </Row>

                </Container>
            </>
        )
    }
}

export default LocalDonationCenterSection