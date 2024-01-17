import { useFormContext } from 'react-hook-form';

/* 
the react-form-hook has lots of errors for all the input sections
from react form hook errors find the input name one, 
return the input section error
*/
function findInputError(errors, name) {
  const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] })
    }, {})
  return filtered
}

/*
if the Input section has error, then return true
*/
const isFormInvalid = err => {
  if (Object.keys(err).length > 0) return true
  return false
}

/*
InputError UI
*/
const InputError = ({ message }) => {
  return (
    <div className="fs-6 fw-light text-danger">{message}</div>
    );
}

/*
Input UI start here
*/
export const Input = ({
  name,
  type,
  placeholder,
  validation,
  multiline,
}) => {

  const {
    register,
    formState: {errors},
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return(
    <div className='d-flex flex-column'>
      {multiline ? (
        <textarea
          rows="3"
          placeholder={placeholder}
          className='form-control'
          {...register(name, validation)}
          ></textarea>
        ) : (
        <input
          type={type}
          placeholder={placeholder}
          className='form-control'
          {...register(name, validation)}
        />
        )}

      {isInvalid && (
        <InputError
          message={inputErrors.error.message}
          key={inputErrors.error.message}
        />
        )}
    </div>
    );
}