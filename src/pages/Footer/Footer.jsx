import React from 'react'
import "./footer.css"
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <div className='footer'>
            <div className='social-media'>
                <a href=""><Icon icon="ic:baseline-facebook"  /></a>
                <a href=""><Icon icon="ic:baseline-tiktok"  /></a>
                <a href=""><Icon icon="mdi:instagram"  /></a>
                <a href=""><Icon icon="akar-icons:linkedin-fill"  /></a>
                <a href=""><Icon icon="akar-icons:x-fill" /></a>
            </div>
            <p>© Vale Digital 2023</p>
        </div>
    )
}

export default Footer