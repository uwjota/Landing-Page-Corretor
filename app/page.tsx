'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  Award,
  Play,
  Calendar,
  MessageSquare,
  Home,
  DollarSign,
  Clock
} from 'lucide-react'

export default function HomePage() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    tipo: 'morar',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsLoading(true)
    
    try {
      // Usar FormSubmit para sites estáticos
      const response = await fetch('https://formsubmit.co/corretormerodio@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          telefone: formData.telefone,
          tipo: formData.tipo,
          _subject: `Novo contato do site - ${formData.tipo}`,
          _template: 'table'
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Limpar o formulário
        setFormData({
          nome: '',
          telefone: '',
          tipo: 'morar'
        })
      } else {
        alert('Erro ao enviar mensagem. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const testimonials = [
    {
      id: 1,
      name: 'Maria Santos',
      role: 'Compradora',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'O Nathan me ajudou a encontrar minha casa dos sonhos em apenas 2 semanas! Processo super transparente e sem surpresas.'
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      role: 'Vendedor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Vendi meu apartamento 15% acima do preço de mercado em 1 mês. O Nathan é realmente um especialista!'
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Investidora',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Com a consultoria do Nathan, consegui fazer meu primeiro investimento imobiliário com segurança e lucro garantido.'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-4 border border-green-100"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Obrigado!</h1>
          <p className="text-gray-600 mb-6">
            Sua mensagem foi enviada com sucesso. Vou entrar em contato em até 24 horas!
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-colors"
          >
            Voltar para o site
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header com VSL */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        {/* Animação de fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 via-emerald-100/20 to-teal-100/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 via-transparent to-emerald-200/20 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* VSL */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
                Saiba Como Encontrar o <span className="text-green-600">Imóvel dos Seus Sonhos</span>
              </h1>
              <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Assista ao vídeo e descubra como eu comprei meu primeiro imóvel ganhando 1 salário mínimo — e como você também pode.
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                {!showVideo ? (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform"
                  >
                    <img 
                      src="/imagens/thumb nathan.png" 
                      alt="Thumbnail do vídeo VSL"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6">
                        <Play className="w-16 h-16 text-white fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-semibold">Vídeo Exclusivo</p>
                      <p className="text-sm opacity-90">Clique para assistir</p>
                    </div>
                  </button>
                ) : (
                  <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/vHLZeqwQR5U?autoplay=1"
                      className="w-full h-full"
                      allowFullScreen
                      allow="autoplay; encrypted-media"
                    />
                  </div>
                )}
              </div>

              {/* Botão de scroll */}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                onClick={() => document.getElementById('vamos-conversar')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quero Falar com o Nathan
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-20 bg-green-50 relative overflow-hidden">
        {/* Animação de fundo sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 via-emerald-100/10 to-teal-100/20 animate-pulse" style={{animationDuration: '8s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Quem é o <span className="text-green-600">Nathan</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Olá! Sou Nathan, consultor de imóveis há mais de 4 anos. Ajudei mais de 40 famílias a encontrar o lar dos sonhos.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="transition-transform"
            >
              <img 
                src="/imagens/nathan.jpg" 
                alt="Nathan - Consultor de Imóveis"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 transition-transform"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Minha História</h3>
                <p className="text-gray-600 mb-4">
                Eu poderia ser só mais um corretor, mas nunca me contentei com isso.
Desde o começo, entendi que cada cliente tem uma história diferente, e que comprar um imóvel não é só fechar um contrato. É mudar de vida, realizar um sonho, conquistar algo que vai muito além das paredes.

                </p>
                <p className="text-gray-600">
                Foi aí que deixei de ser só “o cara que vende” pra ser um consultor de verdade.
Alguém que escuta de verdade, que explica tudo com clareza, que tá junto do início ao fim e que briga pelo melhor negócio pro cliente, como se fosse pra mim mesmo.

Hoje, faço meu trabalho com foco total na pessoa que tá do outro lado. E isso faz toda a diferença.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-500 text-white p-6 rounded-xl text-center shadow-lg transition-transform"
                >
                  <div className="text-3xl font-bold">40+</div>
                  <div className="text-sm">Imóveis Vendidos</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-emerald-600 text-white p-6 rounded-xl text-center shadow-lg transition-transform"
                >
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Clientes Satisfeitos</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">O que meus <span className="text-green-600">clientes</span> dizem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja os depoimentos de quem já encontrou o imóvel perfeito comigo
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-green-50 p-8 rounded-2xl shadow-lg border border-green-100 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                ))}
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">"{testimonials[currentTestimonial].text}"</p>
            </motion.div>

            {/* Indicadores */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-green-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato/Formulário */}
      <section id="contato" className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden">
        {/* Animação de fundo para a seção de contato */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-teal-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/15 via-transparent to-emerald-400/15 animate-pulse" style={{animationDuration: '6s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Estatísticas */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Por que escolher o <span className="text-green-300">Nathan</span>?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Números que comprovam minha eficiência e dedicação aos clientes
            </p>
          </motion.div>

          {/* Cards de Estatísticas */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center border border-white border-opacity-20 transition-transform"
            >
              <Building className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">40+</div>
              <div className="text-white text-sm">Imóveis Vendidos</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center border border-white border-opacity-20 transition-transform"
            >
              <Award className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white text-sm">Satisfação</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center border border-white border-opacity-20 transition-transform"
            >
              <Clock className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-white text-sm">Anos de Experiência</div>
            </motion.div>
          </motion.div>

          {/* Título do Formulário */}
          <motion.div 
            id="vamos-conversar"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos <span className="text-green-300">Conversar</span>?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Preencha o formulário abaixo e eu mesmo entrarei em contato em até 24 horas para uma consultoria gratuita
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.form 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white border-opacity-20"
            >
              <div className="grid md:grid-cols-1 gap-6 mb-6">
                <div>
                  <label className="block text-white font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-70"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-medium mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-70"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Tipo de Interesse</label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white bg-opacity-10 text-white"
                  >
                    <option value="morar">Morar</option>
                    <option value="investir">Investir</option>
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-8 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                } text-white`}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem para o Nathan'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Menu Inferior */}
      <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500"
          >
            <p>&copy; 2025 Nathan - Consultor de Imóveis. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
} 