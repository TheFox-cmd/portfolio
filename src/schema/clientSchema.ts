import * as Yup from 'yup';

const ClientSchema = Yup.object({
  clientName: Yup.string()
    .required('Required'),
    clientProject: Yup.string()
    .required('Required'),
    clientEmail: Yup.string().email('Invalid email address').required('Required'),
})

export default ClientSchema;