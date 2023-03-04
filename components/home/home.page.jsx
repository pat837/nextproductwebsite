import React from 'react'
import Navbar from '../navbar/navbar'
import HeroSection from './hero-section/hero-section'
import ScrollBanner from './scroll-banner/scroll-banner'

export default function HomePage() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <ScrollBanner />
        </main>
    )
}
