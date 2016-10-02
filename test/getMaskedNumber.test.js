import {expect} from 'chai'
import getMaskedNumber from '../getMaskedNumber'

describe('fizz buzz', ()=>{
  it('should be 1 for 1', ()=>{
    expect(getMaskedNumber(1)).to.be.equal(1)
  })
})
