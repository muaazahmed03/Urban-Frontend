"use client"

import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import {
  Smartphone,
  Calendar,
  User,
  CreditCard,
  Star,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Home,
} from "lucide-react"

const HowItWorks = () => {
  const { user } = useAuth()

  const steps = [
    {
      id: 1,
      icon: Smartphone,
      title: "Book Online",
      description: "Choose your service, duration, and preferred time slot in just a few clicks",
      details: [
        "Browse our range of massage services",
        "Select duration (60, 90, or 120 minutes)",
        "Pick your preferred date and time",
        "Add your location details",
      ],
    },
    {
      id: 2,
      icon: User,
      title: "Therapist Assignment",
      description: "We match you with a qualified, vetted therapist in your area",
      details: [
        "Licensed and certified professionals",
        "Background checked and insured",
        "Rated 4.9+ stars by customers",
        "Specialized in your chosen service",
      ],
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "Confirmation & Updates",
      description: "Get instant confirmation and real-time updates about your booking",
      details: [
        "Instant booking confirmation",
        "Therapist details and photo",
        "SMS updates on arrival time",
        "Direct contact with therapist",
      ],
    },
    {
      id: 4,
      icon: Home,
      title: "Therapist Arrives",
      description: "Your therapist arrives at your location with all necessary equipment",
      details: [
        "Arrives 5-10 minutes early",
        "Brings professional massage table",
        "Premium oils and towels included",
        "Sets up in your preferred room",
      ],
    },
    {
      id: 5,
      icon: Star,
      title: "Enjoy Your Massage",
      description: "Relax and enjoy your professional massage in the comfort of your space",
      details: [
        "Customized to your preferences",
        "Professional techniques",
        "Relaxing atmosphere",
        "Full privacy and comfort",
      ],
    },
    {
      id: 6,
      icon: CreditCard,
      title: "Easy Payment",
      description: "Secure payment processing after your session is complete",
      details: ["Contactless payment", "Secure card processing", "Digital receipt", "Optional tip through app"],
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Same-Day Booking",
      description: "Book and get a massage within 60 minutes",
    },
    {
      icon: Shield,
      title: "Vetted Professionals",
      description: "All therapists are licensed, insured, and background-checked",
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently rated 5 stars by thousands of customers",
    },
    {
      icon: Home,
      title: "Your Space",
      description: "Enjoy massage in the comfort of your home, office, or hotel",
    },
  ]

  const faqs = [
    {
      question: "How quickly can I get a massage?",
      answer:
        "Most bookings are available within 60 minutes. Same-day appointments are our specialty, though you can also book up to 30 days in advance.",
    },
    {
      question: "What do I need to prepare?",
      answer:
        "Nothing! Our therapists bring everything needed including a professional massage table, premium oils, fresh linens, and towels. Just ensure you have a quiet space available.",
    },
    {
      question: "Are the therapists qualified?",
      answer:
        "Yes, all our therapists are licensed massage professionals with proper certifications. They undergo background checks, insurance verification, and continuous training.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve major metropolitan areas. Enter your address during booking to check availability in your location.",
    },
    {
      question: "Can I choose my therapist?",
      answer:
        "Yes! You can either let us auto-assign the best available therapist or choose from available professionals in your area during the booking process.",
    },
    {
      question: "What if I need to cancel?",
      answer:
        "You can cancel up to 2 hours before your appointment for a full refund. Cancellations within 2 hours are subject to a 50% charge.",
    },
    {
      question: "Is it safe?",
      answer:
        "Absolutely. All therapists are background-checked, licensed, and insured. We also have 24/7 customer support and real-time booking tracking for your safety.",
    },
    {
      question: "How do I pay?",
      answer:
        "Payment is processed securely through the app after your session. We accept all major credit cards and digital payment methods.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">How Urban Massage Works</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional massage therapy delivered to your door in 6 simple steps. Book now and relax in 60 minutes or
            less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={user ? "/services" : "/register"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Book Your Massage</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+1-555-MASSAGE"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium text-lg px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple 6-Step Process</h2>
            <p className="text-xl text-gray-600">From booking to bliss in just a few clicks</p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <step.icon className="text-blue-600" size={32} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-blue-600 mb-1">Step {step.id}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center justify-center lg:justify-start space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <step.icon className="text-blue-600" size={40} />
                    </div>
                    <div className="text-6xl font-bold text-blue-600 mb-2">{step.id}</div>
                    <div className="text-gray-600 font-medium">{step.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Urban Massage?</h2>
            <p className="text-xl text-gray-600">The most convenient way to get professional massage therapy</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our service</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Experience Urban Massage?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose Urban Massage for convenient, professional massage therapy
            at home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to={user ? "/services" : "/register"}
              className="bg-white text-blue-600 hover:bg-gray-50 font-semibold text-lg px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>Book Now</span>
            </Link>
            <Link
              to="/services"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Star size={20} />
              <span>View Services</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} />
              <span>Same-day availability</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={16} />
              <span>Licensed professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={16} />
              <span>5-star rated service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
