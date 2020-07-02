import Resource from './resource';
import handleCustomerMutation from './handle-customer-mutation';

// GraphQL
import customerCreateMutation from './graphql/customerCreateMutation.graphql';

/**
 * The JS Buy SDK customer resource
 * @class
 */
class CustomerResource extends Resource {

  /**
   * Creates a customer.
   *
   * @example
   * const input = {
   *   email: 'john.deo@gmail.com',
   *   password: '1234',
   *   acceptsMarketing: 1,
   *   firstName: 'John',
   *   lastName: 'Deo',
   *   phone: '+16135551111'
   * };
   *
   * client.customer.create(input).then((customer) => {
   *   // Do something with the newly created customer
   * });
   *
   * @param {Object} [input] An input object containing zero or more of:
   *   @param {String} [input.email] An email connected to the checkout.
   *   @param {Object[]} [input.lineItems] A list of line items in the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
   *   @param {Object} [input.shippingAddress] A shipping address. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/mailingaddressinput|Storefront API reference} for valid input fields.
   *   @param {String} [input.note] A note for the checkout.
   *   @param {Object[]} [input.customAttributes] A list of custom attributes for the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/attributeinput|Storefront API reference} for valid input fields.
   *   @param {String} [input.presentmentCurrencyCode ] A presentment currency code. See the {@link https://help.shopify.com/en/api/storefront-api/reference/enum/currencycode|Storefront API reference} for valid currency code values.
   * @return {Promise|GraphModel} A promise resolving with the created checkout.
   */
  create(input = {}) {
    return this.graphQLClient
      .send(customerCreateMutation, {input})
      .then(handleCustomerMutation('customerCreate', this.graphQLClient));
  }

}

export default CustomerResource;
