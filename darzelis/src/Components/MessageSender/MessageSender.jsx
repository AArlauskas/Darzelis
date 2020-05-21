import React, { Component } from 'react';
import UnifiedModal from "../UnifiedModal";
class MessageSender extends Component {
    state = {
    }
    render() {
        return (
            <UnifiedModal open={this.props.open} title="Send a message">
                <form>

                </form>
            </UnifiedModal>
        );
    }
}

export default MessageSender;