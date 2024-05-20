"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import html2canvas from "html2canvas";

export default function Home() {

  var backgroundColors=["#B71C1C","#D81B60","#9C27B0","#673AB7","#1A237E","#33691E","#4b0082","#6a5acd","#ffe5b4","#fffff0","#00a86b"]
  var textColors=["black","white","blue","gray","gold"]

  useEffect(() => {
    const changeBackgroundColor = () => {
      const colorFrame = document.getElementById('color-frame');
      if (colorFrame) {
        const randomBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
        colorFrame.style.backgroundColor = randomBackgroundColor;
      }
    };

    const changeVercelTextColors = () => {
      const frameTextVercel = document.getElementById('frame-text-vercel');

      if (frameTextVercel) {
        const randomTextColor = textColors[Math.floor(Math.random() * textColors.length)];
        frameTextVercel.style.color = randomTextColor;
  
      }
    };
    const changeNextTextColors = () => {
      const frameTextNext = document.getElementById('frame-text-next');
      if ( frameTextNext) {
        const randomTextColor = textColors[Math.floor(Math.random() * textColors.length)];
        frameTextNext.style.color = randomTextColor;
      }
    };
    const backgroundColorInterval = setInterval(changeBackgroundColor, 1500);
    const textVercelColorInterval = setInterval(changeVercelTextColors, 2000);
    const textNextColorInterval = setInterval(changeNextTextColors, 2000);

    return () => {
      clearInterval(backgroundColorInterval);
      clearInterval(textVercelColorInterval);
      clearInterval(textNextColorInterval);
    };
  }, []);

  const takeScreenshotOfElement = async () => {
    const element = document.getElementById('color-frame');
    if (element) {
      const canvas = await html2canvas(element);
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'color-frame-screenshot.png';
      link.click();
    }
  };

  const takeScreenshotOfFullPage = async () => {
    const canvas = await html2canvas(document.body);
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'full-page-screenshot.png';
    link.click();
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by changing color&nbsp;
          <code className={styles.code}>Take screenshot of the Frame</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            by Swarup
            
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.color_frame} id="color-frame">

        <h1 id="frame-text-vercel">Vercel</h1>
        <h1 id="frame-text-next">Next/React</h1>
        </div>
      </div>

      <div className={styles.grid_center}>
        <button
          
          className={styles.card}
          onClick={takeScreenshotOfElement}
          rel="noopener noreferrer"
        >
          <h2>
            Screenshot <span>only frame</span>
          </h2>
          
        </button>

        <button
          className={styles.card}
          onClick={takeScreenshotOfFullPage}
          rel="noopener noreferrer"
        >
          <h2>
          Screenshot <span>full page</span>
          </h2>          
        </button>
        
      </div>
      
    </main>
  );
}
