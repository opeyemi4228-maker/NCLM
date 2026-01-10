'use client'

import dynamic from 'next/dynamic'

const ToasterClient = dynamic(() => import('./ToasterClient'), { ssr: false })

export default function ToasterWrapper() {
  return <ToasterClient />
}