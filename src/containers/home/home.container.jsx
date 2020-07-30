import React, { Component } from 'react';
import AceEditor from "react-ace";
import axios from "axios";
import "./home.styles.scss";

import "ace-builds/src-min-noconflict/mode-json";
import "ace-builds/src-min-noconflict/theme-dracula";
import CustomButton from '../../components/custom-button/custom-button.component';
import Toast from '../../components/toast/toast.component';
import Spinner from '../../components/spinner/spinner.component';


class Home extends Component {

    json = "";
    constructor() {
        super();
        this.state = {
            json: "",
            jsonUrl: null,
            toast: { type: "info", show: false, msg: "" },
            loading: false
        };
    }

    onChange = (value) => {
        this.json = value;
    };

    onValidationHandler = () => {
        console.log(this.json);
        try {
            JSON.parse(this.json);
            this.setState({ toast: { show: true, type: "info", msg: "Valid JSON" } });
        } catch (error) {
            this.setState({ toast: { show: true, msg: "Invalid JSON", type: "error" } });
        }
    };


    removeToast = () => {
        this.setState({ toast: { msg: "", show: false } });
    };

    onSaveHandler = async () => {
        const baseUrl = "http://ajson1.herokuapp.com/json";
        this.setState({loading: true})
        const response = await axios.post(`${baseUrl}/add`, this.json);

        this.setState({loading: false})
        console.log(response);
        if (!response) {
            this.setState({ toast: { show: true, type: "error", msg: "Internal Server Error" } });
        }

        if (response.status === 201) {
            this.setState({
                jsonUrl: `${baseUrl}/${response.data.id}`,
                toast: { show: true, type: "info", msg: `${response.data.msg}` }
            });
        } else {
            this.setState({ toast: { show: true, type: "info", msg: `${response.data.msg}` } });
        }

    };

    render() {
        return (
            <div className="home">
                <div hidden={!this.state.toast.show} className="home__toast">
                    <Toast property={{ msg: this.state.toast.msg, type: this.state.toast.type }} close={this.removeToast} />
                </div>



                <div className="editor">
                    <div className="btn">
                        {!this.state.loading ? <CustomButton onclick={this.onSaveHandler} text="Save" />
                            : <Spinner />
                        }
                        <div className="last">
                            <CustomButton onclick={this.onValidationHandler} text="Validate" />
                        </div>

                    </div>
                    <AceEditor
                        height="600px"
                        width="100%"
                        mode="json"
                        theme="dracula"
                        onChange={this.onChange}
                        name="home"
                        placeholder="Write json here"
                        focus={true}
                        enableBasicAutocompletion={true}
                        enableSnippets={true}
                        fontSize={24}
                        editorProps={{ $blockScrolling: true }}
                    />
                    <span hidden={this.state.jsonUrl ? false : true}>{this.state.jsonUrl}</span>
                </div>

            </div>

        );
    }
}

export default Home;