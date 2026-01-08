'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center p-2">
      <div className="w-full max-w-xs mx-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl overflow-hidden relative border border-gray-300">
        
        {/* Subtle Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-200/40 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-300/40 to-transparent rounded-full blur-lg"></div>
        
        <div className="relative z-10 p-4">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden shadow-xl border-3 border-gray-400 bg-gray-400 p-0.5">
              <img 
                src="/r.jpeg" 
                alt="Stone Plant" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <h1 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mb-2 tracking-wide">
              RAJPUT TRADERS
            </h1>
            <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 tracking-wider mb-3">
              STONE SUPPLIERS
            </p>
            
            {/* Crushing Plant Section */}
            <div className="w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl p-3 mb-3 border border-gray-400">
              <div className="flex justify-center items-center space-x-2">
                <div className="text-2xl">🏭</div>
                <div className="text-2xl">⚒️</div>
                <div className="text-2xl">🪨</div>
              </div>
              <p className="text-xs font-bold text-gray-700 mt-1">CRUSHING PLANT</p>
            </div>
            
            <div className="w-16 h-0.5 bg-gray-400 rounded-full mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-gray-200 rounded-lg p-2 text-center border border-gray-300">
              <div className="text-lg mb-1">🪨</div>
              <p className="text-xs font-bold text-gray-700">Natural</p>
            </div>
            <div className="bg-gray-300 rounded-lg p-2 text-center border border-gray-400">
              <div className="text-lg mb-1">⚒️</div>
              <p className="text-xs font-bold text-gray-700">Crushing</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-2 text-center border border-gray-300">
              <div className="text-lg mb-1">🚛</div>
              <p className="text-xs font-bold text-gray-700">Delivery</p>
            </div>
          </div>

          {/* Owner Card */}
          <div className="text-center mb-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-3 border border-blue-300">
            <h2 className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-800 mb-1">
              RANA WAQAS MEHMOOD
            </h2>
            <p className="text-xs font-bold text-blue-600">OWNER & DIRECTOR</p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-2">
            {/* WhatsApp Primary */}
            <div 
              className="flex items-center bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all border border-gray-600"
              onClick={() => window.open('https://wa.me/923006030119', '_blank')}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-green-600 text-lg">📱</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 text-xs font-semibold">WhatsApp</p>
                <p className="text-white text-sm font-black">0300-6030119</p>
              </div>
              <button className="bg-white text-gray-800 px-3 py-1 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors">
                WhatsApp
              </button>
            </div>
            
            {/* Phone Secondary */}
            <div className="flex items-center bg-gradient-to-r from-gray-600 to-gray-700 p-3 rounded-xl shadow-lg border border-gray-500">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-blue-600 text-lg">📞</span>
              </div>
              <div>
                <p className="text-gray-300 text-xs font-semibold">Phone</p>
                <p className="text-white text-sm font-black">0320-1190111</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center bg-gradient-to-r from-gray-500 to-gray-600 p-3 rounded-xl shadow-lg border border-gray-400">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-purple-600 text-lg">✉️</span>
              </div>
              <div>
                <p className="text-gray-200 text-xs font-semibold">Email</p>
                <p className="text-white text-xs font-bold">waqasrajput119@gmail.com</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-center bg-gradient-to-r from-gray-600 to-gray-700 p-3 rounded-xl shadow-lg border border-gray-500">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-red-600 text-lg">📍</span>
              </div>
              <div>
                <p className="text-gray-300 text-xs font-semibold">Location</p>
                <p className="text-white text-xs font-bold">Pull 111, Sargodha, Punjab</p>
              </div>
            </div>
            
            {/* Website */}
            <div 
              className="bg-gradient-to-r from-black to-gray-800 p-3 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all border border-gray-700"
              onClick={() => window.open('https://rajput-traders-stone-suppliers.vercel.app/', '_blank')}
            >
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
                  <span className="text-gray-800 text-lg">🌐</span>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-xs font-semibold">Visit Our</p>
                  <p className="text-white text-sm font-black">WEBSITE</p>
                </div>
                <button className="bg-white text-gray-800 px-3 py-1 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors ml-3">
                  Visit
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-4 pt-3 border-t border-gray-300">
            <div className="flex justify-center space-x-3 text-gray-600 text-xs font-semibold">
              <span>✨ Quality</span>
              <span>🤝 Trust</span>
              <span>💰 Best Price</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}