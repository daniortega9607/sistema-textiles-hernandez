export const Required = (message) => v => !!v || message || 'Debe completar este campo';

export const Email = (message) => v => /.+@.+/.test(v) || message || 'Debe ingresar un e-mail válido';

export const MinLength = (min = 5, message) => v => v && v.length >= min || message || `Minimo ${min} caracteres`;