import * as React from 'react';
import {FormFeedback, FormGroup, Input, Label} from "reactstrap";
import { getIn } from 'formik';

import PropTypes from 'prop-types';

const ReactstrapSelectInput = ({
                                   field,
                                   // eslint-disable-next-line no-unused-vars
                                   form: {isSubmitting, touched, errors},
                                   disabled = false,
                                   ...props
                               }) => {
    let error = getIn(errors, field.name);
    let touch = getIn(touched, field.name);
    const row = props.row ? true : false;
    return (
        <FormGroup row={row}>
            <Label for={props.inputprops.id} className={"label-color"}>{props.label}</Label>
            <Input id={props.inputprops.id} {...field} {...props} type="select"
                   invalid={Boolean(getIn(touched, field.name) && getIn(errors, field.name))} disabled={disabled}>
                <option value="">{props.inputprops.defaultOption}</option>
                {props.inputprops.options.map((option, index) => {
                    if (option.name)
                        return (<option value={option.id} key={index}>{option.name}</option>);
                    return (<option value={option} key={index}>{option}</option>)
                })}
            </Input>
            {touch && error && <FormFeedback>{error}</FormFeedback>}
        </FormGroup>
    )
};

export default ReactstrapSelectInput;

ReactstrapSelectInput.propTypes = {
    field: PropTypes.any,
    form: PropTypes.any,
    id: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    inputprops: PropTypes.any,
    label: PropTypes.string,
    row: PropTypes.bool,
}
