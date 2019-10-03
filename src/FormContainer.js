//having form business and handler methods
import React from 'react'
import FormComponents from './FormComponents'


class FormContainer extends React.Component {

    state = {
        name: "",
        family: "",
        age: "",
        sex: "",
        lang: [],
        country: "",
        desc: "",
        apiData: ""
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        if (type === "checkbox") {
            let langarr = this.state.lang;

            if (checked)
                langarr.push(name)
            else
                langarr = langarr.filter(item => item !== name)

            this.setState({
                [checked]: !checked,
                lang: langarr
            })
        } else

            this.setState({
                [name]: value
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => this.setState({
                    apiData: data
                })
            )
            .catch(err => this.setState({
                apiData:err
            }))

    }

    render() {

        return (
            <div>
                <FormComponents data={this.state} handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default FormContainer