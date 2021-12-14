import React from 'react'
import { FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap'
import { getIn } from 'formik'
import PropTypes from 'prop-types';

const ReactstrapFormikInput = (
  {
    field: { ...fields },
    form: { touched, errors },
    ...props
  }) => {
    const check = props.check ? true : undefined;
    const inline = props.inline ? true : undefined;
    const floating = props.floating ? true : undefined;
    const row = props.row ? true : undefined;
    return (
<FormGroup check={check} inline={inline} floating={floating} row={row}>
    {!props.floating && props.label ? 
        <Label for={props.id} className={"label-color"} check={check} inline={inline}>{props.label}</Label>
        : ''}
    <Input {...props} {...fields} invalid={Boolean(getIn(touched, fields.name) && getIn(errors, fields.name))}/>
    {props.floating ? 
        <Label for={props.id} className={"label-color"} check={check} inline={inline}>{props.label}</Label>
        : ''}
    {getIn(touched, fields.name) && getIn(errors, fields.name) ? <FormFeedback>{getIn(errors, fields.name)}</FormFeedback> : ''}
    {props.formText ? <FormText>{props.formText}</FormText> : ''}
</FormGroup>
)};
export default ReactstrapFormikInput

ReactstrapFormikInput.propTypes = {
    field: PropTypes.any,
    form: PropTypes.any,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    check: PropTypes.bool,
    inline: PropTypes.bool,
    floating: PropTypes.bool,
    row: PropTypes.bool,
    formText: PropTypes.string
  }