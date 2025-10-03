import {encrypt} from './caesarCipher.js'

describe('ceasar cipher', () => {
  test('lower case single word no wrap', () => {
    expect(encrypt('abc', 10)).toMatch('klm')
  })
  test('lower case single word w/wrap', () => {
    expect(encrypt('birthday', 10)).toMatch('lsbdrnki')
  })
  test('mixed case single word', () => {
    expect(encrypt('SpOnGeBoB', 15)).toMatch('HeDcVtQdQ')
  })
  test('with punctuation', () => {
    expect(encrypt('Bond, James Bond!', 15)).toMatch('Qdcs, Ypbth Qdcs!')
  })

});