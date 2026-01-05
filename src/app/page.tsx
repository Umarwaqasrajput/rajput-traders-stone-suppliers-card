'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="business-card bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full border-2 border-gray-100 relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-20 translate-x-20 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-100 to-transparent rounded-full translate-y-16 -translate-x-16 opacity-60"></div>
        
        {/* Premium Header with Stone Crushing Plant Image */}
        <div className="text-center mb-10 relative z-10">
          {/* Large Circular Stone Crushing Plant Image */}
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-600 to-indigo-600 p-1 bg-gradient-to-r from-blue-600 to-indigo-600">
              <img 
                src="/r.jpeg" 
                alt="Stone Crushing Plant" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-700 mb-3 tracking-wide">
            RAJPUT TRADERS
          </h1>
          <h2 className="text-2xl font-bold text-gray-700 tracking-[0.3em] mb-4">
            STONE SUPPLIERS
          </h2>
          <div className="flex justify-center">
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Stone Industry Showcase */}
        <div className="flex justify-center space-x-6 mb-10">
          <div className="group">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300">
              <span className="text-3xl">🪨</span>
            </div>
            <p className="text-center text-xs font-semibold text-gray-600 mt-2">Natural</p>
          </div>
          <div className="group">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-200 via-yellow-300 to-orange-300 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300">
              <span className="text-3xl">⛏️</span>
            </div>
            <p className="text-center text-xs font-semibold text-gray-600 mt-2">Crushing</p>
          </div>
          <div className="group">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-200 via-cyan-300 to-teal-300 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300">
              <span className="text-3xl">🚛</span>
            </div>
            <p className="text-center text-xs font-semibold text-gray-600 mt-2">Delivery</p>
          </div>
        </div>

        {/* Services Banner */}
        <div className="text-center mb-10">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-2xl p-6 border border-blue-200 shadow-inner">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg">
                  Natural Stones
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg">
                  Crushing Plant
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg">
                  Fast Delivery
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Spotlight */}
        <div className="text-center mb-10">
          <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-indigo-200 shadow-lg">
            <h3 className="text-3xl font-black text-gray-800 mb-3 tracking-wide">
              RANA WAQAS MEHMOOD
            </h3>
            <p className="text-indigo-700 font-bold text-xl tracking-widest">OWNER & DIRECTOR</p>
          </div>
        </div>

        {/* Premium Contact Section */}
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg mr-4">
              <span className="text-white text-xl">📱</span>
            </div>
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-semibold">Primary Contact</p>
              <p className="text-2xl font-black text-gray-800">0300-6030119</p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/923006030119', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold transition-colors"
            >
              WhatsApp
            </button>
          </div>
          
          <div className="flex items-center bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg mr-4">
              <span className="text-white text-xl">📞</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold">Secondary Contact</p>
              <p className="text-2xl font-black text-gray-800">0320-1190111</p>
            </div>
          </div>
          
          <div className="flex items-center bg-gradient-to-r from-red-50 to-pink-50 p-5 rounded-2xl border-2 border-red-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg mr-4">
              <span className="text-white text-xl">✉️</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold">Email Address</p>
              <p className="text-lg font-bold text-gray-800">waqasrajput119@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 p-5 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg mr-4">
              <span className="text-white text-xl">📍</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold">Business Location</p>
              <p className="text-lg font-bold text-gray-800">Pull 111, Sargodha, Punjab</p>
            </div>
          </div>
          
          <div 
            className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105"
            onClick={() => window.open('https://rajput-traders-stone-suppliers.vercel.app/', '_blank')}
          >
            <div className="flex items-center justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg mr-4">
                <span className="text-indigo-600 text-xl">🌐</span>
              </div>
              <div className="text-center">
                <p className="text-white text-sm font-semibold opacity-90">Visit Our</p>
                <p className="text-white text-2xl font-black">WEBSITE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Footer */}
        <div className="text-center mt-10 pt-8 border-t-2 border-gray-200">
          <div className="flex justify-center space-x-8 text-gray-600">
            <span className="text-sm font-bold">✨ Premium Quality</span>
            <span className="text-sm font-bold">🤝 Trusted Service</span>
            <span className="text-sm font-bold">💰 Best Prices</span>
          </div>
        </div>
      </div>
    </main>
  )
}