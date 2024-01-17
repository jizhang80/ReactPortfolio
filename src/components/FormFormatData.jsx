export const nameFormat = {
  name: 'name',
  type: 'text',
  placeholder: 'Your Name',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const emailFormat = {
  name: 'email',
  type: 'email',
  placeholder: 'Your Email',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}

export const subjectFormat = {
  name: 'subject',
  type: 'text',
  placeholder: 'Subject',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 100,
      message: '100 characters max',
    },
  },
}

export const msgFormat = {
  name: 'message',
  multiline: true,
  placeholder: 'Message',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 400,
      message: '400 characters max',
    },
  },
}