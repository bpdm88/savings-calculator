import React from "react";
import FormField from "./Formfield";

class Compound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            principal: null,
            regular: null,
            period: null,
            interest: null,
        };

        this.handleChangePrincipal = this.handleChangePrincipal.bind(this);
    }

    handleChangePrincipal(event) {
        this.setState({ principal: event.currentTarget.value });
    }

    render() {
        let { principal, regular, period, interest } = this.state;
        return (
            <section>
                <form>
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
                    />
                    <FormField label="Duration" value={period} type="number" />
                    <FormField
                        label="Annual Interest Rate"
                        value={interest}
                        type="number"
                    />
                    <button>Send</button>
                </form>
            </section>
        );
    }
}

export default Compound;
