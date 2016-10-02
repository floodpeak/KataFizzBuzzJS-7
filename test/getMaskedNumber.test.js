import {expect} from 'chai'
import getMaskedNumber from '../getMaskedNumber'

describe('fizz buzz', ()=>{
  it('should be 1 for 1', ()=>{
    expect(getMaskedNumber(1)).to.be.equal(1)
  })
  it('should be 2 for 2', ()=>{
    expect(getMaskedNumber(2)).to.be.equal(2)
  })
  it('should be Fizz for 3', ()=>{
    expect(getMaskedNumber(3)).to.be.equal('Fizz')
  })
})
