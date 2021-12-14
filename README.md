
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mlaplanche_reactstrap-formik&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=mlaplanche_reactstrap-formik) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=mlaplanche_reactstrap-formik&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=mlaplanche_reactstrap-formik) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=mlaplanche_reactstrap-formik&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=mlaplanche_reactstrap-formik) 
[![pipeline status](https://gitlab.com/mlaplanche/reactstrap-formik/badges/master/pipeline.svg)](https://gitlab.com/mlaplanche/reactstrap-formik/-/commits/master) 

[![NPM](https://nodei.co/npm/reactstrap-formik-adapter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/reactstrap-formik-adapter/)

Bindings for using [Formik](https://github.com/jaredpalmer/formik) with [Reactstrap](https://reactstrap.github.io/).

Fork of [reactstrap-formik](https://github.com/shoaibkhan94/reactstrap-formik) by [shoaibkhan94](https://github.com/shoaibkhan94).

Gitlab [project](https://gitlab.com/mlaplanche/reactstrap-formik), do not hesitate to open a issue for help.

## Getting Started

    npm install reactstrap-formik-adapter
    
## Usage Examples
  * General example with Formik, Yup and Reactstrap [here](https://codesandbox.io/s/musing-mopsa-gjrjs?file=/src/App.jsx) 

## How to

 * To use a simple text field :

```JSX
import { ReactstrapInput,} from "reactstrap-formik-adapter";
import { Field } from "formik";

...

  <Field
    component={ReactstrapInput}
    label="Lastname"
    name="Lastname"
    id="Lastname"
  />
```
You can overload with a type of the types [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input). The Yup library also allows to check the type (as for emails, an example is available on the sandbox).

You can use [flotating label](https://reactstrap.github.io/?path=/docs/components-forms--floating-labels), [form inline](https://reactstrap.github.io/?path=/docs/components-forms--form-inline), [feedback or help text](https://reactstrap.github.io/?path=/docs/components-forms--form-feedback) and  [checkbox](https://reactstrap.github.io/?path=/docs/components-forms--inline-checkboxes).

 * To use select input field : 

 ```JSX
import { ReactstrapSelect,} from "reactstrap-formik-adapter";
import { Field } from "formik";

...

<Field
  component={ReactstrapSelect}
  label="Civility"
  name="Civility"
  id="Civility"
  inputprops={{
    name: "Civility",
    id: "civility",
    options: [
      {
        name: "Mr.",
        id: "Mr."
      },
      {
        name: "Ms.",
        id: "Ms."
      }
    ]
  }}
/>
```
You can also use the ReactstrapSelectRow component.