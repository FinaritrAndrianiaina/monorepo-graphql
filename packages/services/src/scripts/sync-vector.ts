import {createTransformerService} from "../transformers/transformer.service";

async function main() {
    const tService = await createTransformerService();
    const response = tService.embeddingsFromString('test');
    console.log(response);
}

main().then();