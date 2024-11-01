import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import { complement } from 'polished'
import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('Nome completo é obrigatório')
      .min(12, 'Nome é muito curto')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome'),
    email: yup.string().email('O email deve ser válido.').required('Email é obrigatório'),
    mobile: yup
      .string()
      .required('Telefone é obrigatório')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validationMobile', 'Celular inválido.', (value) => isValidPhone(value)),
    document: yup
    .string()
    .required('O CPF/CNPJ é obrigatório.')
    .transform((value) => value.replace(/[^\d]/g, ''))
    .test(
      'validateDocument', 
      'O CPF/CNPJ é inválido.', 
      (value) => isValidCPF(value) || isValidCNPJ(value)
    ),
    zipCode: yup
    .string()
    .required('O CEP é obrigatório.')
    .transform((value) => value.replace(/[^\d]+/g, '')),
    street: yup.string().required('Endereço é obrigatório.'),
    number: yup.string().required('O número é obrigatório.'),
    complement: yup.string(),
    neighborhood: yup.string().required('O bairro é obrigatório.'),
    city: yup.string().required('A cidade é obrigatória.'),
    state: yup.string().required('O Estado é obrigatório.'),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
