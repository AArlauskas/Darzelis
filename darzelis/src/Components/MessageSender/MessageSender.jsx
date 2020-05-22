import React, { Component } from 'react';
import UnifiedModal from "../UnifiedModal";
import ButtonBlock from "../ButtonBlock/index";
import DefaultTextField from "../DefaultTextField";
import DefaultMultiSelect from "../DefaultMultiSelect";
import DefaultTextArea from "../DefaultTextArea";
import Users from "../../Data/Users";
class MessageSender extends Component {
    state = {
        title: "",
        sendTo: [],
        content: "",
    }
    render() {
        return (
            <UnifiedModal open={this.props.open} title="Send a message">
                <form>
                    <div style={{ marginBottom: 40 }}>
                        <DefaultTextField
                            label="Title"
                            isRequired={true}
                            onChange={(e) => this.setState({ title: e.target.value })} />

                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <DefaultMultiSelect label="Receivers"
                            options={Users}
                            getOptionLabel={option => option.name + " " + option.surname}
                            onChange={(value, type) => this.setState({ sendTo: value })} />
                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <DefaultTextArea label="Message..." onChange={e => this.setState({ content: e.target.value })} />
                    </div>
                    <ButtonBlock onCancel={this.props.onClose} onSave={() => {
                        console.log(this.state);
                        this.props.onClose();
                    }} />
                </form>
            </UnifiedModal>
        );
    }
}

export default MessageSender;