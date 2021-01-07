import React from "react";
import FormField from "./Formfield";
import Detail from "./Detail";

class Compound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            principal: "",
            monthly: "",
            period: "",
            interest: "",
            future: "",
        };

        this.handleChangePrincipal = this.handleChangePrincipal.bind(this);
        this.handleChangeMonthly = this.handleChangeMonthly.bind(this);
        this.handleChangePeriod = this.handleChangePeriod.bind(this);
        this.handleChangeInterest = this.handleChangeInterest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePrincipal(event) {
        this.setState({ principal: event.currentTarget.value });
    }

    handleChangeMonthly(event) {
        this.setState({ monthly: event.currentTarget.value });
    }

    handleChangePeriod(event) {
        this.setState({ period: event.currentTarget.value });
    }

    handleChangeInterest(event) {
        this.setState({ interest: event.currentTarget.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        let { principal, monthly, period, interest } = this.state;

        let power = 12 * period;
        let rate = interest / 100 / 12 + 1;

        let futurePrincipal = principal * Math.pow(rate, power);
        let futureMonthly =
            monthly * ((Math.pow(rate, power) - 1) / (interest / 100 / 12));

        let total = futureMonthly + futurePrincipal;

        let converted = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(total);

        this.setState({ future: converted });
    }

    render() {
        let { principal, regular, period, interest, future } = this.state;
        return (
            <section>
                <Detail />
                <form onSubmit={this.handleSubmit}>
                    <FormField
                        label="Lump Sum"
                        value={principal}
                        type="number"
                        handleChange={this.handleChangePrincipal}
                    />
                    <FormField
                        label="Monthly Saving"
                        value={regular}
                        type="number"
                        handleChange={this.handleChangeMonthly}
                    />
                    <FormField
                        label="Duration"
                        value={period}
                        type="number"
                        handleChange={this.handleChangePeriod}
                    />
                    <FormField
                        label="Annual Interest Rate"
                        value={interest}
                        type="number"
                        handleChange={this.handleChangeInterest}
                    />
                    <button>Send</button>
                </form>
                <div>
                    <h1>{future}</h1>
                </div>
            </section>
        );
    }
}

export default Compound;
