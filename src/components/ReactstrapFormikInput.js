import React from 'react'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { getIn } from 'formik'
import PropTypes from 'prop-types';

const ReactstrapFormikInput = (
  {
    field: { ...fields },
    form: { touched, errors },
    ...props
  }) => (
    <FormGroup>
        <Label for={props.id} className={'label-color'}>{props.label}</Label>
        <Input {...props} {...fields} invalid={Boolean(getIn(touched, fields.name) && getIn(errors, fields.name))}/>
        {getIn(touched, fields.name) && getIn(errors, fields.name) ? <FormFeedback>{getIn(errors, fields.name)}</FormFeedback> : ''}
    </FormGroup>
)
export default ReactstrapFormikInput

ReactstrapFormikInput.propTypes = {
    field: PropTypes.any,
    form: PropTypes.any,
    id: PropTypes.string.isRequired,
    label: PropTypes.string
}