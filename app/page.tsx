"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Download, Github, Mail, Heart, Cat, Plane, BookOpen, Code, Music } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProjectLink from "@/components/project-link"
import TimelineEvent from "@/components/timeline-event"
import { useMobile } from "@/hooks/use-mobile"
import Head from 'next/head';

export default function Home() {
  const isMobile = useMobile()
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null!)
  const aboutRef = useRef<HTMLDivElement>(null!)
  const journeyRef = useRef<HTMLDivElement>(null!)
  const passionsRef = useRef<HTMLDivElement>(null!)
  const projectsRef = useRef<HTMLDivElement>(null!)
  const contactRef = useRef<HTMLDivElement>(null!)


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const checkVisible = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return false
    const rect = ref.current.getBoundingClientRect()
    return rect.top <= window.innerHeight * 0.75 && rect.bottom >= window.innerHeight * 0.25
  }

  const isHeroVisible = heroRef.current ? checkVisible(heroRef) : false
  const isAboutVisible = aboutRef.current ? checkVisible(aboutRef) : false
  const isJourneyVisible = journeyRef.current ? checkVisible(journeyRef) : false
  const isPassionsVisible = passionsRef.current ? checkVisible(passionsRef) : false
  const isProjectsVisible = projectsRef.current ? checkVisible(projectsRef) : false
  const isContactVisible = contactRef.current ? checkVisible(contactRef) : false  

  return (
    <div className="min-h-screen bg-[#FFFAF0] dark:bg-[#121212] text-[#333333] dark:text-[#F5F5F5] overflow-x-hidden">
      {/* Floating elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-[#FFD4D4] opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full bg-[#D4F1F9] opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[15%] left-[20%] w-72 h-72 rounded-full bg-[#E2F0CB] opacity-20 blur-3xl animate-pulse"></div>

        {/* Floating icons */}
        <div
          className="absolute hidden md:block"
          style={{
            top: `${Math.max(15, 15 + scrollY * 0.02)}%`,
            left: `${Math.max(5, 5 + Math.sin(scrollY * 0.002) * 5)}%`,
            transform: `rotate(${scrollY * 0.05}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Code className="text-[#FF6B6B] opacity-30 w-12 h-12" />
        </div>
        <div
          className="absolute hidden md:block"
          style={{
            top: `${Math.max(40, 40 + scrollY * 0.01)}%`,
            right: `${Math.max(8, 8 + Math.cos(scrollY * 0.002) * 5)}%`,
            transform: `rotate(${-scrollY * 0.03}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Cat className="text-[#4ECDC4] opacity-30 w-10 h-10" />
        </div>
        <div
          className="absolute hidden md:block"
          style={{
            bottom: `${Math.max(20, 20 + scrollY * 0.015)}%`,
            left: `${Math.max(15, 15 + Math.sin(scrollY * 0.001) * 5)}%`,
            transform: `rotate(${scrollY * 0.04}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Music className="text-[#FFD166] opacity-30 w-14 h-14" />
        </div>
      </div>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-[#FFFAF0]/80 dark:bg-[#121212]/80 border-b border-[#E6E6E6] dark:border-[#2A2A2A]">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <span className="text-[#FF6B6B]">Dev</span>
            <span className="text-[#4ECDC4]">Story</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-[#666666] hover:text-[#FF6B6B] transition-colors dark:text-[#AAAAAA] dark:hover:text-[#FF6B6B]"
            >
              About
            </Link>
            <Link
              href="#journey"
              className="text-[#666666] hover:text-[#FF6B6B] transition-colors dark:text-[#AAAAAA] dark:hover:text-[#FF6B6B]"
            >
              Journey
            </Link>
            <Link
              href="#passions"
              className="text-[#666666] hover:text-[#FF6B6B] transition-colors dark:text-[#AAAAAA] dark:hover:text-[#FF6B6B]"
            >
              Passions
            </Link>
            <Link
              href="#projects"
              className="text-[#666666] hover:text-[#FF6B6B] transition-colors dark:text-[#AAAAAA] dark:hover:text-[#FF6B6B]"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-[#666666] hover:text-[#FF6B6B] transition-colors dark:text-[#AAAAAA] dark:hover:text-[#FF6B6B]"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#666666] dark:text-[#AAAAAA]"
              onClick={() => {
                document.documentElement.classList.toggle("dark")
              }}
            >
              <span className="sr-only">Toggle theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden dark:block"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="block dark:hidden"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </Button>
            <Button asChild className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white border-none">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-32 relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className={`min-h-[90vh] flex flex-col justify-center items-center text-center transition-opacity duration-1000 ${isHeroVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] animate-pulse blur-xl opacity-30"></div>
            <div
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg dark:border-[#2A2A2A]"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <img src="/profile.jpg?height=160&width=160" alt="Profile" className="object-cover" />
            </div>
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 relative"
            style={{
              transform: `translateY(${scrollY * 0.08}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <span className="text-[#FF6B6B]">Hello, I'm </span>
            <span className="text-[#4ECDC4]">Vivian</span>
            <span className="absolute -top-6 right-0 md:right-20 text-5xl animate-bounce">👋</span>
          </h1>
          <p
            className="text-xl text-[#666666] max-w-2xl mb-8 dark:text-[#AAAAAA]"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            A developer with a passion for creativity, travel, and building things that matter
          </p>
          <div
            className="flex gap-4"
            style={{
              transform: `translateY(${scrollY * 0.12}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Button
              asChild
              className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white border-none rounded-full px-6 shadow-md"
            >
              <a href="#about">My Story</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4]/10"
            >
              <a href="#projects">My Work</a>
            </Button>
          </div>
          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            style={{
              opacity: Math.max(0, 1 - scrollY * 0.005),
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className={`scroll-mt-20 transition-all duration-1000 ${isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="relative z-10">My Story</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-[#FFD166]/40 -z-10 rounded-full"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="space-y-6 bg-white p-8 rounded-2xl shadow-lg dark:bg-[#1E1E1E]"
              style={{
                transform: isAboutVisible ? "translateX(0)" : "translateX(-50px)",
                opacity: isAboutVisible ? 1 : 0,
                transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              }}
            >
              <p className="text-lg text-[#444444] dark:text-[#DDDDDD] leading-relaxed">
                Music is a big part of my life—I listen before, during, and after sleeping, especially R&B and mellow songs. 
                I love food, from spicy Samyang noodles to crispy seaweed, and I enjoy exploring different cuisines.
              </p>
              <p className="text-lg text-[#444444] dark:text-[#DDDDDD] leading-relaxed">
                I never planned to be a developer; I once dreamed of being a doctor. But as I grew up, the IT industry fascinated me, 
                and I found my passion in building applications. As an introvert, I’m quiet and awkward, but when it comes to my career, 
                I speak with confidence.
              </p>
              <p className="text-lg text-[#444444] dark:text-[#DDDDDD] leading-relaxed">
                After my contract ended, I didn’t waste time. I’m focused on growing my skills, building my portfolio, and enjoying life 
                with my favorite music and my cats—who, along with my family, inspire me to keep pushing forward.
              </p>
            </div>
            <div
              className="grid grid-cols-2 gap-4"
              style={{
                transform: isAboutVisible ? "translateX(0)" : "translateX(50px)",
                opacity: isAboutVisible ? 1 : 0,
                transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
                transitionDelay: "0.2s",
              }}
            >
              <div className="bg-[#FFE8E8] p-6 rounded-2xl flex flex-col items-center text-center space-y-2 dark:bg-[#2A2222]">
                <Heart className="h-8 w-8 text-[#FF6B6B] mb-2" />
                <h3 className="font-semibold text-[#FF6B6B]">Values</h3>
                <p className="text-sm text-[#666666] dark:text-[#BBBBBB]">
                  Authenticity, creativity, and continuous learning
                </p>
              </div>
              <div className="bg-[#E8F8F5] p-6 rounded-2xl flex flex-col items-center text-center space-y-2 dark:bg-[#222A28]">
                <Cat className="h-8 w-8 text-[#4ECDC4] mb-2" />
                <h3 className="font-semibold text-[#4ECDC4]">Daily Ritual</h3>
                <p className="text-sm text-[#666666] dark:text-[#BBBBBB]">
                  Cleaning litter box every morning and night then give my cats a food, they will shout at you so you need to give them what they want 😈. 
                </p>
              </div>
              <div className="bg-[#FFF8E8] p-6 rounded-2xl flex flex-col items-center text-center space-y-2 dark:bg-[#2A2922]">
                <Plane className="h-8 w-8 text-[#FFD166] mb-2" />
                <h3 className="font-semibold text-[#FFD166]">Wanderlust</h3>
                <p className="text-sm text-[#666666] dark:text-[#BBBBBB]">Visited Boracay, La Union, Ilocos, etc. and I want more travels as soon as I grow</p>
              </div>
              <div className="bg-[#F0F8E8] p-6 rounded-2xl flex flex-col items-center text-center space-y-2 dark:bg-[#252A22]">
                <BookOpen className="h-8 w-8 text-[#6BCB77] mb-2" />
                <h3 className="font-semibold text-[#6BCB77]">Learning</h3>
                <p className="text-sm text-[#666666] dark:text-[#BBBBBB]">Currently studying kafka, node-red and exploring frameworks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section
          id="journey"
          ref={journeyRef}
          className={`scroll-mt-20 transition-all duration-1000 ${isJourneyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="relative z-10">My Journey</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-[#4ECDC4]/40 -z-10 rounded-full"></span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#E6E6E6] dark:bg-[#2A2A2A] rounded-full"></div>

            <div className="space-y-24 relative">
              <TimelineEvent
                year="2018"
                title="The Beginning"
                description="Wrote my first line of code as my first activity. It was a simple java to analyze data declaration."
                icon="📚"
                position="left"
                isVisible={isJourneyVisible}
                delay={0}
              />

              <TimelineEvent
                year="2019"
                title="Project Learning"
                description="As part of midterm exam, I created a payroll and enrollment system. Did not sleep for 1 day just to finished this, 
                it was a huge sacrifice and I cried a lot :("
                icon="💻"
                position="right"
                isVisible={isJourneyVisible}
                delay={0.2}
              />

              <TimelineEvent
                year="2020"
                title="Pandemic code era"
                description="It was so challenging and I am losing hope because of what's happening in the world but thank God I have a wonderful 
                friends and teachers that supported me during that time, I know it was challenging for them also and I love them. They're the reason why 
                I'm holding on to my passion"
                icon="😷"
                position="left"
                isVisible={isJourneyVisible}
                delay={0.4}
              />

              <TimelineEvent
                year="2023"
                title="First job journey in IT industry"
                description="I was so excited after being accepted in the job. I was a Web and App developer that time. Sir Julius fully trusted me, 
                he allows me to revise a company website (check euodoo.com.ph 😊). He made me pick what kind of framework I am comfortable with.
                I handled a lot of project, I think 4-5 projects. Never regreted to be in there. I love them but I need to move forward for
                a better opportunity."
                icon="👔"
                position="right"
                isVisible={isJourneyVisible}
                delay={0.6}
              />

              <TimelineEvent
                year="2024"
                title="Lezzgo Bigger Client"
                description="I was so excited, imagining being a newbie and prulife (sir Lito) welcome me to his team and it was the best team I have.
                I feel really amazed because of these amazing experienced developers I am with. I love that they never leave me behind, 
                I love how they want me to learn, I love how they made me feel inluded even in personal talks even though I am the only girl with an awkward personality. 
                I love them all. It was the best experience."
                icon="📈"
                position="left"
                isVisible={isJourneyVisible}
                delay={0.8}
              />

              <TimelineEvent
                year="Now"
                title="Current Chapter"
                description="Sadly, my contract with prulife has ended and I know it happens for a reason, I know it will be bigger, I know it will
                be better."
                icon="✨"
                position="right"
                isVisible={isJourneyVisible}
                delay={1}
              />
            </div>
          </div>
        </section>

        {/* Passions Section */}
        <section
          id="passions"
          ref={passionsRef}
          className={`scroll-mt-20 transition-all duration-1000 ${isPassionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="relative z-10">My Passions</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-[#FF6B6B]/40 -z-10 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className={`overflow-hidden transition-all duration-700 ${isPassionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="h-48 bg-[#FFE8E8] dark:bg-[#2A2222] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🎵</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#FF6B6B]">Music</h3>
                <p className="text-[#666666] dark:text-[#AAAAAA]">
                  No I don't have a good voice hopefully I do have but I love listening to music especially when I am taking a bath
                </p>
              </div>
            </Card>

            <Card
              className={`overflow-hidden transition-all duration-700 ${isPassionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="h-48 bg-[#E8F8F5] dark:bg-[#222A28] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#4ECDC4]">Social Media</h3>
                <p className="text-[#666666] dark:text-[#AAAAAA]">
                  I am creating a content on tiktok and the engangement is so 📈 and I'm loving the attention but I became
                  busy lately and I run out of ideas hehe.
                </p>
              </div>
            </Card>

            <Card
              className={`overflow-hidden transition-all duration-700 ${isPassionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <div className="h-48 bg-[#FFF8E8] dark:bg-[#2A2922] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🖥️</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#FFD166]">Coding</h3>
                <p className="text-[#666666] dark:text-[#AAAAAA]">
                  Before, I cannot answer what my passion is and now I got the answer as my career is growing. I am loving it and I think
                  it will be a long time to retire 😁
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-16 bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center text-[#FF6B6B]">A Day in My Life</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-[#FFE8E8] dark:bg-[#2A2222] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌅</span>
                </div>
                <h4 className="font-medium mb-1">Morning</h4>
                <p className="text-sm text-[#666666] dark:text-[#AAAAAA]">
                  Sometimes I am eating (doesn't sleep yet) and most of the time I am still sleeping.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#E8F8F5] dark:bg-[#222A28] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="font-medium mb-1">Work</h4>
                <p className="text-sm text-[#666666] dark:text-[#AAAAAA]">
                  Deep work sessions with breaks then eating outside
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#FFF8E8] dark:bg-[#2A2922] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏃</span>
                </div>
                <h4 className="font-medium mb-1">Evening</h4>
                <p className="text-sm text-[#666666] dark:text-[#AAAAAA]">
                  Going for a walk for dinner and dessert. I have lots of choices in my hometown (Mcdo, jollibee, kfc, convenient store, ihaw-ihaw etc.)
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#F0F8E8] dark:bg-[#252A22] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💤</span>
                </div>
                <h4 className="font-medium mb-1">Night</h4>
                <p className="text-sm text-[#666666] dark:text-[#AAAAAA]">
                  It's a long tiring day and I love sleeping
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={projectsRef}
          className={`scroll-mt-20 transition-all duration-1000 ${isProjectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="relative z-10">My Work</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-[#FFD166]/40 -z-10 rounded-full"></span>
          </h2>

          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[#666666] dark:text-[#AAAAAA]">
                Here are some of my recent projects. Each one represents a unique challenge and learning experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectLink
                title="Wedding"
                description="A simple wedding website using simple HTML, CSS, bootstrap, javascript integrating to google sheet app script."
                domain="https://keeganandpat.netlify.app/"
                github="https://github.com/VivianMrnd/Wedding"
                color="#4ECDC4"
                isVisible={isProjectsVisible}
                delay={0.1}
              />

              <ProjectLink
                title="To Do List"
                description="A useful to do list app to keep track on my productivity. I am using MERN framework, try it out!"
                domain="https://to-do-list-pi-inky-41.vercel.app/"
                github="https://github.com/VivianMrnd/ToDoList-using-MERN"
                color="#FF6B6B"
                isVisible={isProjectsVisible}
                delay={0.3}
              />

              {/* <ProjectLink
                title="TrailBuddy"
                description="Hiking trail finder with weather integration and community trail reports."
                domain="trailbuddy.vercel.app"
                github="github.com/username/trailbuddy"
                color="#FFD166"
                isVisible={isProjectsVisible}
                delay={0.5}
              />

              <ProjectLink
                title="DevBookshelf"
                description="Curated collection of programming books with notes, highlights, and discussion."
                domain="devbookshelf.vercel.app"
                github="github.com/username/devbookshelf"
                color="#6BCB77"
                isVisible={isProjectsVisible}
                delay={0.7}
              /> */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className={`scroll-mt-20 transition-all duration-1000 ${isContactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-[#6BCB77]/40 -z-10 rounded-full"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              className="bg-white p-8 rounded-2xl shadow-lg space-y-6 dark:bg-[#1E1E1E]"
              style={{
                transform: isContactVisible ? "translateX(0)" : "translateX(-50px)",
                opacity: isContactVisible ? 1 : 0,
                transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              }}
            >
              <p className="text-lg text-[#444444] dark:text-[#DDDDDD] leading-relaxed">
                I'm always open to interesting conversations, collaboration opportunities, or just connecting with
                like-minded people.
              </p>
              <p className="text-lg text-[#444444] dark:text-[#DDDDDD] leading-relaxed">
                Whether you want to discuss a project, talk about music, share hiking recommendations, or just say
                hello, feel free to reach out!
              </p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-[#FFE8E8] border-[#FFD4D4] hover:border-[#FFBDBD] dark:bg-[#2A2222] dark:border-[#3A2A2A]"
                  asChild
                >
                  <a href="mailto:vivian614miranda@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5 text-[#FF6B6B]" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-[#E8F8F5] border-[#D4F1F9] hover:border-[#BDE9F4] dark:bg-[#222A28] dark:border-[#2A3A38]"
                  asChild
                >
                  <a href="https://github.com/VivianMrnd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5 text-[#4ECDC4]" />
                  </a>
                </Button>
                <div className="ml-2 text-[#666666] dark:text-[#AAAAAA]">
                  <p>vivian614miranda@gmail.com</p>
                </div>
              </div>
            </div>
            <form
              className="bg-gradient-to-br from-[#F9FFFE] to-[#F0FFFC] p-8 rounded-2xl shadow-lg space-y-4 dark:from-[#1A2625] dark:to-[#152321]"
              style={{
                transform: isContactVisible ? "translateX(0)" : "translateX(50px)",
                opacity: isContactVisible ? 1 : 0,
                transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
                transitionDelay: "0.2s",
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#4ECDC4]">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full px-4 py-3 border border-[#D4F1F9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] bg-white/80 backdrop-blur-sm dark:bg-[#1E1E1E] dark:border-[#2A3A38]"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#4ECDC4]">
                    Email
                  </label>
                  <input
                    id="email"
                    className="w-full px-4 py-3 border border-[#D4F1F9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] bg-white/80 backdrop-blur-sm dark:bg-[#1E1E1E] dark:border-[#2A3A38]"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-[#4ECDC4]">
                  Subject
                </label>
                <input
                  id="subject"
                  className="w-full px-4 py-3 border border-[#D4F1F9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] bg-white/80 backdrop-blur-sm dark:bg-[#1E1E1E] dark:border-[#2A3A38]"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#4ECDC4]">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-[#D4F1F9] rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] bg-white/80 backdrop-blur-sm dark:bg-[#1E1E1E] dark:border-[#2A3A38]"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#4ECDC4] hover:bg-[#3DBDB4] text-white border-none rounded-xl py-6 text-lg shadow-md"
              >
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E6E6E6] py-8 mt-12 bg-white/50 backdrop-blur-sm dark:bg-[#121212]/50 dark:border-[#2A2A2A]">
        <div className="container text-center">
          <p className="text-[#666666] dark:text-[#AAAAAA]">© {new Date().getFullYear()} | Vivian's Developer Story</p>
          <p className="text-sm text-[#999999] mt-2 dark:text-[#777777]">Built with Next.js, React, and a lot of 🎵</p>
        </div>
      </footer>
    </div>
  )
}

