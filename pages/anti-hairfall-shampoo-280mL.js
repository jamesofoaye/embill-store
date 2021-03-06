import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import React from "react";

const details = {
    title: "Satinique Anti-Hairfall Shampoo - 280mL",
    id: "Satinique Anti-Hairfall Shampoo - 280mL",
    price: "9.75",
    image: "/images/satinique-anti-hairfall-shampoo-280mL.webp"
}

export default function hairfall_shampoo_280mL() {
    return (
        <div className="">
            <Head>
                <title>Embill Store - Save Time, Save Money, Everyday!!!</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css" />
            </Head>

            <main>
                <Navbar />
                <div className="my-8 mt-24">
                    <div className="container mx-auto px-6">
                        <div className="md:flex md:items-center">
                            <div className="w-full h-auto md:w-1/2">
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/satinique-anti-hairfall-shampoo-280mL.webp" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Satinique Anti-Hairfall Shampoo - 280mL</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Anti-Hairfall shampoo works to reduce hair loss from breakage, while invigorating fragile, fine, or thinning hair.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Leaves hair looking fuller and thicker.</li>
                                            <li className="list-disc">Massage into scalp to exfoliate and stimulate circulation.</li>
                                            <li className="list-disc">Infused with a blend of mulberry leaf and ginseng extracts, the Satinique™ Thickening formula helps create fuller-looking hair while reducing breakage of fragile, fine, or thinning hair.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Apply to wet hair, massage into a lather and rinse.</p>
                                        <div className="flex space-x-3 mb-4 text-sm font-medium mt-4">
                                            <div className="flex-auto flex space-x-4">
                                                <button className="snipcart-add-item snipcart-checkout w-1/2 h-9 flex items-center justify-center rounded-md bg-black text-white" type="submit"
                                                    data-item-id={details.id}
                                                    data-item-price={details.price}
                                                    data-item-url="/"
                                                    data-item-image={details.image}
                                                    data-item-name={details.title}>
                                                    Buy now
                                                </button>
                                                <button className="snipcart-add-item w-1/2  h-9 flex items-center justify-center rounded-md border border-gray-300" type="button"
                                                    data-item-id={details.id}
                                                    data-item-price={details.price}
                                                    data-item-url="/"
                                                    data-item-image={details.image}
                                                    data-item-name={details.title}>
                                                    Add to bag
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
            <script async src="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.js"></script>
            <div
                id="snipcart"
                data-config-add-product-behavior="none"
                data-config-modal-style="side"
                data-api-key="Zjc5Mzk2MmItMDgxMS00ZmMzLThhNzItNGZmZDAyY2Y1YjAxNjM3MzYwNjg4OTAxNTYxMDAy"
                hidden>
            </div>
        </div>
    )
}
