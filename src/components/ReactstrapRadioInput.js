import * as React from 'react';
import {FormGroup, Input, Label} from "reactstrap";
import { getIn } from 'formik';
import PropTypes from 'prop-types';

const ReactstrapRadioInput = ({
                                  field,
                                  // eslint-disable-next-line no-unused-vars
                                  form: {isSubmitting, setFieldValue, touched, errors, values},
                                  disabled = false,
                                  ...props
                              }) => {
    return (
        <FormGroup check inline>
            <Label for={props.id}>
                <Input {...props} type="radio" name={field.name} disabled={disabled} checked={getIn(values, field.name) === field.value} value={field.value}
                       // eslint-disable-next-line no-unused-vars
                       onChange={(event, value) => setFieldValue(field.name, field.value)}/>{props.label}
            </Label>
        </FormGroup>
    )
};

export default ReactstrapRadioInput;
ReactstrapRadioInput.propTypes = {
    field: PropTypes.any,
    form: PropTypes.any,
    id: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string
}