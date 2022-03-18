import { linearSearch } from '../src/linearSearch.mjs'
import { binarySearch } from '../src/binarySearch.mjs'

import { sortedData } from './data.mjs'

describe('linear search', function() {
    it('correctly finds', function() {
        const item = 999;
        const index = linearSearch(sortedData, item);
        expect(index).toEqual(item);
    })
})

describe('binary search', function() {
    it('correctly finds', function() {
        const item = 999;
        const index = binarySearch(sortedData, item);
        expect(index).toEqual(item);
    })
})