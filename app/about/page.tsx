import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, Target, Award, Lightbulb } from 'lucide-react'

const stats = [
  { number: '100+', label: '成功案例', icon: Award },
  { number: '4+', label: '產業領域', icon: Users },
  { number: '99.9%', label: '系統穩定性', icon: Target },
  { number: '15+', label: '年實務經驗', icon: Lightbulb }
]

const team = [
  {
    name: '技術總監',
    position: '自動化整合專家',
    expertise: '半導體設備整合、AOI 視覺檢測',
    experience: '15 年現場實務經驗'
  },
  {
    name: '專案經理',
    position: '系統整合專家',
    expertise: '面板產業自動化、專案管理',
    experience: '12 年產業經驗'
  },
  {
    name: 'AI 研發主管',
    position: '智能檢測專家',
    expertise: 'AI 視覺檢測、智慧控制',
    experience: '10 年研發經驗'
  },
  {
    name: '軟體開發主管',
    position: '系統開發專家',
    expertise: '製造執行系統、數據分析',
    experience: '8 年開發經驗'
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
              向陽自動化 - 專業的自動化整合公司，致力於為企業提供最優質的智能化解決方案
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
                  由具多年自動化整合與現場實務經驗的專業團隊所組成，
                  向陽自動化致力於為客戶量身打造高效、穩定的自動化解決方案。
                  我們深知每個製程環節都有其獨特挑戰，
                  因此從需求分析、系統設計到現場導入，
                  皆以精準思維與嚴謹態度協助客戶優化生產流程，
                  提升整體產能效率與作業安全性。
                </p>
                <p>
                  向陽的服務足跡橫跨半導體、面板、電子產業、傳統製造等多元產業，
                  並持續拓展 AI 視覺檢測與智慧控制等新興應用領域。
                  我們不侷限於既有框架，而是以技術為核心、以實務為導向，
                  積極探索自動化在未來製造中的更多可能性。
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
              <span className="gradient-text">我們的實力</span>
            </h2>
            <p className="text-xl text-gray-300">
              橫跨多元產業的豐富經驗，展現我們的專業實力
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
                以精準思維與嚴謹態度，為客戶量身打造高效、穩定的自動化解決方案。
                從需求分析到現場導入，我們致力於優化每個製程環節，
                提升整體產能效率與作業安全性，成為客戶最信賴的技術合作夥伴。
              </p>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">我們的願景</h3>
              <p className="text-gray-300 leading-relaxed">
                以技術為核心、以實務為導向，積極探索自動化在未來製造中的更多可能性。
                我們不侷限於既有框架，持續拓展 AI 視覺檢測與智慧控制等新興應用領域，
                推動製造業的智能化升級。
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
              具多年自動化整合與現場實務經驗的專業團隊
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
              <h3 className="text-xl font-bold text-white mb-3">精準思維</h3>
              <p className="text-gray-300">
                以嚴謹態度分析每個製程環節，確保解決方案的精準度與可靠性
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">實務導向</h3>
              <p className="text-gray-300">
                基於多年現場實務經驗，提供符合實際需求的客製化解決方案
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">技術創新</h3>
              <p className="text-gray-300">
                持續探索 AI 視覺檢測與智慧控制等新興技術，推動製造業智能化升級
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
