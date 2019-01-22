import React from 'react';
import Form from '../core/Form';
import { Field, reduxForm } from 'redux-form'

let SettingsForm = props => {
    const { handleSubmit, children } = props;
    return <Form handleSubmit={handleSubmit} children={children} />
};

SettingsForm = reduxForm({
    form: 'settings'
})(SettingsForm);

export default SettingsForm;
