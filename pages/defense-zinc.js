import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import React from "react";

const details = {
    title: "Nutrilite™ Immunity Defense Zinc + Holy Basil",
    id: "Nutrilite Immunity Defense Zinc",
    price: "16.20",
    image: "/images/defense-zinc.webp"
}

export default function defense_zinc() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/defense-zinc.webp" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Nutrilite™ Immunity Defense Zinc + Holy Basil</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Support your immune and respiratory system with a unique combination of five ingredients - Holy Basil, Zinc, Selenium, Copper, and Orange Bioflavonoids!</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Zinc – an essential nutrient important for the maintenance of the immune system.</li>
                                            <li className="list-disc">Holy Basil from NutriCert™ certified farms, is a sacred plant in Traditional Ayurvedic Medicine. It supports respiratory health and promotes healthy immune function.</li>
                                            <li className="list-disc">Gentle on the stomach.</li>
                                            <li className="list-disc">Citrus Bioflavonoids derived from whole oranges from NutriCert™ certified farms provide antioxidant phytonutrients believed to have many health promoting properties, including support for a healthy immune response.</li>
                                            <li className="list-disc">Copper and Selenium – essential for the maintenance and normal function of a healthy immune system.</li>
                                            <li className="list-disc">Vegetarian.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Take 1 tablet two times a day, preferably with a meal</p>
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
                data-api-key="NGNhY2MzOTEtYzdiMS00ODk0LWI5NzMtNTgyMjFiZGFlZmVhNjM3MzYwNjg4OTAxNTYxMDAy"
                hidden>
            </div>
        </div>
    )
}
