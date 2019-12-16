import React from 'react';

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
                    <div key={i} className={"donationOrgList"}>
                        <h1>{el.header}</h1>
                        <p>{el.description}</p>
                        <p>{el.donation}</p>
                    </div>
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
                <div className={"donationOrgSection"}>
                    <p className={"sectionHeader"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        aperiam doloribus esse excepturi,
                        illo iste mollitia nostrum odio quam!</p>
                    <section> {elements}</section>
                    <section>
                        <ul className={"pages"}>
                            {pageNum.length === 1 ? null : pageNum }
                        </ul>
                    </section>
                </div>
            </>
        )
    }
}

export default LocalDonationCenterSection