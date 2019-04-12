import AutocompleteBox from '../../components/form/AutocompleteBox.vue';
import StockDetailsForm from '../../components/StockDetailsForm.vue';
import Product from './product';
import Office from './office';
import Fabric from './fabric';
import Design from './design';
import Color from './color';
import Customer from './customer';

const StockQuantity = ({ props }) => (
  <div><h3 class="pb-3">Cantidad en Almacen: {props.item[props.field] || 0}m</h3></div>
);

const Sale = {
  name: 'Sale',
  display_name: 'Venta',
  display_name_plural: 'Ventas',
  apiUrl: 'sales',
  url: 'ventas',
  hideAddButton: true,
  field_configs: {
    //search: ['office.name', 'product.sku', 'fabric.name', 'design.name', 'color.name', 'stock'],
    list: {
      office_id: { align: 'left', formatter: Office.formatter, sortable: false },
      created_at: { align: 'left' },
      customer_id: { align: 'left', formatter: Customer.formatter },
      commission: { align: 'right', type: 'number' },
      balance: { align: 'right', type: 'number' },
      total: { align: 'right', type: 'number' },

      /*fabric: { align: 'left', formatter: Fabric.formatter },
      design: { align: 'left', formatter: Design.formatter },
      color: { align: 'left', formatter: Color.formatter, sortable: false },
      stock: { align: 'right', type: 'number' },*/
    },
    form: {
      office_id: {
        required: true,
        formatter: AutocompleteBox,
        formatter_options: { entity: Office, fromStore: true },
      },
      /*product_id: {
        required: true,
        formatter: AutocompleteBox,
        formatter_options: { entity: Product, fromStore: true, concatedKeys: ['sku', 'fabric.name', 'design.name', 'color.name'] },
      },
      /*stock: { type: 'number', formatter: StockQuantity },
      details: {
        formatter: StockDetailsForm,
        default: [],
      },*/
    },
  },
  fields: {
    office_id: { display_name: 'Sucursal' },
    created_at: { display_name: 'Fecha' },
    customer_id: { display_name: 'Cliente' },
    //revenue: { display_name: 'Ganancia' },
    commission: { display_name: 'Comisión' },
    balance: { display_name: 'Saldo' },
    total: { display_name: 'Total' },
    status: { display_name: 'Estado' },
    user_id: { display_name: 'Vendedor' },
    articles: { display_name: 'Articulos' },
  },
};

export default Sale;
