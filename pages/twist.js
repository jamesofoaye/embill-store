import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import React from "react";

const details = {
    title: "Nutrilite™ Twist Tubes 2GO™ – Immunity Health - Strawberry Kiwi",
    id: "Nutrilite Twist Tubes 2GO – Immunity Health - Strawberry Kiwi",
    price: "15.00",
    image: "/images/twist.webp"
}

export default function twist() {
    return (
        <div className="">
            <Head>
                <title>Embill Store - Save Time, Save Money, Everyday!!!</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css" />
                <!-- Pinterest Tag -->
                <script>
                    !function(e){if(!window.pintrk){window.pintrk = function () {
                    window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
                    n=window.pintrk;n.queue=[],n.version="3.0";var
                    t=document.createElement("script");t.async=!0,t.src=e;var
                    r=document.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
                    pintrk('load', '2613497291407', {em: '<user_email_address>'});
                    pintrk('page');
                </script>
                <noscript>
                    <img height="1" width="1" style="display:none;" alt=""
                         src="https://ct.pinterest.com/v3/?event=init&tid=2613497291407&pd[em]=<hashed_email_address>&noscript=1" />
                </noscript>
                <!-- end Pinterest Tag -->
                <!-- checkout tracking -->
                <script>
                    pintrk('track', 'checkout', {
                    value: 100,
                    order_quantity: 1,
                    currency: 'USD'
                });
                </script>
                <!-- add to cart tracking -->
                <script>
                    pintrk('track', 'addtocart', {
                    value: 100,
                    order_quantity: 1,
                    currency: 'USD'
                });
                </script>
                <script>
                    pintrk('track', 'pagevisit');
                </script>
            </Head>

            <main>
                <Navbar />
                <div className="my-8 mt-24">
                    <div className="container mx-auto px-6">
                        <div className="md:flex md:items-center">
                            <div className="w-full h-auto md:w-1/2">
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/twist.webp" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Nutrilite™ Twist Tubes 2GO™ – Immunity Health - Strawberry Kiwi</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">A convenient and refreshing concentrated liquid drink mix that provides antioxidant support for your immune system.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Excellent source of vitamin C to help support your body's natural defenses.</li>
                                            <li className="list-disc">Only 30 calories per twist tube.</li>
                                            <li className="list-disc">No artificial colors, flavors, or preservatives.</li>
                                            <li className="list-disc">Strawberry-Kiwi flavored.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Children under 8 years of age, pregnant women and nursing mothers, or anyone with a medical condition should consult with a physician before taking this product. Keep out of reach of children. Do not consume without mixing in water.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Add 1 twist tube to 500 mL (16.9 fl. oz.) of cold water and enjoy. Do not consume without mixing in water.</p>
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
