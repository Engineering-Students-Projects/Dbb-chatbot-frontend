import { useEffect, useState } from 'react';
import { IconChevronRight, IconHelp } from '@tabler/icons-react';
import { ActionIcon, Group, Paper, ScrollArea, Text, Transition, UnstyledButton } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';


type FaqItem = { q: string; a?: string };

export function FaqAffix({
  faqs,
  faqOpen,
  setFaqOpen,
  setInput,
  handleSend,
}: {
  faqs: FaqItem[];
  faqOpen: boolean;
  setFaqOpen: (v: boolean | ((o: boolean) => boolean)) => void;
  setInput: (v: string) => void;
  handleSend: () => void;
}) {
  const [showHint, setShowHint] = useState(true);

  // auto-hide hint after 10s
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 10000);
    return () => clearTimeout(t);
  }, []);

  const faqRef = useClickOutside(() => setFaqOpen(false));

  return (
    <div
      ref={faqRef}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      {/* Temporary Hint Bubble */}
      <Transition mounted={showHint} transition="fade" duration={300}>
        {(styles) => (
          <Paper
            w={300}
            style={{
              ...styles,
              position: 'absolute',
              bottom: 80,
              right: 10,
              padding: '8px 12px',
              background: 'rgba(30,30,32,0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
              maxWidth: 300,
            }}
          >
            <Text
              size="xs"
              c="white"
              style={{
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                lineHeight: 1.4,
              }}
            >
              Need some example questions to ask? Check most frequently asked questions by clicking
              the icon.
            </Text>
          </Paper>
        )}
      </Transition>

      {/* FAQ Panel */}
      <Transition transition="fade" mounted={faqOpen} duration={150}>
        {(styles) => (
          <Paper
            shadow="xl"
            radius="md"
            style={{
              ...styles,
              position: 'absolute',
              bottom: 70,
              right: 0,
              width: 280,
              height: 560,
              background: 'rgba(20,20,22,0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}
          >
            <ScrollArea h="100%" p="md">
              {faqs.map((f, i) => (
                <UnstyledButton
                  key={i}
                  onClick={() => {
                    setInput(f.q);
                    handleSend();
                    setFaqOpen(false);
                    setShowHint(false);
                  }}
                  style={{
                    width: '100%',
                    padding: '8px 6px',
                    borderRadius: 6,
                    transition: '0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <Group justify="space-between" align="flex-start" wrap="nowrap">
                    <Text
                      c="white"
                      size="xs"
                      style={{
                        flex: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {f.q}
                    </Text>

                    <IconChevronRight size={14} color="rgba(255,255,255,0.5)" />
                  </Group>
                </UnstyledButton>
              ))}
            </ScrollArea>
          </Paper>
        )}
      </Transition>

      {/* Floating Button */}
      <div className="faq-float-btn">
        <div className="faq-glow" />

        <ActionIcon
          size={64}
          radius="xl"
          variant="gradient"
          gradient={{ from: 'blue', to: 'violet', deg: 135 }}
          onClick={() => {
            setShowHint(false);
            setFaqOpen((o) => !o);
          }}
          style={{
            boxShadow: '0 10px 30px rgba(0,122,255,0.5)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <IconHelp size={30} />
        </ActionIcon>
      </div>
    </div>
  );
}
