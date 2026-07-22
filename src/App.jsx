import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "나와는 어떤 서비스인가요?",
    answer:
      "나와는 긴 글을 쓰지 않아도 지금의 감정과 마음을 간단한 선택으로 기록할 수 있는 서비스예요. 기록이 쌓이면 반복해서 나타나는 감정과 문장을 통해 나만의 패턴을 확인할 수 있어요.",
  },
  {
    id: 2,
    question: "기록하는 데 얼마나 걸리나요?",
    answer:
      "복잡한 일기를 작성할 필요 없이 가장 가까운 감정과 문장을 선택하면 돼요. 한 번의 기록은 약 10초 정도면 충분해요.",
  },
  {
    id: 3,
    question: "패턴은 언제부터 확인할 수 있나요?",
    answer:
      "처음에는 지금의 마음을 부담 없이 기록하는 데 집중해요. 기록이 충분히 쌓이면 자주 선택한 감정과 문장 그리고 반복되는 흐름을 차례로 확인할 수 있어요.",
  },
  {
    id: 4,
    question: "나와가 감정을 분석하거나 진단하나요?",
    answer:
      "나와는 사용자를 진단하거나 감정을 단정하지 않아요. 사용자가 직접 남긴 기록을 다시 살펴볼 수 있도록 정리해 보여주는 역할을 해요.",
  },
  {
    id: 5,
    question: "기록한 내용은 안전하게 보관되나요?",
    answer:
      "기록은 사용자가 자신의 마음을 돌아보기 위한 개인적인 정보예요. 정식 서비스에서는 개인정보 보호와 안전한 데이터 관리를 가장 중요한 원칙으로 적용할 예정이에요.",
  },
];

