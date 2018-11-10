import emailValidator from '..'

describe('emailValidator', () => {
  it('returns true when given a valid email', () => {
    const email = 'validEmail@domain.com'
    expect(emailValidator(email)).toEqual(true)
  }),
  it('returns false when given an invalid email', () => {
    const email = 'invalid'
    expect(emailValidator(email)).toEqual(false)
  }),
  it('returns false when given a blank email', () => {
    const email = ''
    expect(emailValidator(email)).toEqual(false)
  })
})