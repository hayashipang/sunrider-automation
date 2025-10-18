import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, Target, Award, Lightbulb } from 'lucide-react'

const stats = [
  { number: '100+', label: '成功案例', icon: Award },
  { number: '50+', label: '合作夥伴', icon: Users },
  { number: '99.9%', label: '系統穩定性', icon: Target },
  { number: '24/7', label: '技術支援', icon: Lightbulb }
]

const team = [
  {
    name: '張工程師',
    position: '技術總監',
    expertise: 'AOI 視覺檢測、機器學習',
    experience: '15 年經驗'
  },
  {
    name: '李經理',
    position: '專案經理',
    expertise: '系統整合、專案管理',
    experience: '12 年經驗'
  },
  {
    name: '王博士',
    position: 'AI 研發主管',
    expertise: '深度學習、數據分析',
    experience: '10 年經驗'
  },
  {
    name: '陳工程師',
    position: '軟體開發主管',
    expertise: '系統開發、API 設計',
    experience: '8 年經驗'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">關於我們</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              專業的自動化整合公司，致力於為企業提供最優質的智能化解決方案
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">我們的故事</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Sunrider Automation 成立於 2015 年，是一家專注於自動化整合技術的創新公司。
                  我們致力於將最新的 AI、機器視覺、機器人技術與傳統製造業相結合，
                  為客戶提供完整的智能化解決方案。
                </p>
                <p>
                  經過多年的發展，我們已經成功服務了超過 100 家企業客戶，
                  涵蓋電子製造、汽車工業、食品加工等多個行業。
                  我們的團隊由經驗豐富的工程師和技術專家組成，
                  擁有深厚的技術底蘊和豐富的實戰經驗。
                </p>
                <p>
                  我們相信，技術的價值在於解決實際問題。
                  因此，我們始終以客戶需求為導向，
                  提供客製化的解決方案，幫助企業提升效率、降低成本、增強競爭力。
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl border border-dark-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 bg-primary-400 rounded-full" />
                  </div>
                  <p className="text-gray-400">公司環境</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400/5 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">我們的成就</span>
            </h2>
            <p className="text-xl text-gray-300">
              用數據說話，展現我們的專業實力
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">我們的使命</h3>
              <p className="text-gray-300 leading-relaxed">
                通過創新的自動化技術，幫助企業實現智能化轉型，
                提升生產效率，降低運營成本，創造更大的商業價值。
                我們致力於成為客戶最信賴的技術合作夥伴。
              </p>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">我們的願景</h3>
              <p className="text-gray-300 leading-relaxed">
                成為亞洲領先的自動化整合解決方案提供商，
                推動製造業的智能化升級，讓每一家企業都能享受到
                先進技術帶來的便利和效益。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">專業團隊</span>
            </h2>
            <p className="text-xl text-gray-300">
              經驗豐富的技術專家，為您提供最優質的服務
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-2">{member.position}</p>
                <p className="text-gray-300 text-sm mb-2">{member.expertise}</p>
                <p className="text-gray-400 text-xs">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">核心價值</span>
            </h2>
            <p className="text-xl text-gray-300">
              我們堅持的價值觀，指引我們前進的方向
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">專業品質</h3>
              <p className="text-gray-300">
                追求卓越的技術品質，確保每一個解決方案都能達到最高標準
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">客戶至上</h3>
              <p className="text-gray-300">
                以客戶需求為中心，提供客製化的解決方案和優質的服務體驗
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">持續創新</h3>
              <p className="text-gray-300">
                不斷探索新技術，推動行業發展，為客戶創造更大的價值
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
