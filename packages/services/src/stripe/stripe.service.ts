import {Stripe} from "stripe";
import {products as Products} from "@ficommerce/generated/db"
import * as process from "process";

export class StripeService extends Stripe {
    constructor(apiKey: string, config: Stripe.StripeConfig) {
        super(apiKey, config);
    }

    createStripeProductFromEntity(products: Products) {
        return this.products.create({
            name: products.name,
            active: true,
            default_price_data: {currency: 'EUR', unit_amount_decimal: products.price.toString()}
        });
    }

    findStripeProducts(productId: string) {
        return this.products.retrieve(productId);
    }

    findStripePrices(priceId: string) {
        return this.prices.retrieve(priceId);
    }

    async createStripeProductAndPrice(products: Products) {
        const stripeProduct = await this.createStripeProductFromEntity(products);
        await this.createStripePriceFromEntity(stripeProduct, products);
        return stripeProduct;
    }

    createStripePriceFromEntity(createdProduct: Stripe.Product, products: Products) {
        return this.prices.create({
            product: createdProduct.id,
            active: true,
            currency: 'EUR',
            billing_scheme: 'per_unit',
            unit_amount_decimal: products.price.toString()
        });
    }
}

export function createStripeService() {
    const apiKey = process.env.STRIPE_API_KEY || '';
    return new StripeService(apiKey, {
        apiVersion: "2022-11-15"
    });
}