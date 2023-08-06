import {describe, expect, test} from '@jest/globals';
import {createTransformerService} from "./transformer.service";

describe('testTransformer', () => {

    test('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });

    test('tokenizerServiceWorks',async ()=>{
        const tService = await createTransformerService();
        const response = await tService.embeddingsFromString('test');
        expect(response.length).toBe(384)
    })
});