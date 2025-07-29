import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  CheckCircle, 
  Star, 
  BookOpen, 
  Users, 
  Zap, 
  Shield, 
  Award,
  MessageCircle,
  ChevronDown,
  Gift,
  Download,
  Target
} from "lucide-react";
import productDemo from "@/assets/product-demo.jpg";
import pastorTestimonial1 from "@/assets/pastor-testimonial-1.jpg";
import pastorTestimonial2 from "@/assets/pastor-testimonial-2.jpg";
import pastorTestimonial3 from "@/assets/pastor-testimonial-3.jpg";

const SalesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      title: "Ahorra Horas de Preparación",
      description: "Genera sermones completos en minutos, no en horas"
    },
    {
      icon: BookOpen,
      title: "Estructuras Profesionales",
      description: "Bosquejos organizados con introducción, puntos y conclusión"
    },
    {
      icon: Zap,
      title: "IA Especializada",
      description: "Tecnología específicamente entrenada para contenido cristiano"
    },
    {
      icon: Users,
      title: "Para Todos los Niveles",
      description: "Ideal tanto para principiantes como predicadores experimentados"
    },
    {
      icon: Target,
      title: "Mensajes Impactantes",
      description: "Crea predicaciones poderosas que transformen vidas"
    },
    {
      icon: CheckCircle,
      title: "Fácil de Usar",
      description: "Interfaz simple e intuitiva, sin complicaciones técnicas"
    }
  ];

  const testimonials = [
    {
      name: "Pastor Carlos Mendoza",
      church: "Iglesia El Buen Pastor",
      image: pastorTestimonial1,
      text: "Sermón Maker ha revolucionado mi preparación. Lo que antes me tomaba 6 horas, ahora lo hago en 30 minutos. Los bosquejos son excelentes y mis predicaciones han mejorado notablemente."
    },
    {
      name: "Pastora María González",
      church: "Centro Cristiano Nueva Vida",
      image: pastorTestimonial2,
      text: "Como pastora ocupada, necesitaba una herramienta que me ayudara sin comprometer la calidad. Sermón Maker es exactamente eso. Mis sermones son más organizados y poderosos."
    },
    {
      name: "Pastor David Ramírez",
      church: "Iglesia Roca Firme",
      image: pastorTestimonial3,
      text: "Llevaba años predicando pero siempre luchaba con la estructura. Con Sermón Maker, mis mensajes son claros, ordenados y la congregación está más atenta que nunca."
    }
  ];

  const bonuses = [
    {
      icon: "📘",
      title: "+100 Bosquejos Listos para Predicar",
      description: "Una biblioteca completa de bosquejos sobre temas variados",
      value: "$97"
    },
    {
      icon: "📕",
      title: "Guía Completa para Memorizar Sermones",
      description: "Técnicas probadas para memorizar sermones y versículos bíblicos",
      value: "$47"
    },
    {
      icon: "📗",
      title: "Consejos Valiosos para Mejorar tu Predicación",
      description: "Estrategias de comunicación efectiva desde el púlpito",
      value: "$37"
    },
    {
      icon: "📙",
      title: "Guía Práctica para Predicar sobre Cualquier Tema",
      description: "Metodología paso a paso para abordar cualquier pasaje bíblico",
      value: "$57"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo funciona exactamente Sermón Maker?",
      answer: "Simplemente ingresas el tema o texto bíblico que quieres predicar, y nuestra IA especializada genera automáticamente un bosquejo completo con introducción, puntos principales, aplicaciones prácticas y conclusión. Todo basado en principios bíblicos sólidos."
    },
    {
      question: "¿Necesito conocimientos técnicos para usarlo?",
      answer: "Para nada. Sermón Maker está diseñado para ser extremadamente fácil de usar. Si sabes escribir un email, puedes usar nuestra herramienta. La interfaz es intuitiva y no requiere ningún conocimiento técnico."
    },
    {
      question: "¿Los sermones generados son bíblicamente sólidos?",
      answer: "Absolutamente. Nuestra IA ha sido entrenada específicamente con contenido cristiano de calidad y siempre se basa en principios bíblicos ortodoxos. Sin embargo, recomendamos que siempre revises el contenido y añadas tu toque personal."
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con el resultado?",
      answer: "Ofrecemos una garantía de satisfacción de 30 días. Si por cualquier razón no estás completamente satisfecho, te devolvemos el 100% de tu dinero, sin preguntas."
    },
    {
      question: "¿Los bonos están incluidos en el precio?",
      answer: "Sí, todos los bonos están incluidos en esta oferta especial por tiempo limitado. Es un valor total de $238 que obtienes completamente gratis con tu compra de Sermón Maker."
    },
    {
      question: "¿Puedo usar los sermones generados libremente?",
      answer: "Completamente. Todos los bosquejos y sermones que generes son 100% tuyos para usar como desees en tu ministerio. No hay restricciones de ningún tipo."
    }
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Sermón Maker</span>
          </div>
          <Button variant="spiritual" size="lg" onClick={scrollToPricing}>
            Acceder Ahora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-peaceful">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
            🚀 Oferta Especial por Tiempo Limitado
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Crea Sermones 
            <span className="bg-gradient-spiritual bg-clip-text text-transparent"> Poderosos</span>
            <br />en Solo Minutos
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforma tu preparación de sermones con IA especializada. 
            De horas frustrantes a minutos de claridad. 
            <strong className="text-spiritual-blue">Estructura perfecta, mensaje impactante.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="spiritual" size="xl" onClick={scrollToPricing}>
              Empieza a Predicar con Poder Hoy
            </Button>
            <Button variant="peaceful" size="xl">
              Ver Demostración <ChevronDown className="ml-2" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-spiritual-blue" />
              <span>Sin conocimientos técnicos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-spiritual-blue" />
              <span>Garantía de 30 días</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-spiritual-blue" />
              <span>+$238 en bonos gratis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Por Qué Sermón Maker Está Transformando 
              <span className="text-spiritual-blue"> la Predicación?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desarrollado por expertos en predicación y tecnología, 
              Sermón Maker elimina las horas de frustración y te da estructura profesional al instante.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-peaceful transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-soft-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-spiritual-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mira Sermón Maker en 
              <span className="text-spiritual-blue"> Acción</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interfaz simple, resultados profesionales. Así de fácil es crear sermones estructurados.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-divine p-4">
              <img 
                src={productDemo} 
                alt="Demostración de Sermón Maker" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="font-semibold text-foreground mb-2">Ingresa tu Tema</h3>
                <p className="text-muted-foreground">Escribe el tema o texto bíblico que quieres predicar</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="font-semibold text-foreground mb-2">IA Genera Estructura</h3>
                <p className="text-muted-foreground">Nuestra IA crea un bosquejo completo y profesional</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="font-semibold text-foreground mb-2">Personaliza y Predica</h3>
                <p className="text-muted-foreground">Añade tu toque personal y presenta con confianza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Esto es lo que Dicen los 
              <span className="text-spiritual-blue"> Predicadores</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Pastores de toda Latinoamérica ya están transformando su ministerio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.church}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gradient-peaceful">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              🎁 Bonos Exclusivos por Tiempo Limitado
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Accede Ahora y Recibe
              <span className="text-spiritual-blue"> $238 en Bonos</span> Gratis
            </h2>
            <p className="text-xl text-muted-foreground">
              Recursos adicionales para llevar tu predicación al siguiente nivel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="border-2 border-gold/20 shadow-divine">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{bonus.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-foreground text-lg">{bonus.title}</h3>
                        <Badge variant="outline" className="text-spiritual-blue border-spiritual-blue">
                          Valor: {bonus.value}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{bonus.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-foreground mb-4">
              Valor Total de los Bonos: <span className="text-spiritual-blue">$238</span>
            </p>
            <p className="text-xl text-muted-foreground">
              Pero hoy los obtienes <strong className="text-spiritual-blue">completamente GRATIS</strong> con tu acceso a Sermón Maker
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Accede Hoy y Transforma tu 
            <span className="text-spiritual-blue"> Ministerio</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="border-2 border-gold shadow-divine relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-spiritual text-white">
                  Oferta Limitada
                </Badge>
              </div>
              
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Sermón Maker + 4 Bonos Exclusivos
                </h3>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-spiritual-blue">$47</span>
                  <span className="text-xl text-muted-foreground line-through ml-4">$285</span>
                  <p className="text-muted-foreground mt-2">Pago único • Acceso inmediato • Sin mensualidades</p>
                </div>

                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-spiritual-blue flex-shrink-0" />
                    <span>Acceso completo a Sermón Maker con IA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-spiritual-blue flex-shrink-0" />
                    <span>+100 Bosquejos listos para predicar ($97)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-spiritual-blue flex-shrink-0" />
                    <span>Guía para memorizar sermones ($47)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-spiritual-blue flex-shrink-0" />
                    <span>Consejos para mejorar predicación ($37)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-spiritual-blue flex-shrink-0" />
                    <span>Guía para predicar cualquier tema ($57)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-spiritual-blue flex-shrink-0" />
                    <span>Garantía de satisfacción 30 días</span>
                  </div>
                </div>

                <Button variant="spiritual" size="xl" className="w-full mb-4">
                  <Gift className="mr-2" />
                  Accede Ahora a Sermón Maker + 4 Bonos Exclusivos
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  🔒 Pago seguro • ⚡ Acceso instantáneo • 🎯 Sin riesgo con garantía de 30 días
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-soft-blue rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-spiritual-blue mb-4">
              🛡️ Garantía de Satisfacción Total por 30 Días
            </h3>
            <p className="text-spiritual-blue/80 leading-relaxed">
              Estamos tan seguros de que Sermón Maker transformará tu preparación de sermones, 
              que te ofrecemos una garantía completa. Si por cualquier razón no estás 100% satisfecho 
              en los próximos 30 días, te devolvemos todo tu dinero sin preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Preguntas 
              <span className="text-spiritual-blue"> Frecuentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Resolvemos las dudas más comunes sobre Sermón Maker
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <Separator className="mb-4" />
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-spiritual">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Proclamar la Palabra 
            <br />con Estructura y Claridad?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            No dejes que la preparación de sermones sea tu mayor frustración. 
            Únete a cientos de predicadores que ya están usando Sermón Maker.
          </p>
          
          <div className="space-y-4">
            <Button variant="outline" size="xl" className="bg-white text-spiritual-blue hover:bg-white/90" onClick={scrollToPricing}>
              <Award className="mr-2" />
              Accede Ahora con Todos los Bonos por Solo $47
            </Button>
            <p className="text-sm opacity-75">
              ⏰ Oferta especial por tiempo limitado • Solo quedan algunos cupos
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">Sermón Maker</span>
          </div>
          <p className="text-background/70 mb-4">
            Transformando la preparación de sermones con inteligencia artificial
          </p>
          <p className="text-background/50 text-sm">
            © 2024 Sermón Maker. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SalesPage;