import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContainerBox from '@/components/common/ContainerBox'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <ContainerBox>
        <div>
          <div className="w-full flex">
            {/* Top section with logo and description */}
            <div className="container mx-auto px-6 pt-10 pb-6 w-full">
              <div className="flex flex-col">
                <div className="mb-6">
                  <Link href="/" className="inline-block">
                    <Image
                      src="/logo/logo.jpg"
                      alt="Shreshtho"
                      width={150}
                      height={40}
                      className="mb-4"
                    />
                  </Link>
                  <p className="text-sm leading-relaxed max-w-2xl">
                    Shreshtho.com is Bangladesh`&apos;`s largest online shop
                    for Fashion, Cosmetics, Jewellery, Grocery &amp; Food,
                    Sports &amp; Fitness, Home Appliances, Electronics, Mobile
                    Phones &amp; much more.!!
                  </p>
                </div>

                {/* Newsletter subscription */}
                <div className="mb-10">
                  <p className="mb-4">
                    Subscribe to our newsletter for regular updates about
                    Offers, Coupons &amp; more
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="py-2 px-4 bg-transparent border border-gray-600 text-gray-300 flex-grow focus:outline-none focus:border-gray-400"
                    />
                    <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-2 px-8 sm:px-16">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div className="border-t border-gray-800 w-full flex items-center justify-center">
              <div className="container mx-auto px-6 py-6">
                <div className="flex justify-end">
                  <div className="text-right">
                    <h3 className="text-gray-400 font-medium mb-4 uppercase tracking-wider">
                      Follow Us
                    </h3>
                    <div className="flex justify-end">
                      <Link
                        href="https://facebook.com"
                        className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section with columns */}
          <div className="border-t border-gray-800">
            <div className="container mx-auto px-6 py-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* About Column */}
                <div>
                  <h3 className="text-gray-400 font-medium mb-6 uppercase tracking-wider">
                    About
                  </h3>
                  {/* About content would go here */}
                </div>

                {/* Contacts Column */}
                <div>
                  <h3 className="text-gray-400 font-medium mb-6 uppercase tracking-wider">
                    Contacts
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-500 mb-1">Address</p>
                      <p>Uttara 10, Dhaka, Bangladesh</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Phone</p>
                      <p>{/* Phone number would go here */}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Email</p>
                      <p>contact@shreshtho.com</p>
                    </div>
                  </div>
                </div>

                {/* My Account Column */}
                <div>
                  <h3 className="text-gray-400 font-medium mb-6 uppercase tracking-wider">
                    My Account
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <Link
                        href="/login"
                        className="hover:text-white transition-colors duration-300"
                      >
                        Login
                      </Link>
                    </p>
                    <p>
                      <Link
                        href="/order-history"
                        className="hover:text-white transition-colors duration-300"
                      >
                        Order History
                      </Link>
                    </p>
                    <p>
                      <Link
                        href="/wishlist"
                        className="hover:text-white transition-colors duration-300"
                      >
                        My Wishlist
                      </Link>
                    </p>
                    <p>
                      <Link
                        href="/track-order"
                        className="hover:text-white transition-colors duration-300"
                      >
                        Track Order
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Seller Zone Column */}
                <div>
                  <h3 className="text-gray-400 font-medium mb-6 uppercase tracking-wider">
                    Seller Zone
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <span>Become A Seller</span>
                      <span className="text-green-500 ml-2">Apply Now</span>
                    </p>
                    <p>
                      <Link
                        href="/seller-login"
                        className="hover:text-white transition-colors duration-300"
                      >
                        Login to Seller Panel
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerBox>
    </footer>
  )
}

export default Footer
