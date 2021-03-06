import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import React from "react";

const details = {
    title: "G&H Soothe+ For Men After Shave Balm",
    id: "G&H Soothe+ For Men After Shave Balm",
    price: "13.25",
    image: "/images/G&H-soothe+-for-men-after-shave-balm.webp"
}

export default function shave_balm() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/G&H-soothe+-for-men-after-shave-balm.webp" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">G&amp;H Soothe+ For Men After Shave Balm</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">G&amp;H Soothe+ For Men After Shave Balm transforms the morning shave into a calming ritual. The special blend of Aloe Vera and vitamin E helps soothe and moisturize after shaving, helping to reduce razor burn.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Moisturizing, non-greasy formula.</li>
                                            <li className="list-disc">Aloe vera extract, vitamin E and Allantoin calm and moisturize the skin.</li>
                                            <li className="list-disc">Dermatologist tested.</li>
                                            <li className="list-disc">Suitable for sensitive skin.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Children under 8 years of age, pregnant women and nursing mothers, or anyone with a medical condition should consult with a physician before taking this product. Keep out of reach of children. Do not consume without mixing in water.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Apply to clean, dry face after shaving. Massage into skin.</p>
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
