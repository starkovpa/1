// Initialize extra fields
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// A text input that asks customer’s name
ec.order.extraFields.new_name = {
  'title': 'Ваше имя',
  'textPlaceholder': 'Роберт Паркер',
  'type': 'text',
  'required': true,
  'checkoutDisplaySection': 'payment_details'
};

// A text input that asks customer’s phone number
ec.order.extraFields.new_phone = {
  'title': 'Ваше телефон',
  'textPlaceholder': '79999999999',
  'type': 'text',
  'required': true,
  'checkoutDisplaySection': 'payment_details'
};

Ecwid.refreshConfig();
