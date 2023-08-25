import axios, {AxiosError} from "axios";
import {products as Products, profiles as Profiles} from "@ficommerce/generated/db"
import * as console from "console";

export class TransformerService {

    constructor() {
    }

    async embeddingsFromString(input: string) {
        console.log('waiting for hugging-face to return')
        const axiosResponse = await axios.post(
            "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2",
            {
                inputs: [input]
            },
            {
                headers: {Authorization: "Bearer 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"}
            }
        )
        return axiosResponse?.data?.at(0) ?? [];
    }

    getStringEmbeddingForProduct(product: Products) {
        return `${product.name} ${product.id}`;
    }


    getStringEmbeddingForProfiles(profiles: Profiles) {
        return `${profiles.email} ${profiles.id}`;
    }

    createVectorString(vector: Array<number>) {
        return `[${vector.join(',')}]`
    }
}


export function createTransformerService() {
    return new TransformerService();
}