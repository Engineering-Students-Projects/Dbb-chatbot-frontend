import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Box, Button, Flex, Paper, Text, TextInput, useMantineTheme } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

import './AiChat.css';

// SVG imports
import { AiGlobeMeshSvg } from '@/components/AiChat/AiGlobeMeshSvg';
import { NeuralNetworkSvg } from '@/components/AiChat/NeuralNetworkSvg';

type ChatMsg = {
  role: 'user' | 'ai';
  text: string;
};

export function AiChat() {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState('');
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();
  const isPhoneWidth = rect.width < 700;

  function runChatAnimations() {
    gsap.registerPlugin(SplitText);
    const segmenter = new Intl.Segmenter('zh', { granularity: 'word' });

    const target = document.querySelector('.split');
    if (!target) return;

    gsap.set(target, { opacity: 1 });

    const split = SplitText.create(target, {
      type: 'words',
      wordsClass: 'word',
      prepareText: (text) =>
        [...segmenter.segment(text)].map((s) => s.segment).join(String.fromCharCode(8204)),
      wordDelimiter: { delimiter: /\u200c/, replaceWith: ' ' },
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          duration: 0.6,
        });
      },
    });

    gsap.fromTo(
      '.ai-globe-svg .globe-lat',
      { strokeDasharray: 2000, strokeDashoffset: 2000 },
      { strokeDashoffset: 0, duration: 1.2, stagger: 0.12, ease: 'power1.out' }
    );

    gsap.fromTo(
      '.ai-globe-svg .globe-lon',
      { strokeDasharray: 2000, strokeDashoffset: 2000 },
      { strokeDashoffset: 0, duration: 1.2, delay: 0.9, stagger: 0.1, ease: 'power1.out' }
    );

    gsap.to('.ai-globe-svg', {
      rotate: 360,
      duration: 150,
      repeat: -1,
      ease: 'none',
    });

    gsap.to('.ai-globe-svg', {
      x: -70,
      y: -30,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 5,
    });

    gsap.to('.neural-network-svg .nn-node', {
      scale: 1.3,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: 'sine.inOut',
    });

    gsap.fromTo(
      '.neural-network-svg .nn-line',
      { strokeDasharray: 200, strokeDashoffset: 200 },
      {
        strokeDashoffset: 0,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        stagger: 0.08,
        ease: 'power1.inOut',
      }
    );


    gsap.to('.blob-blue', {
      x: 120,
      y: 100,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.blob-purple', {
      x: -140,
      y: -120,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.blob-cyan', {
      x: 80,
      y: -60,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.fromTo(
      '.light-beam',
      { x: '-120%' },
      { x: '120%', duration: 6, repeat: -1, ease: 'sine.inOut' }
    );
  }

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('.intro-text', {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    });

    tl.to({}, { duration: 0.4 });

    tl.to('#intro-screen', {
      scale: 1.6,
      opacity: 0,
      duration: 1.4,
      ease: 'power3.inOut',
    });

    tl.to(
      '#chat-wrapper',
      {
        opacity: 1,
        filter: 'blur(0px)',
        transform: 'scale(1)',
        duration: 0.9,
        ease: 'power3.out',
        onStart: () => {
          document.getElementById('chat-wrapper')?.classList.remove('chat-hidden');
        },
      },
      '-=0.8'
    );

    tl.add(() => {
      const el = document.getElementById('intro-screen');
      if (el) el.style.display = 'none';

      setTimeout(() => runChatAnimations(), 150);
    });
  });

  // ---------------------------------------------------------
  // MOUSE PARALLAX BLOBS
  // ---------------------------------------------------------
  useGSAP(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.015;
      const y = (e.clientY - window.innerHeight / 2) * 0.015;

      gsap.to('.blob-blue', { x: 120 + x, y: 100 + y, duration: 1.5, ease: 'sine.out' });
      gsap.to('.blob-purple', { x: -140 + x, y: -120 + y, duration: 1.8, ease: 'sine.out' });
      gsap.to('.blob-cyan', { x: 80 + x, y: -60 + y, duration: 2.0, ease: 'sine.out' });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  });

  // ---------------------------------------------------------
  // BACKGROUND LIGHT BEAM
  // ---------------------------------------------------------
  useGSAP(() => {
    gsap.fromTo(
      '.light-beam',
      { x: '-120%' },
      { x: '120%', duration: 6, repeat: -1, ease: 'sine.inOut' }
    );
  });

  // ---------------------------------------------------------
  // BACKGROUND FLOATING BLOBS IDLE ANIM
  // ---------------------------------------------------------
  useGSAP(() => {
    gsap.to('.blob-blue', {
      x: 120,
      y: 100,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.blob-purple', {
      x: -140,
      y: -120,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.blob-cyan', {
      x: 80,
      y: -60,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });

  // ---------------------------------------------------------
  // CHAT SEND LOGIC
  // ---------------------------------------------------------
  function handleSend() {
    if (!input.trim()) return;

    const userMsg: ChatMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const aiMsg: ChatMsg = {
        role: 'ai',
        text: `AI response for: ${userMsg.text}`,
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 400);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSend();
  }

  // ---------------------------------------------------------
  // RENDER UI
  // ---------------------------------------------------------
  return (
    <>
      <div id="chat-wrapper">
        <Flex
          ref={ref}
          direction="column"
          h="100vh"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: `
          radial-gradient(1200px at 50% -20%, rgba(0,122,255,0.12), transparent 60%),
          radial-gradient(900px at 80% 120%, rgba(120,0,240,0.12), transparent 60%),
          linear-gradient(#0b0b0c, #101113)
        `,
          }}
        >
          <div className="blob blob-blue" />
          <div className="blob blob-purple" />
          <div className="blob blob-cyan" />
          <div className="light-beam" />

          <div className="glass-overlay" />
          <div className="noise" />

          {messages.length === 0 && (
            <Flex
              align="center"
              justify="center"
              direction="column"
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.6,
                pointerEvents: 'none',
                zIndex: 2,
                textAlign: 'center',
              }}
            >
              <h1 style={{ color: 'white' }} className="split">
                Welcome To DBB Chatbot
              </h1>
            </Flex>
          )}

          <Box
            style={{
              paddingTop: 50,
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              paddingRight: isPhoneWidth ? 20 : 300,
              paddingLeft: isPhoneWidth ? 20 : 300,
              position: 'relative',
              zIndex: 3,
            }}
          >
            {messages.map((msg, i) => (
              <Flex key={i} justify={msg.role === 'user' ? 'flex-end' : 'flex-start'} mb={10}>
                <Paper
                  p="sm"
                  radius="xl"
                  style={{
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    maxWidth: '70%',
                    background: msg.role === 'user' ? theme.colors.blue[6] : theme.colors.dark[5],
                    color: 'white',
                    border: msg.role === 'ai' ? `1px solid ${theme.colors.dark[3]}` : 'none',
                    boxShadow:
                      msg.role === 'user'
                        ? '0 4px 12px rgba(0, 122, 255, 0.35)'
                        : '0 4px 12px rgba(150, 0, 255, 0.25)',
                  }}
                >
                  <Text size="sm" style={{ whiteSpace: 'pre-wrap' }}>
                    {msg.text}
                  </Text>
                </Paper>
              </Flex>
            ))}
          </Box>

          <Flex mb={70} align="center" justify="center" gap="sm">
            <TextInput
              autoFocus
              placeholder="Ask Something About Duru Beren Baş"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              radius="xl"
              w={!isPhoneWidth ? '50%' : '100%'}
              px={isPhoneWidth ? 40 : 0}
              size="lg"
              rightSectionWidth={48}
              rightSection={
                <Button
                  className={`send-btn ${input.trim().length === 0 ? 'disabled' : ''}`}
                  onClick={handleSend}
                >
                  ➤
                </Button>
              }
              styles={{
                input: {
                  background: 'transparent',
                  color: 'white',
                  borderColor: '#e0e0e0',
                  paddingRight: 50,
                },
              }}
            />
          </Flex>

          <div className="animated-svgs">
            <NeuralNetworkSvg />
            <AiGlobeMeshSvg />
          </div>
        </Flex>
      </div>
      <div id="intro-screen">
        <h1 className="intro-text">
          Every question is a doorway.
          <br />
          Welcome to the mind of DBB.
        </h1>
      </div>
    </>
  );
}
