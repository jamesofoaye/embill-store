import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import React from "react";

const details = {
    title: "Artistry Hydra-V Fresh toner",
    id: "Artistry Hydra-V Fresh toner",
    price: "20.30",
    image: "/images/hydra-v-fresh-toner.webp"
}

export default function fresh_toner() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/hydra-v-fresh-toner.webp" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Artistry Hydra-V Fresh toner</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Get radiant skin with a revitalizing toner that conditions, softens, and preps skin to receive an instant 211% increase in skin hydration levels.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Refreshing toner removes the last traces of dirt and makeup.</li>
                                            <li className="list-disc">Red Algae Extract helps seal in skin's own moisture.</li>
                                            <li className="list-disc">Alcohol-free formula leaves skin feeling calm and soothed.</li>
                                            <li className="list-disc">Suitable for all skin types.</li>
                                            <li className="list-disc">Dermatologist and allergy tested.</li>
                                            <li className="list-disc"> REFRESH - Pure Norwegian fjord water is encapsulated in our Artistry Hydra-V™ Liposome to release hydration deep into skin.</li>
                                            <li className="list-disc">REPLENISH - Nutrient-rich European Coastal Plant Extract replenishes by encouraging the movement and storage of water in skin.</li>
                                            <li className="list-disc">REVITALIZE - Hawaiian acai berries, combined with our Moisturizing Liposome, deliver lasting hydration for up to 24 hours.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Splash toner on your palm or a cotton pad. Gently pat over your entire face and neck, avoiding contact with your eyes. For maximum benefits, use in the morning and evening.</p>
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
