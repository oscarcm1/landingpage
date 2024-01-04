import React from 'react'
import "./footer.css"
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <footer className='footer'>
            <section className='social-media'>
                <a href=""><Icon icon="ic:baseline-facebook"  /></a>
                <a href=""><Icon icon="ic:baseline-tiktok"  /></a>
                <a href=""><Icon icon="mdi:instagram"  /></a>
                <a href=""><Icon icon="akar-icons:linkedin-fill"  /></a>
                <a href=""><Icon icon="akar-icons:x-fill" /></a>
            </section>
            <p>©OscarDigital 2023</p>
        </footer>
    )
}

export default Footer