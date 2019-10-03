//having presentation

import React from "react";

class FormComponents extends React.Component {
    render() {

        console.log(this.props.data)
        return (
            <form onSubmit={this.props.handleSubmit} className="form-group">


            <input type="text" name="name" value={this.props.data.name} placeholder="name" className="form-control form-inline w-25"
                       onChange={this.props.handleChange}/>
                <input type="text" name="family" value={this.props.data.family} placeholder="family" className="form-control form-inline w-25"
                       onChange={this.props.handleChange}/>
                <input type="text" name="age" value={this.props.data.age} placeholder="age" className="form-control form-inline w-25"
                       onChange={this.props.handleChange}/>
                <br/>
                <label className="form-control form-inline w-25 border-0">
                    gender : male<input type="radio" name="sex" checked={this.props.data.sex === "male"}
                                        onChange={this.props.handleChange} value="male"/>
                    female<input type="radio" name="sex" checked={this.props.data.sex === "female"}
                                 onChange={this.props.handleChange} value="female"/>
                </label>
                <br/>
                <label className="form-control form-inline w-25 border-0">
                    Eng:<input type="checkbox" name="eng" value={this.props.data.lang[0]}
                               onChange={this.props.handleChange}/>
                    Franch:<input type="checkbox" name="fr" value={this.props.data.lang[1]}
                                  onChange={this.props.handleChange}/>
                    Persian:<input type="checkbox" name="ir" value={this.props.data.lang[2]}
                                   onChange={this.props.handleChange}/>
                </label>
                <br/>
                <label className="form-control form-inline w-25 border-0">
                    Country: <select name="country" value={this.props.data.country} onChange={this.props.handleChange}>
                    <option value="Iran">Iran</option>
                    <option value="America">America</option>
                    <option value="Japan">Japan</option>
                </select>
                </label>
                <label className="form-control border-0 w-25 h-100">
                    <br/>
                    <textarea style={{height:"100%", width:"100%"}}  value={this.props.data.desc} name="desc" onChange={this.props.handleChange}
                              placeholder="any additional info"/>
                </label>


                <p className="text-info w-25 ">The Entered Information:<br/>
                    name: {this.props.data.name}<br/>
                    family: {this.props.data.family}<br/>
                    age: {this.props.data.age}<br/>
                    country: {this.props.data.country}<br/>
                    desc: {this.props.data.desc}<br/>
                    languages: {this.props.data.lang.map((item, i) => {
                        if (i !== this.props.data.lang.length - 1)
                            return item + ","
                        else
                            return item
                    })}<br/>
                </p>

                <input type="submit" className="form-control btn-success w-25" value="submit to load data from api" /><br/>
                <label className="text-info w-25 text-justify form-control border-0">fetched data from api:<br/>
                    {Object.keys(this.props.data.apiData).map(key=> <label><p className="text-info">{key}</p>
                        <p className="text-danger" >  {this.props.data.apiData[key]}</p></label>)}
                </label>
            </form>
        )
    }

}

export default FormComponents