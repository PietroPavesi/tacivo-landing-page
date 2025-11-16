import { useVoiceControls } from '@/hooks/useVoiceControls';

interface VoiceControlsProps {
  onTranscription: (text: string) => void;
  onPlayLastMessage: () => void;
  disabled?: boolean;
  hasMessages?: boolean;
  voiceControls: ReturnType<typeof useVoiceControls>;
}

export function VoiceControls({
  onTranscription,
  onPlayLastMessage,
  disabled = false,
  hasMessages = false,
  voiceControls
}: VoiceControlsProps) {
  const {
    isRecording,
    isTranscribing,
    startRecording,
    stopRecording,
  } = voiceControls;

  const handleMicClick = async () => {
    if (isRecording) {
      try {
        const text = await stopRecording();
        onTranscription(text);
      } catch {
        alert('Failed to transcribe audio. Please try again.');
      }
    } else {
      await startRecording();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleMicClick}
        disabled={disabled || isTranscribing}
        className={`p-2 rounded-lg transition-all ${
          isRecording
            ? 'text-red-500 bg-red-50 scale-110'
            : isTranscribing
            ? 'text-purple-500'
            : 'text-[#7c3aed] opacity-90 hover:opacity-100 hover:scale-110 hover:bg-purple-50'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
        title={isRecording ? 'Click to stop recording' : 'Start recording'}
      >
        {isTranscribing ? (
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : isRecording ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="6" width="12" height="12" rx="2" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
          </svg>
        )}
      </button>
      {isRecording && (
        <div className="absolute -top-1 -right-1">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
      )}
    </div>
  );
}
