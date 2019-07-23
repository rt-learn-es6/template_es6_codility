import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Solution } from '../src/solution'

describe('Solution', () => {
  const sut = new Solution()

  describe('#solution', () => {
    const actualData = []
    const expectedData = []

    for (let i = 0; i < actualData.length; i += 1) {
      describe(`when given ${actualData[i]}`, () => {
        it('passes', () => {
          expect(sut.solution()).to.eq(expectedData[i])
        })
      })
    }
  })
})
