import { useState } from "react";

const emotionOptions = [
  {
    id: "anger",
    label: "분노",
    emoji: "😠",
    sentences: [
      "말이 안 통해",
      "나만 혼자인 것 같아",
      "내가 다 하는 것 같아",
      "무시당한 것 같아",
    ],
  },
  {
    id: "anxiety",
    label: "불안",
    emoji: "😟",
    sentences: [
      "실수하면 큰일 날 것 같아",
      "맞는지 모르겠어",
      "못 해낼 것 같아",
      "혼자 남겨질 것 같아",
    ],
  },
  {
    id: "sadness",
    label: "슬픔",
    emoji: "😢",
    sentences: [
      "나만 혼자인 것 같아",
      "아무도 내 마음을 모르는 것 같아",
      "나 혼자 버티는 것 같아",
      "내가 잘못한 것 같아",
    ],
  },
  {
    id: "helpless",
    label: "무기력",
    emoji: "😔",
    sentences: [
      "아무것도 하고 싶지 않아",
      "시작할 힘이 없는 것 같아",
      "계속 미루게 돼",
      "그냥 가만히 있고 싶어",
    ],
  },
];

export default function NowaPreview() {
  const [step, setStep] = useState(1);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [selectedSentence, setSelectedSentence] = useState("");

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setSelectedSentence("");
    setStep(2);
  };

  const handleSentenceClick = (sentence) => {
    setSelectedSentence(sentence);
  };

  const handleResultClick = () => {
    if (!selectedSentence) return;
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedEmotion(null);
    setSelectedSentence("");
  };

  return (
    <section className="bg-stone-50 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* 왼쪽 설명 */}
        <div>
          <p className="mb-4 text-sm font-semibold text-emerald-800">
            나와 미리 체험하기
          </p>

          <h2 className="text-3xl font-bold leading-tight text-stone-800 md:text-4xl">
            긴 글을 쓰지 않아도
            <br />
            지금의 나를 기록할 수 있어요
          </h2>

          <p className="mt-6 max-w-lg leading-7 text-stone-600">
            지금 가장 가까운 감정과 문장을 선택해 보세요. 짧은 선택만으로도 내
            마음을 조금 더 가까이 바라볼 수 있어요.
          </p>

          {/* 진행 단계 */}
          <div className="mt-10 flex items-center gap-3">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex items-center gap-3">
                <div
                  className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold ${
                    step >= number
                      ? "bg-emerald-800 text-white"
                      : "bg-stone-200 text-stone-500"
                  }`}
                >
                  {number}
                </div>

                {number < 3 && (
                  <div
                    className={`h-px w-10 ${
                      step > number ? "bg-emerald-800" : "bg-stone-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 체험 카드 */}
        <div className="mx-auto w-full max-w-md rounded-3xl border border-stone-200 bg-white p-6 shadow-lg md:p-8">
          {/* 1단계: 감정 선택 */}
          {step === 1 && (
            <div>
              <p className="text-sm text-stone-500">STEP 01</p>

              <h3 className="mt-2 text-2xl font-bold text-stone-800">
                오늘 가장 가까운 감정은?
              </h3>

              <p className="mt-2 text-sm text-stone-500">
                지금 느껴지는 감정 하나를 선택해 주세요.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {emotionOptions.map((emotion) => (
                  <button
                    key={emotion.id}
                    type="button"
                    onClick={() => handleEmotionClick(emotion)}
                    className="rounded-2xl border border-stone-200 bg-stone-50 p-5 text-left transition hover:-translate-y-1 hover:border-emerald-700 hover:bg-emerald-50"
                  >
                    <span className="text-3xl">{emotion.emoji}</span>

                    <span className="mt-3 block font-semibold text-stone-800">
                      {emotion.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2단계: 문장 선택 */}
          {step === 2 && selectedEmotion && (
            <div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm text-stone-500 hover:text-stone-800"
              >
                ← 감정 다시 선택
              </button>

              <p className="mt-6 text-sm text-stone-500">STEP 02</p>

              <h3 className="mt-2 text-2xl font-bold text-stone-800">
                어떤 마음이 가장 가까운가요?
              </h3>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-800">
                <span>{selectedEmotion.emoji}</span>
                <span>{selectedEmotion.label}</span>
              </div>

              <div className="mt-8 space-y-3">
                {selectedEmotion.sentences.map((sentence) => (
                  <button
                    key={sentence}
                    type="button"
                    onClick={() => handleSentenceClick(sentence)}
                    className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                      selectedSentence === sentence
                        ? "border-emerald-800 bg-emerald-50 text-emerald-900"
                        : "border-stone-200 bg-white text-stone-700 hover:border-emerald-600"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-4">
                      {sentence}

                      <span
                        className={`size-5 rounded-full border ${
                          selectedSentence === sentence
                            ? "border-emerald-800 bg-emerald-800"
                            : "border-stone-300"
                        }`}
                      />
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleResultClick}
                disabled={!selectedSentence}
                className="mt-8 w-full rounded-full bg-emerald-800 py-4 font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:bg-stone-300"
              >
                결과 보기
              </button>
            </div>
          )}

          {/* 3단계: 결과 */}
          {step === 3 && selectedEmotion && (
            <div className="text-center">
              <p className="text-sm text-stone-500">STEP 03</p>

              <div className="mt-8 text-5xl">{selectedEmotion.emoji}</div>

              <p className="mt-4 font-semibold text-emerald-800">
                {selectedEmotion.label}
              </p>

              <h3 className="mt-6 text-2xl font-bold leading-relaxed text-stone-800">
                “{selectedSentence}”
              </h3>

              <div className="mt-8 rounded-2xl bg-rose-50 p-5">
                <p className="text-sm leading-6 text-stone-600">
                  당신의 지금
                  <br />
                  여기 있어요.
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-8 w-full rounded-full border border-emerald-800 py-4 font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                다시 체험하기
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
