const Formatter = ({ props }) => {
  const customer = props.customer || props;
  return (
    <div>{customer.first_name} {customer.last_name}</div>
  );
};

const Customer = {
  name: 'Customer',
  display_name: 'Cliente',
  display_name_plural: 'Clientes',
  apiUrl: 'customers',
  url: 'clientes',
  field_configs: {
    list: {
      first_name: {},
      last_name: {},
      email: {},
      email_2: {},
      email_3: {},
      street: {},
      number: {},
      number_2: {},
      suburb: {},
      zip_code: {},
      city: {},
      state: {},
      country: {},
      telephone: {},
      name: {},
      rfc: {},
      credit_days: {},
      comments: {},
    },
    form: {
      first_name: {},
      last_name: {},
      email: {},
      email_2: {},
      email_3: {},
      street: {},
      number: {},
      number_2: {},
      suburb: {},
      zip_code: {},
      city: {},
      state: {},
      country: {},
      telephone: {},
      name: {},
      rfc: {},
      //uid: {},
      //use_cfdi: {},
      credit_days: {},
      comments: { type:'textarea' },
    },
  },
  fields: {
    city: { display_name: 'Ciudad' },
    comments: { display_name: 'Observaciones' },
    country: { display_name: 'Pais' },
    credit_days: { display_name: 'Dias de Credito' },
    email: { display_name: 'Email' },
    email_2: { display_name: 'Email 2' },
    email_3: { display_name: 'Email 3' },
    first_name: { display_name: 'Nombres' },
    last_name: { display_name: 'Apellidos' },
    name: { display_name: 'Razon Social' },
    number: { display_name: 'Numero Interior' },
    number_2: { display_name: 'Numero Exterior' },
    rfc: { display_name: 'RFC' },
    state: { display_name: 'Estado' },
    street: { display_name: 'Calle' },
    suburb: { display_name: 'Colonia' },
    telephone: { display_name: 'Teléfono' },
    uid: { display_name: 'Cliente Factura' },
    use_cfdi: { display_name: 'Uso CFDI' },
    zip_code: { display_name: 'Codigo Postal' },
  },
  formatter: Formatter
};

export default Customer;
