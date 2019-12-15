import React from 'react';

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
            currentPage: "1",
            elPerPage: 3,


        }
    }

    handleClickPage=(e, i)=>{
        this.setState({
            currentPage:i
        })
        console.log(this.state.currentPage, "currentpage");
    };
    render() {

        let elemPerPage = 3;
        const {currentPage, elementsToRender, elPerPage} = this.state;
        const indexOfLast= currentPage * elemPerPage;


        const indexOfFirst = indexOfLast - elemPerPage;
        const currentEl = elementsToRender.slice(indexOfFirst, indexOfLast)
        const elements = currentEl.map((el, i) => {
            return (
                <div key={i} className={"donationOrgList"}>
                    <h1> {el.header}</h1>
                    <p>{el.description}</p>
                    <p>{el.donation}</p>
                </div>
            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(elementsToRender.length / elPerPage); i++) {

                    const element = <li key={i} onClick={(e)=>this.handleClickPage(e,i)} className={this.state.currentPage === i ? "" : "active"}>{i}</li>
                    pageNumbers.push(element)


        }

        //     function getPage(
        //
        //     currentPage
        // )
        //     {
        //         let endOfList = currentPage * elemPerPage < arrayToShowLength ? currentPage * elemPerPage : arrayToShowLength
        //         return (
        //           elementsToRender.slice((currentPage - 1) * elemPerPage, endOfList)
        //         )
        //     }
        //


        return (
            <>
                <p style={{color: "black", fontSize: "24px", width: "650px"}}>W naszej bazie znajdziesz listę
                    zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                <section>
                    {elements}
                    <ul className={"pages"}>
                        {pageNumbers}
                    </ul>
                </section>


            </>
        )
    }
}

export default FundationsSection