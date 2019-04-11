import PasswordField from '../../components/form/PasswordField.vue';
import AutocompleteBox from '../../components/form/AutocompleteBox.vue';
import Customer from './customer';

export const UserTypes = [
  { text: 'Administrador', value: 1 },
  { text: 'Vendedor', value: 2 },
  { text: 'Cliente', value: 3 },
];

const User = {
  name: 'User',
  display_name: 'Usuario',
  display_name_plural: 'Usuarios',
  apiUrl: 'users',
  url: 'usuarios',
  field_configs: {
    list: {
      name: { align: 'left' },
      email: {},
      user_type: {},
      customer_id: {},
    },
    form: {
      name: { required: true },
      email: { required: true, email: true },
      password: { required: true, formatter: PasswordField, hideOnUpdate: true },
      c_password: {
        formatter: PasswordField,
        match: { field: 'password', message: 'Las contraseñas no coinciden' },
        conditionalRequired: [
          { field: 'password', logic: '!=', value: null },
        ],
        hideOnUpdate: true,
      },
      user_type: {
        type: 'select',
        items: UserTypes,
        required: true,
      },
      customer_id: {
        formatter: AutocompleteBox,
        formatter_options: { entity: Customer, fromStore: true, concatedKeys: ['first_name','last_name'] },
        hideOnUpdate: true,
      },
    },
  },
  fields: {
    name: { display_name: 'Nombre' },
    email: { display_name: 'Correo' },
    password: { display_name: 'Contraseña' },
    c_password: { display_name: 'Confirmar Contraseña' },
    details: { display_name: 'Detalles' },
    user_type: { display_name: 'Tipo de Usuario' },
    customer_id: { display_name: 'Cliente' },
  },
};

export default User;
