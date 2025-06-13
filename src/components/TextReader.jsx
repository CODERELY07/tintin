import { useState, useRef, useEffect } from 'react';

const TextReader = ({ text }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef(null);
  const words = text.split(' ');
  const voicesRef = useRef([]);

  // Load voices once they are available
  useEffect(() => {
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const selectVoice = () => {
    const voices = voicesRef.current;

    // 1. Try to find Filipino voice by lang code
    let selectedVoice = voices.find(
      (voice) => voice.lang.toLowerCase().includes('fil') || voice.lang.toLowerCase().includes('tl')
    );

    // 2. Try to find by name (Google sometimes labels it like this)
    if (!selectedVoice) {
      selectedVoice = voices.find(
        (voice) =>
          voice.name.toLowerCase().includes('filipino') ||
          voice.name.toLowerCase().includes('tagalog') ||
          voice.name.toLowerCase().includes('philippines')
      );
    }

    // 3. Fallback to female voice
    if (!selectedVoice) {
      selectedVoice = voices.find(
        (voice) =>
          voice.name.toLowerCase().includes('female') ||
          voice.name.toLowerCase().includes('google uk english female')
      );
    }

    // 4. Absolute fallback
    if (!selectedVoice && voices.length > 0) {
      selectedVoice = voices[0];
    }

    return selectedVoice;
  };

  const handlePlay = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentWordIndex(-1);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    const voice = selectVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = 0.8; // slow it down for clarity
    utterance.pitch = 1;

    let wordCount = 0;
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        setCurrentWordIndex(wordCount);
        wordCount++;
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentWordIndex(-1);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="flex items-start gap-2 max-w-2xl">
      <button
        onClick={handlePlay}
        className={`p-2 rounded-full`}
        aria-label={isPlaying ? 'Stop reading' : 'Read aloud'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      <p className="text-white leading-relaxed">
        {words.map((word, index) => (
          <span
            key={index}
            className={`transition-colors duration-200 ${currentWordIndex === index ? 'bg-yellow-200 text-white' : ''}`}
          >
            {word}{' '}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TextReader;
