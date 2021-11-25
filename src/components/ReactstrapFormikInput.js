import React from 'react';
import {FormFeedback, FormGroup, Input, Label} from "reactstrap";
import { getIn } from 'formik';

const ReactstrapFormikInput = (
    {
        field: {...fields},
        form: {touched, errors, ...rest},
        ...props
    }) => (
    <FormGroup>
        <Label for={props.id} className={"label-color"}>{props.label}</Label>
        <Input {...props} {...fields} invalid={Boolean(getIn(touched, fields.name) && getIn(errors, fields.name))}/>
        {getIn(touched, fields.name) && getIn(errors, fields.name) ? <FormFeedback>{getIn(errors, fields.name)}</FormFeedback> : ''}
    </FormGroup>
);
export default ReactstrapFormikInput;
