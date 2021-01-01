import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Solution } from '../src/solution'

describe('Solution', () => {
  const sut = new Solution()

  describe('#solution', () => {
    const inputData = [1]
    const expectedData = [1]

    for (let i = 0; i < inputData.length; i += 1) {
      describe(`when given ${inputData[i]}`, () => {
        it('passes', () => {
          expect(sut.solution(inputData[i])).to.eq(expectedData[i])
        })
      })
    }
  })
})
