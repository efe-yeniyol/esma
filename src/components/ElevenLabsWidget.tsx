"use client";

import { useEffect, useRef } from "react";

interface ElevenLabsWidgetProps {
  agentId: string;
}

export default function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Script'i yükle
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    // Custom element'i oluştur
    const createWidget = () => {
      if (widgetRef.current) {
        const widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', agentId);
        widgetRef.current.appendChild(widget);
      }
    };

    // Script yüklendikten sonra widget'ı oluştur
    script.onload = createWidget;

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [agentId]);

  return <div ref={widgetRef}></div>;
}
