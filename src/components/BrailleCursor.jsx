'use client'

import { useEffect, useRef, useState } from 'react'

export default function BrailleCursorGarage_3x3() {
  const cursorRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [merged, setMerged] = useState(false)
  const [trail, setTrail] = useState([])
  const lastMoveTime = useRef(Date.now())

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      setPosition({ x, y })
      lastMoveTime.current = Date.now()
      setMerged(true)

      const uniqueId = crypto.randomUUID() 

      setTrail((prev) => [...prev, { x, y, id: uniqueId }])
      setTimeout(() => {
        setTrail((prev) => prev.slice(1))
      }, 400)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTime.current > 1000) {
        setMerged(false)
      } else {
        setMerged(true)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleClick = () => {
      if (navigator.vibrate) {
        navigator.vibrate(30)
      }
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  const dotCount = 9

  return (
    <>
      {/* Хвост */}
      {trail.map(({ x, y, id }) => (
        <div
          key={id}
          className={`braille-cursor trail ${merged ? 'merged' : 'expanded'}`}
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: `translate(0, 0)`
          }}
        >
          <div className="aura" />
          {[...Array(dotCount)].map((_, i) => (
            <div key={i} className={`dot dot-${i}`} />
            
          ))}
        </div>
      ))}

      {/* Основной курсор */}
      <div
        ref={cursorRef}
        className={`braille-cursor ${merged ? 'merged' : 'expanded'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',

        }}
      >
        <div className="aura" />
        {[...Array(dotCount)].map((_, i) => (
          <div key={i} className={`dot dot-${i}`} />
        ))}
      </div>

      <style jsx>{`
        .braille-cursor {
          position: fixed;
          width: 36px;
          height: 48px;
          z-index: 9999;
          pointer-events: none;
        }

        .dot {
          position: absolute;
          background: white;
          border-radius: 50%;
          transition: all 0.4s ease;
        }

        .merged .dot {
          width: 14px;
          height: 14px;
          top: 50%;
          left: 50%;
          box-shadow:
          
            0 0 4px rgba(255, 255, 255, 0.5),
            0 0 8px rgba(255, 255, 255, 0.3),
            inset 0 0 4px rgba(255, 255, 255, 0.6);
        }

        .expanded .dot {
          width: 6px;
          height: 6px;
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
          animation: pulse 2s infinite ease-in-out;
          
        }

        .expanded .dot-0 { top: 0px;  left: 0px; }
        .expanded .dot-1 { top: 0px;  left: 15px; }
        .expanded .dot-2 { top: 0px;  left: 30px; }

        .expanded .dot-3 { top: 15px; left: 0px; }
        .expanded .dot-4 { top: 15px; left: 15px; }
        .expanded .dot-5 { top: 15px; left: 30px; }

        .expanded .dot-6 { top: 30px; left: 0px; }
        .expanded .dot-7 { top: 30px; left: 15px; }
        .expanded .dot-8 { top: 30px; left: 30px; }

        .aura {
          position: absolute;
          width: 60px;
          height: 60px;
          top: -10px;
          left: -12px;
          background: radial-gradient(circle, rgba(0, 255, 204, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s ease;
          
        }

        .expanded .aura {
          opacity: 1;
          animation: auraPulse 2s infinite ease-in-out;
          
        }

        .trail {
          z-index: 9998;
          opacity: 0.3;
          animation: fadeOut 0.2s ease-out forwards;
          transition: left 0.2s ease, top 0.2s ease;
          
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        @keyframes auraPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.5;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 0.3;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.6);
          }
        }

        :global(*) {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
