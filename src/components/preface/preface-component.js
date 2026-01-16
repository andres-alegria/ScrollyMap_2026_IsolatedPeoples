import React from 'react';
import { useTranslation } from 'react-i18next';
import './preface.scss';

const Preface = ({ title, subtitle, paragraphs }) => {
  const { t } = useTranslation();

  return (
    <section className="preface">
      <div className="preface__inner">
        {title && <h2 className="preface__title">{t(title)}</h2>}
        {subtitle && <p className="preface__subtitle">{t(subtitle)}</p>}

        {(paragraphs || []).map((p, i) => (
          <p key={i} className="preface__p">{t(p)}</p>
        ))}
      </div>
    </section>
  );
};

export default Preface;
