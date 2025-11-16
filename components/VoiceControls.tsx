import { useVoiceControls } from '@/hooks/useVoiceControls';

interface VoiceControlsProps {
  onTranscription: (text: string) => void;
  onPlayLastMessage: () => void;
  disabled?: boolean;
  hasMessages?: boolean;
}

export function VoiceControls({
  onTranscription,
  onPlayLastMessage,
  disabled = false,
  hasMessages = false
}: VoiceControlsProps) {
  const {
    isRecording,
    isTranscribing,
    isPlaying,
    startRecording,
    stopRecording,
    stopPlayback,
  } = useVoiceControls();

  const handleMicClick = async () => {
    if (isRecording) {
      try {
        const text = await stopRecording();
        onTranscription(text);
      } catch (error) {
        alert('Failed to transcribe audio. Please try again.');
      }
    } else {
      await startRecording();
    }
  };

  const handleSpeakerClick = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      onPlayLastMessage();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Microphone Button */}
      <button
        onClick={handleMicClick}
        disabled={disabled || isTranscribing}
        className={`p-3 rounded-lg transition ${
          isRecording
            ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
        title={isRecording ? 'Stop recording' : 'Start recording'}
      >
        {isTranscribing ? (
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
          </svg>
        )}
      </button>

      {/* Speaker Button */}
      <button
        onClick={handleSpeakerClick}
        disabled={disabled || !hasMessages}
        className={`p-3 rounded-lg transition ${
          isPlaying
            ? 'bg-[#5B21B6] hover:bg-[#4C1D95] text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
        title={isPlaying ? 'Stop playback' : 'Play last AI message'}
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>

      {/* Status Indicator */}
      {isRecording && (
        <span className="text-xs text-red-600 font-medium">Recording...</span>
      )}
      {isTranscribing && (
        <span className="text-xs text-gray-600 font-medium">Transcribing...</span>
      )}
      {isPlaying && (
        <span className="text-xs text-[#5B21B6] font-medium">Playing...</span>
      )}
    </div>
  );
}