export default function App() {
  const [openId, setOpenId] = useState(1);

  const handleAccordion = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #fffdfb;
          color: #2c2a2a;
          font-family:
            Pretendard,
            "Noto Sans KR",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        button {
          font: inherit;
        }

        .faq-section {
          width: 100%;
          min-height: 917px;
          padding: 50px 150px;
          display: flex;
          align-items: center;
          background:
            radial-gradient(
              circle at 16% 18%,
              rgba(79, 122, 117, 0.08),
              transparent 26%
            ),
            radial-gradient(
              circle at 87% 76%,
              rgba(229, 137, 137, 0.08),
              transparent 24%
            ),
            #fffdfb;
        }

        .faq-inner {
          width: 100%;
          max-width: 1620px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 140px;
          align-items: start;
        }

        .faq-heading {
          position: sticky;
          top: 50px;
          padding-top: 16px;
        }

        .faq-eyebrow {
          margin: 0 0 18px;
          color: #4f7a75;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .faq-title {
          margin: 0;
          font-size: clamp(42px, 3.1vw, 64px);
          line-height: 1.18;
          letter-spacing: -0.055em;
          font-weight: 700;
        }

        .faq-title-accent {
          color: #4f7a75;
        }

        .faq-description {
          max-width: 480px;
          margin: 28px 0 0;
          color: #66615f;
          font-size: 18px;
          line-height: 1.85;
          letter-spacing: -0.02em;
        }

        .faq-guide {
          margin-top: 54px;
          display: flex;
          align-items: center;
          gap: 14px;
          color: #77716e;
          font-size: 14px;
        }

        .faq-guide-line {
          width: 52px;
          height: 1px;
          background: #b8c9c6;
        }

        .faq-list {
          border-top: 1px solid #dcd6d2;
        }

        .faq-item {
          border-bottom: 1px solid #dcd6d2;
          transition:
            background-color 220ms ease,
            padding 220ms ease;
        }

        .faq-item.is-open {
          background: rgba(79, 122, 117, 0.045);
        }

        .faq-question {
          width: 100%;
          min-height: 108px;
          padding: 0 20px;
          border: 0;
          background: transparent;
          color: #2c2a2a;
          display: grid;
          grid-template-columns: 58px 1fr 54px;
          gap: 20px;
          align-items: center;
          text-align: left;
          cursor: pointer;
        }

        .faq-number {
          color: #a59d99;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .faq-item.is-open .faq-number {
          color: #4f7a75;
        }

        .faq-question-text {
          font-size: 22px;
          line-height: 1.45;
          letter-spacing: -0.035em;
          font-weight: 600;
          transition: color 180ms ease;
        }

        .faq-question:hover .faq-question-text,
        .faq-item.is-open .faq-question-text {
          color: #3f6c67;
        }

        .faq-icon {
          width: 42px;
          height: 42px;
          border: 1px solid #d7d1cd;
          border-radius: 50%;
          display: grid;
          place-items: center;
          justify-self: end;
          position: relative;
          transition:
            transform 260ms ease,
            border-color 220ms ease,
            background-color 220ms ease;
        }

        .faq-question:hover .faq-icon {
          border-color: #4f7a75;
        }

        .faq-item.is-open .faq-icon {
          transform: rotate(45deg);
          border-color: #4f7a75;
          background: #4f7a75;
        }

        .faq-icon::before,
        .faq-icon::after {
          content: "";
          position: absolute;
          width: 14px;
          height: 1.5px;
          border-radius: 999px;
          background: #4f7a75;
          transition: background-color 220ms ease;
        }

        .faq-icon::after {
          transform: rotate(90deg);
        }

        .faq-item.is-open .faq-icon::before,
        .faq-item.is-open .faq-icon::after {
          background: #fffdfb;
        }

        .faq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition:
            grid-template-rows 320ms ease,
            opacity 230ms ease;
        }

        .faq-item.is-open .faq-answer-wrap {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .faq-answer-hidden {
          overflow: hidden;
        }

        .faq-answer {
          margin: 0;
          padding: 0 92px 38px 98px;
          color: #66615f;
          font-size: 17px;
          line-height: 1.9;
          letter-spacing: -0.02em;
        }

        @media (max-width: 1200px) {
          .faq-section {
            padding: 64px 72px;
          }

          .faq-inner {
            gap: 70px;
          }
        }

        @media (max-width: 900px) {
          .faq-section {
            min-height: auto;
            padding: 80px 40px;
          }

          .faq-inner {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .faq-heading {
            position: static;
          }

          .faq-description {
            max-width: 650px;
          }
        }

        @media (max-width: 600px) {
          .faq-section {
            padding: 72px 20px;
          }

          .faq-title {
            font-size: 38px;
          }

          .faq-description {
            margin-top: 22px;
            font-size: 16px;
          }

          .faq-guide {
            display: none;
          }

          .faq-question {
            min-height: 92px;
            padding: 0 4px;
            grid-template-columns: 36px 1fr 42px;
            gap: 10px;
          }

          .faq-question-text {
            font-size: 18px;
          }

          .faq-icon {
            width: 36px;
            height: 36px;
          }

          .faq-answer {
            padding: 0 46px 30px 46px;
            font-size: 15px;
            line-height: 1.8;
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-heading">
            <p className="faq-eyebrow">FAQ</p>

            <h1 className="faq-title">
              나와에 대해
              <br />
              <span className="faq-title-accent">궁금한 점이 있나요?</span>
            </h1>

            <p className="faq-description">
              나와를 시작하기 전에 많이 궁금해하는 내용을 모았어요. 질문을
              선택하면 답변을 확인할 수 있어요.
            </p>

            <div className="faq-guide">
              <span className="faq-guide-line" />
              <span>질문을 눌러 확인해 보세요</span>
            </div>
          </div>

          <div className="faq-list">
            {faqData.map((faq, index) => {
              const isOpen = openId === faq.id;

              return (
                <article
                  key={faq.id}
                  className={`faq-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => handleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question-text">{faq.question}</span>

                    <span className="faq-icon" aria-hidden="true" />
                  </button>

                  <div id={`faq-answer-${faq.id}`} className="faq-answer-wrap">
                    <div className="faq-answer-hidden">
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
